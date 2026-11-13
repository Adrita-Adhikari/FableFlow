/**
 * FableFlow Navigation & Router
 * Manages view switching, URL hash routing, and navbar tab highlighting.
 */

window.FableFlow = window.FableFlow || {};

FableFlow.Navigation = (function() {
  const views = [
    'home',
    'dashboard',
    'post',
    'community',
    'learning',
    'settings',
    'story-detail',
    'story-reader',
    'author-profile'
  ];

  const protectedViews = ['dashboard', 'post'];

  let currentView = 'home';

  function init() {
    bindNavLinks();
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
  }

  function navigateTo(viewName, params = {}) {
    if (!views.includes(viewName)) {
      viewName = 'home';
    }

    // Stop active TTS audio narration when navigating away from reader
    if (viewName !== 'story-reader' && window.FableFlow.Stories && window.FableFlow.Stories.TTS) {
      window.FableFlow.Stories.TTS.stop();
    }

    // Guard registered-only pages (dashboard and post studio)
    if (protectedViews.includes(viewName)) {
      const isRegistered = window.FableFlow.Auth ? window.FableFlow.Auth.isRegisteredUser() : false;
      if (!isRegistered) {
        if (window.FableFlow.Auth && window.FableFlow.Auth.isGuest()) {
          window.FableFlow.Auth.showGuestPrompt(`access the ${viewName === 'post' ? 'Writing Studio' : 'Author Dashboard'}`);
          return;
        } else if (window.FableFlow.Auth) {
          window.FableFlow.Auth.openModal('login');
          return;
        }
      }
    }

    currentView = viewName;

    // Hide all view sections
    document.querySelectorAll('.view-section').forEach(section => {
      section.classList.remove('active');
    });

    // Show target section
    const targetSection = document.getElementById(`view-${viewName}`);
    if (targetSection) {
      targetSection.classList.add('active');
    }

    // Update active state on navbar tabs
    document.querySelectorAll('.nav-tab-item').forEach(tab => {
      const tabTarget = tab.getAttribute('data-target');
      if (tabTarget === viewName) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    // Close mobile drawer if open
    const drawer = document.getElementById('mobile-nav-drawer');
    if (drawer) drawer.classList.remove('open');

    // Scroll to top
    if (typeof window.scrollTo === 'function') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Hook view-specific initializations
    if (viewName === 'home' && window.FableFlow.Stories) {
      window.FableFlow.Stories.renderHome();
    } else if (viewName === 'dashboard' && window.FableFlow.Stories) {
      window.FableFlow.Stories.renderDashboard();
    } else if (viewName === 'post' && window.FableFlow.Editor) {
      window.FableFlow.Editor.render(params.storyId);
    } else if (viewName === 'community' && window.FableFlow.Community) {
      window.FableFlow.Community.render();
    } else if (viewName === 'learning' && window.FableFlow.Learning) {
      window.FableFlow.Learning.render();
    } else if (viewName === 'story-detail' && window.FableFlow.Stories) {
      window.FableFlow.Stories.renderStoryDetail(params.id);
    } else if (viewName === 'story-reader' && window.FableFlow.Stories) {
      window.FableFlow.Stories.renderStoryReader(params.id, params.ch);
    } else if (viewName === 'author-profile' && window.FableFlow.Stories) {
      window.FableFlow.Stories.renderAuthorProfile(params.id);
    } else if (viewName === 'settings' && window.FableFlow.Settings) {
      window.FableFlow.Settings.render();
    }

    // Update URL hash
    let hash = `#${viewName}`;
    const query = new URLSearchParams(params).toString();
    if (query) hash += `?${query}`;
    if (window.location && window.location.hash !== hash) {
      if (typeof history !== 'undefined' && history.pushState) {
        history.pushState(null, '', hash);
      }
    }
  }

  function handleHashChange() {
    const rawHash = window.location.hash.slice(1) || 'home';
    const [path, queryString] = rawHash.split('?');
    const params = {};
    if (queryString) {
      const sp = new URLSearchParams(queryString);
      for (const [key, value] of sp.entries()) {
        params[key] = value;
      }
    }
    navigateTo(path || 'home', params);
  }

  function bindNavLinks() {
    // Top nav desktop tabs
    document.querySelectorAll('[data-nav-target]').forEach(elem => {
      elem.addEventListener('click', (e) => {
        e.preventDefault();
        const target = elem.getAttribute('data-nav-target');
        navigateTo(target);
      });
    });

    // Mobile menu toggle
    const mobileBtn = document.getElementById('mobile-menu-toggle-btn');
    const drawer = document.getElementById('mobile-nav-drawer');
    if (mobileBtn && drawer) {
      mobileBtn.addEventListener('click', () => {
        drawer.classList.toggle('open');
      });
    }

    // Brand logo click
    const brand = document.getElementById('nav-brand-link');
    if (brand) {
      brand.addEventListener('click', () => navigateTo('home'));
    }

    // User Profile click -> opens dashboard for registered, settings for guest
    const userBadge = document.getElementById('nav-user-badge');
    if (userBadge) {
      userBadge.addEventListener('click', () => {
        if (window.FableFlow.Auth && window.FableFlow.Auth.isGuest()) {
          navigateTo('settings');
        } else {
          navigateTo('dashboard');
        }
      });
    }
  }

  return {
    init,
    navigateTo,
    getCurrentView: () => currentView
  };
})();
