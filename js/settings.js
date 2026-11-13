/**
 * FableFlow Platform Settings
 * Account, Accessibility, Appearance, Notifications, and Session Management
 */

window.FableFlow = window.FableFlow || {};

FableFlow.Settings = (function() {
  function init() {
    bindEvents();
  }

  function render() {
    const prefs = FableFlow.Accessibility.getPreferences();

    const fontSelect = document.getElementById('settings-font-select');
    const sizeRange = document.getElementById('settings-font-size');
    const sizeVal = document.getElementById('settings-font-size-val');
    const lineRange = document.getElementById('settings-line-spacing');
    const lineVal = document.getElementById('settings-line-spacing-val');
    const wordRange = document.getElementById('settings-word-spacing');
    const wordVal = document.getElementById('settings-word-spacing-val');

    if (fontSelect) fontSelect.value = prefs.fontFamily;
    if (sizeRange) sizeRange.value = prefs.fontSize;
    if (sizeVal) sizeVal.textContent = `${prefs.fontSize}px`;
    if (lineRange) lineRange.value = prefs.lineSpacing;
    if (lineVal) lineVal.textContent = `${prefs.lineSpacing}x`;
    if (wordRange) wordRange.value = prefs.wordSpacing;
    if (wordVal) wordVal.textContent = `${prefs.wordSpacing}px`;

    // Render user profile details in Account Card
    const user = FableFlow.Auth.getCurrentUser();
    const isGuest = FableFlow.Auth.isGuest();
    const usernameEl = document.getElementById('settings-current-username');
    const emailEl = document.getElementById('settings-current-email');
    const confirmBox = document.getElementById('settings-logout-confirm-box');
    const triggerWrap = document.getElementById('settings-logout-trigger-wrap');

    if (isGuest) {
      if (usernameEl) usernameEl.textContent = 'Guest Reader (Unregistered)';
      if (emailEl) emailEl.textContent = 'Browsing in Guest Mode';
      if (confirmBox) confirmBox.style.display = 'none';
      if (triggerWrap) {
        triggerWrap.style.display = 'block';
        triggerWrap.innerHTML = `
          <button type="button" class="btn-primary" onclick="FableFlow.Auth.openModal('login')" style="padding: 10px 20px;">
            🔑 Sign In / Create Account
          </button>
        `;
      }
    } else {
      if (usernameEl) usernameEl.textContent = user ? user.username : 'Guest Reader';
      if (emailEl) emailEl.textContent = user ? user.email : 'guest@fableflow.com';
      if (confirmBox) confirmBox.style.display = 'none';
      if (triggerWrap) {
        triggerWrap.style.display = 'block';
        triggerWrap.innerHTML = `
          <button type="button" class="btn-accent" id="settings-logout-init-btn" style="padding: 10px 20px;">
            🚪 Log Out
          </button>
        `;
        const initBtn = document.getElementById('settings-logout-init-btn');
        if (initBtn) {
          initBtn.addEventListener('click', () => {
            if (confirmBox) confirmBox.style.display = 'block';
            if (triggerWrap) triggerWrap.style.display = 'none';
          });
        }
      }
    }

    updateSettingsPreview();
  }

  function updateSettingsPreview() {
    const box = document.getElementById('settings-live-preview-box');
    const prefs = FableFlow.Accessibility.getPreferences();
    if (box) {
      box.style.fontSize = `${prefs.fontSize}px`;
      box.style.lineHeight = prefs.lineSpacing;
      box.style.wordSpacing = `${prefs.wordSpacing}px`;
    }
  }

  function bindEvents() {
    const fontSelect = document.getElementById('settings-font-select');
    if (fontSelect) {
      fontSelect.addEventListener('change', (e) => {
        FableFlow.Accessibility.setFontFamily(e.target.value);
        updateSettingsPreview();
      });
    }

    const sizeRange = document.getElementById('settings-font-size');
    if (sizeRange) {
      sizeRange.addEventListener('input', (e) => {
        FableFlow.Accessibility.setFontSize(e.target.value);
        const v = document.getElementById('settings-font-size-val');
        if (v) v.textContent = `${e.target.value}px`;
        updateSettingsPreview();
      });
    }

    const lineRange = document.getElementById('settings-line-spacing');
    if (lineRange) {
      lineRange.addEventListener('input', (e) => {
        FableFlow.Accessibility.setLineSpacing(e.target.value);
        const v = document.getElementById('settings-line-spacing-val');
        if (v) v.textContent = `${e.target.value}x`;
        updateSettingsPreview();
      });
    }

    const wordRange = document.getElementById('settings-word-spacing');
    if (wordRange) {
      wordRange.addEventListener('input', (e) => {
        FableFlow.Accessibility.setWordSpacing(e.target.value);
        const v = document.getElementById('settings-word-spacing-val');
        if (v) v.textContent = `${e.target.value}px`;
        updateSettingsPreview();
      });
    }

    // Theme toggle buttons in Settings
    const lightThemeBtn = document.getElementById('settings-theme-light-btn');
    const darkThemeBtn = document.getElementById('settings-theme-dark-btn');
    if (lightThemeBtn) {
      lightThemeBtn.addEventListener('click', () => {
        FableFlow.Accessibility.applyTheme('light');
      });
    }
    if (darkThemeBtn) {
      darkThemeBtn.addEventListener('click', () => {
        FableFlow.Accessibility.applyTheme('dark');
      });
    }

    // Logout confirmation triggers
    const initLogoutBtn = document.getElementById('settings-logout-init-btn');
    const confirmBox = document.getElementById('settings-logout-confirm-box');
    const triggerWrap = document.getElementById('settings-logout-trigger-wrap');
    const confirmLogoutBtn = document.getElementById('settings-logout-confirm-btn');
    const cancelLogoutBtn = document.getElementById('settings-logout-cancel-btn');

    if (initLogoutBtn) {
      initLogoutBtn.addEventListener('click', () => {
        if (confirmBox) confirmBox.style.display = 'block';
        if (triggerWrap) triggerWrap.style.display = 'none';
      });
    }

    if (cancelLogoutBtn) {
      cancelLogoutBtn.addEventListener('click', () => {
        if (confirmBox) confirmBox.style.display = 'none';
        if (triggerWrap) triggerWrap.style.display = 'block';
      });
    }

    if (confirmLogoutBtn) {
      confirmLogoutBtn.addEventListener('click', () => {
        // Confirmation confirmed: end session, redirect to login page
        FableFlow.Auth.logout();
      });
    }
  }

  return {
    init,
    render
  };
})();
