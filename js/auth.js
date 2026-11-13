/**
 * FableFlow Authentication & Onboarding Portal
 * Manages registered user sessions, guest exploration sessions, registration
 * with accessibility preferences, and demo accounts via localStorage.
 */

window.FableFlow = window.FableFlow || {};

FableFlow.Auth = (function() {
  const STORAGE_KEY = 'fableflow_current_user';
  const USERS_KEY = 'fableflow_users';
  const SESSION_TYPE_KEY = 'fableflow_session_type';

  let currentUser = null;

  function init() {
    initDefaultUsers();
    restoreSession();
    bindEvents();
    updateUI();
  }

  function initDefaultUsers() {
    if (!localStorage.getItem(USERS_KEY)) {
      const defaultUsers = [
        {
          id: 'usr_author_1',
          username: 'ElenaVance',
          email: 'elena@fableflow.com',
          password: 'password123',
          bio: 'Fantasy author & mythmaker. Crafting worlds where starlight bends and ancient dragons remember.',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
          followersCount: 1420,
          followingCount: 88,
          totalReads: 85200,
          favouriteGenres: ['Fantasy', 'Adventure', 'Mystery'],
          preferences: {
            fontFamily: 'lexend',
            fontSize: 16,
            lineSpacing: 1.6,
            wordSpacing: 1,
            theme: 'light'
          }
        },
        {
          id: 'usr_author_2',
          username: 'MarcusSterling',
          email: 'marcus@fableflow.com',
          password: 'password123',
          bio: 'Cyberpunk & Sci-Fi dreamer. Obsessed with neural networks, neon alleys, and space opera.',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
          followersCount: 950,
          followingCount: 42,
          totalReads: 49100,
          favouriteGenres: ['Science Fiction', 'Thriller'],
          preferences: {
            fontFamily: 'georgia',
            fontSize: 16,
            lineSpacing: 1.5,
            wordSpacing: 0.5,
            theme: 'dark'
          }
        }
      ];
      localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers));
    }
  }

  function restoreSession() {
    try {
      const sessionType = localStorage.getItem(SESSION_TYPE_KEY);
      if (sessionType === 'guest') {
        currentUser = {
          id: 'usr_guest',
          username: 'Guest',
          email: 'guest@fableflow.com',
          bio: 'Browsing FableFlow as a Guest',
          avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Guest',
          isGuest: true
        };
        return;
      }

      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        currentUser = JSON.parse(saved);
        if (currentUser) {
          currentUser.isGuest = false;
          if (currentUser.preferences && FableFlow.Accessibility) {
            FableFlow.Accessibility.setFontFamily(currentUser.preferences.fontFamily);
            FableFlow.Accessibility.setFontSize(currentUser.preferences.fontSize);
            FableFlow.Accessibility.setLineSpacing(currentUser.preferences.lineSpacing);
            FableFlow.Accessibility.setWordSpacing(currentUser.preferences.wordSpacing);
          }
        }
      } else {
        currentUser = null;
      }
    } catch (e) {
      console.warn('Session restore failed', e);
      currentUser = null;
    }
  }

  function getUsers() {
    try {
      return JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    } catch (e) {
      return [];
    }
  }

  function login(usernameOrEmail, password) {
    const users = getUsers();
    const q = usernameOrEmail.trim().toLowerCase();
    const user = users.find(u => u.username.toLowerCase() === q || u.email.toLowerCase() === q);

    if (!user || user.password !== password) {
      throw new Error('Invalid email, username, or password. Please try again.');
    }

    user.isGuest = false;
    currentUser = user;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    localStorage.setItem(SESSION_TYPE_KEY, 'user');

    if (user.preferences && FableFlow.Accessibility) {
      FableFlow.Accessibility.setFontFamily(user.preferences.fontFamily);
      FableFlow.Accessibility.setFontSize(user.preferences.fontSize);
      FableFlow.Accessibility.setLineSpacing(user.preferences.lineSpacing);
      FableFlow.Accessibility.setWordSpacing(user.preferences.wordSpacing);
    }

    updateUI();
    closeModal();
    return user;
  }

  function register(username, email, password, confirmPassword, preferences) {
    if (!username.trim() || !email.trim() || !password) {
      throw new Error('All fields are required.');
    }
    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters.');
    }
    if (password !== confirmPassword) {
      throw new Error('Passwords do not match.');
    }

    const users = getUsers();
    if (users.some(u => u.username.toLowerCase() === username.trim().toLowerCase())) {
      throw new Error('Username already exists.');
    }

    const newUser = {
      id: `usr_${Date.now()}`,
      username: username.trim(),
      email: email.trim().toLowerCase(),
      password,
      bio: 'Storywriter & passionate reader on FableFlow.',
      avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${username}`,
      followersCount: 0,
      followingCount: 0,
      totalReads: 0,
      favouriteGenres: ['Fantasy', 'Romance'],
      preferences: preferences || (FableFlow.Accessibility ? FableFlow.Accessibility.getPreferences() : null),
      createdAt: new Date().toISOString(),
      isGuest: false
    };

    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));

    currentUser = newUser;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
    localStorage.setItem(SESSION_TYPE_KEY, 'user');

    updateUI();
    closeModal();
    return newUser;
  }

  function continueAsGuest() {
    currentUser = {
      id: 'usr_guest',
      username: 'Guest',
      email: 'guest@fableflow.com',
      bio: 'Browsing FableFlow in Guest Mode',
      avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Guest',
      isGuest: true
    };
    localStorage.setItem(SESSION_TYPE_KEY, 'guest');
    localStorage.removeItem(STORAGE_KEY);

    updateUI();
    closeModal();

    if (window.FableFlow.Navigation) {
      window.FableFlow.Navigation.navigateTo('home');
    }
    return currentUser;
  }

  function logout() {
    currentUser = null;
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(SESSION_TYPE_KEY);
    updateUI();
    if (window.FableFlow.Navigation) {
      window.FableFlow.Navigation.navigateTo('home');
    }
    openModal('login');
  }

  function updateUI() {
    const authActions = document.getElementById('nav-auth-actions');
    const userBadge = document.getElementById('nav-user-badge');
    const userNameSpan = document.getElementById('nav-username');
    const userAvatarImg = document.getElementById('nav-user-avatar');

    if (currentUser) {
      if (currentUser.isGuest) {
        // Guest mode: show "Guest" badge with guest avatar, AND keep "Sign In / Sign Up" buttons visible
        if (authActions) authActions.style.display = 'flex';
        if (userBadge) {
          userBadge.style.display = 'flex';
          userBadge.title = 'Browsing as Guest (Click to view Settings)';
          if (userNameSpan) userNameSpan.textContent = 'Guest';
          if (userAvatarImg) userAvatarImg.src = currentUser.avatar || 'https://api.dicebear.com/7.x/bottts/svg?seed=Guest';
        }
      } else {
        // Registered mode
        if (authActions) authActions.style.display = 'none';
        if (userBadge) {
          userBadge.style.display = 'flex';
          userBadge.title = `Signed in as ${currentUser.username} (Go to Dashboard)`;
          if (userNameSpan) userNameSpan.textContent = currentUser.username;
          if (userAvatarImg) userAvatarImg.src = currentUser.avatar || `https://api.dicebear.com/7.x/bottts/svg?seed=${currentUser.username}`;
        }
      }
    } else {
      // Logged out
      if (authActions) authActions.style.display = 'flex';
      if (userBadge) userBadge.style.display = 'none';
    }
  }

  function openModal(mode = 'login') {
    const modal = document.getElementById('auth-modal');
    if (!modal) return;
    modal.classList.add('open');

    // Keep all fields completely empty when the login or signup page opens
    const loginEmail = document.getElementById('login-email');
    const loginPass = document.getElementById('login-password');
    if (loginEmail) loginEmail.value = '';
    if (loginPass) loginPass.value = '';

    const regUser = document.getElementById('reg-username');
    const regEmail = document.getElementById('reg-email');
    const regPass = document.getElementById('reg-password');
    const regConfirm = document.getElementById('reg-confirm-password');
    if (regUser) regUser.value = '';
    if (regEmail) regEmail.value = '';
    if (regPass) regPass.value = '';
    if (regConfirm) regConfirm.value = '';

    const loginTab = document.getElementById('auth-tab-login');
    const registerTab = document.getElementById('auth-tab-register');
    const loginForm = document.getElementById('auth-login-form');
    const registerForm = document.getElementById('auth-register-form');
    const errBox = document.getElementById('auth-error-msg');
    if (errBox) errBox.style.display = 'none';

    if (mode === 'register') {
      if (loginTab) loginTab.classList.remove('active');
      if (registerTab) registerTab.classList.add('active');
      if (loginForm) loginForm.style.display = 'none';
      if (registerForm) registerForm.style.display = 'block';
    } else {
      if (loginTab) loginTab.classList.add('active');
      if (registerTab) registerTab.classList.remove('active');
      if (loginForm) loginForm.style.display = 'block';
      if (registerForm) registerForm.style.display = 'none';
    }
  }

  function closeModal() {
    const modal = document.getElementById('auth-modal');
    if (modal) modal.classList.remove('open');
  }

  function showGuestPrompt(actionName) {
    const modal = document.getElementById('guest-prompt-modal');
    const msg = document.getElementById('guest-prompt-message');
    if (msg && actionName) {
      msg.textContent = `You are currently browsing as a guest. To ${actionName}, please sign in or create a free account.`;
    }
    if (modal) modal.classList.add('open');
  }

  function closeGuestPrompt() {
    const modal = document.getElementById('guest-prompt-modal');
    if (modal) modal.classList.remove('open');
  }

  function requireAuth(actionName, callback) {
    if (currentUser && !currentUser.isGuest) {
      if (typeof callback === 'function') callback();
      return true;
    }
    showGuestPrompt(actionName);
    return false;
  }

  function bindEvents() {
    // Open modal buttons
    const signinBtn = document.getElementById('nav-signin-btn');
    const signupBtn = document.getElementById('nav-signup-btn');
    if (signinBtn) signinBtn.addEventListener('click', () => openModal('login'));
    if (signupBtn) signupBtn.addEventListener('click', () => openModal('register'));

    // Modal close button
    const closeBtn = document.getElementById('auth-modal-close');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    // Tab buttons
    const loginTab = document.getElementById('auth-tab-login');
    const registerTab = document.getElementById('auth-tab-register');
    if (loginTab) loginTab.addEventListener('click', () => openModal('login'));
    if (registerTab) registerTab.addEventListener('click', () => openModal('register'));

    // Continue as Guest buttons (on both forms)
    const guestLoginBtn = document.getElementById('auth-guest-btn-login');
    const guestRegBtn = document.getElementById('auth-guest-btn-register');
    if (guestLoginBtn) guestLoginBtn.addEventListener('click', continueAsGuest);
    if (guestRegBtn) guestRegBtn.addEventListener('click', continueAsGuest);

    // Guest prompt modal buttons
    const promptSigninBtn = document.getElementById('guest-prompt-signin-btn');
    const promptCancelBtn = document.getElementById('guest-prompt-cancel-btn');
    if (promptSigninBtn) {
      promptSigninBtn.addEventListener('click', () => {
        closeGuestPrompt();
        openModal('login');
      });
    }
    if (promptCancelBtn) {
      promptCancelBtn.addEventListener('click', closeGuestPrompt);
    }

    // Login Form Submit
    const loginForm = document.getElementById('auth-login-form');
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const pass = document.getElementById('login-password').value;
        const errBox = document.getElementById('auth-error-msg');
        try {
          login(email, pass);
        } catch (err) {
          if (errBox) {
            errBox.textContent = err.message;
            errBox.style.display = 'block';
          }
        }
      });
    }


    // Register Form Submit
    const registerForm = document.getElementById('auth-register-form');
    if (registerForm) {
      registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('reg-username').value;
        const email = document.getElementById('reg-email').value;
        const pass = document.getElementById('reg-password').value;
        const confirmPass = document.getElementById('reg-confirm-password').value;
        const errBox = document.getElementById('auth-error-msg');

        const currentPrefs = FableFlow.Accessibility ? FableFlow.Accessibility.getPreferences() : null;

        try {
          register(username, email, pass, confirmPass, currentPrefs);
        } catch (err) {
          if (errBox) {
            errBox.textContent = err.message;
            errBox.style.display = 'block';
          }
        }
      });
    }

    // Live Onboarding Typography sliders inside Register tab
    const fontSelect = document.getElementById('reg-pref-font');
    if (fontSelect && FableFlow.Accessibility) {
      fontSelect.addEventListener('change', (e) => {
        FableFlow.Accessibility.setFontFamily(e.target.value);
      });
    }
    const sizeRange = document.getElementById('reg-pref-size');
    if (sizeRange && FableFlow.Accessibility) {
      sizeRange.addEventListener('input', (e) => {
        FableFlow.Accessibility.setFontSize(e.target.value);
        const disp = document.getElementById('reg-pref-size-val');
        if (disp) disp.textContent = `${e.target.value}px`;
      });
    }
    const lineRange = document.getElementById('reg-pref-line');
    if (lineRange && FableFlow.Accessibility) {
      lineRange.addEventListener('input', (e) => {
        FableFlow.Accessibility.setLineSpacing(e.target.value);
        const disp = document.getElementById('reg-pref-line-val');
        if (disp) disp.textContent = `${e.target.value}x`;
      });
    }
    const wordRange = document.getElementById('reg-pref-word');
    if (wordRange && FableFlow.Accessibility) {
      wordRange.addEventListener('input', (e) => {
        FableFlow.Accessibility.setWordSpacing(e.target.value);
        const disp = document.getElementById('reg-pref-word-val');
        if (disp) disp.textContent = `${e.target.value}px`;
      });
    }
  }

  return {
    init,
    getCurrentUser: () => currentUser,
    isAuthenticated: () => !!(currentUser && !currentUser.isGuest),
    isGuest: () => !!(currentUser && currentUser.isGuest),
    isRegisteredUser: () => !!(currentUser && !currentUser.isGuest),
    continueAsGuest,
    showGuestPrompt,
    closeGuestPrompt,
    requireAuth,
    login,
    register,
    logout,
    openModal,
    closeModal,
    updateUI
  };
})();
