/**
 * FableFlow Application Entrypoint (Vanilla JS)
 * Initializes accessibility, authentication, navigation, story catalogs, editor, community, learning hub, and AI assistant.
 */

window.FableFlow = window.FableFlow || {};

FableFlow.App = (function() {
  function init() {
    console.log('✨ Initializing FableFlow Vanilla Web App...');

    // 1. Accessibility & Theme first (sets up typography & CSS variables)
    if (FableFlow.Accessibility) FableFlow.Accessibility.init();

    // 2. Authentication (restores session & demo accounts)
    if (FableFlow.Auth) FableFlow.Auth.init();

    // 3. Stories Catalog & Reading Experience
    if (FableFlow.Stories) FableFlow.Stories.init();

    // 4. Writing Studio Editor
    if (FableFlow.Editor) FableFlow.Editor.init();

    // 5. Community Lounges & Chat
    if (FableFlow.Community) FableFlow.Community.init();

    // 6. Learning Hub (Focus, Vocab, Dictionary)
    if (FableFlow.Learning) FableFlow.Learning.init();

    // 7. Settings
    if (FableFlow.Settings) FableFlow.Settings.init();

    // 8. Floating AI Co-Pilot Assistant
    if (FableFlow.AIAssistant) FableFlow.AIAssistant.init();

    // 9. Client-side Navigation Router
    if (FableFlow.Navigation) FableFlow.Navigation.init();

    console.log('🚀 FableFlow Ready. Where stories flow and creativity grows.');
  }

  return { init };
})();

// Bootstrap on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  FableFlow.App.init();
});
