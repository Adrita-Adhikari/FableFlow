/**
 * FableFlow Floating AI Co-Pilot Assistant
 * Conversational side panel for writing, reading comprehension, and constructive community feedback.
 */

window.FableFlow = window.FableFlow || {};

FableFlow.AIAssistant = (function() {
  let isOpen = false;
  let chatHistory = [
    {
      sender: 'ai',
      text: "Welcome to FableFlow AI Co-Pilot! 🪶✨\n\nI am your creative storytelling mentor. I can brainstorm plot twists, unstick stalled scenes, or polish dialogue.\n\n*Notice: Operating in Demonstration Mode without external API keys.*"
    }
  ];

  function init() {
    bindEvents();
    renderChat();
  }

  function toggle() {
    if (isOpen) close();
    else open();
  }

  function open(initialPrompt = '') {
    isOpen = true;
    const drawer = document.getElementById('ai-assistant-drawer');
    if (drawer) drawer.classList.add('open');
    const trigger = document.getElementById('floating-ai-trigger');
    if (trigger) trigger.classList.add('drawer-open');
    if (initialPrompt) {
      sendMessage(initialPrompt);
    }
  }

  function close() {
    isOpen = false;
    const drawer = document.getElementById('ai-assistant-drawer');
    if (drawer) drawer.classList.remove('open');
    const trigger = document.getElementById('floating-ai-trigger');
    if (trigger) trigger.classList.remove('drawer-open');
  }

  function renderChat() {
    const box = document.getElementById('ai-drawer-messages');
    if (!box) return;

    box.innerHTML = chatHistory.map(m => `
      <div style="align-self: ${m.sender === 'user' ? 'flex-end' : 'flex-start'}; max-width: 85%; padding: 10px 14px; border-radius: 12px; font-size: 0.82rem; line-height: 1.45; background: ${m.sender === 'user' ? 'var(--color-primary)' : 'var(--bg-card)'}; border: 1.5px solid ${m.sender === 'user' ? 'var(--color-primary)' : 'var(--border-color)'}; color: ${m.sender === 'user' ? 'var(--text-inverse)' : 'var(--text-main)'}; margin-bottom: 8px;">
        <span style="font-size: 0.68rem; font-weight: 800; opacity: 0.85; display: block; margin-bottom: 3px;">
          ${m.sender === 'user' ? 'You' : 'AI Co-Pilot (Demo Mode)'}
        </span>
        <p style="white-space: pre-wrap; margin: 0;">${m.text}</p>
      </div>
    `).join('');

    box.scrollTop = box.scrollHeight;
  }

  function sendMessage(text) {
    if (!text.trim()) return;

    chatHistory.push({ sender: 'user', text: text.trim() });
    renderChat();

    // Generate Contextual Response (Demo Co-Pilot)
    setTimeout(() => {
      let reply = '';
      const q = text.toLowerCase();

      if (q.includes('plot') || q.includes('twist')) {
        reply = `⚡ **Plot Twist Seed:**\nThe ancient cartographer's compass doesn't map geographical mountains—it maps emotional grief. As the protagonist nears the citadel, the needle points directly at their companion's heart.`;
      } else if (q.includes('stuck') || q.includes('block') || q.includes('scene')) {
        reply = `💡 **Scene Unstuck Idea:**\nBreak the stillness with a sensory interruption: the lantern flame turns cobalt blue, and a character notices that their shadow on the wall is standing three paces behind them.`;
      } else if (q.includes('feedback') || q.includes('critique')) {
        reply = `🤝 **Constructive Feedback Formula:**\n1. Praise a vivid sensory moment (e.g. the description of rain).\n2. Gently ask: "I wonder if lingering on chapter 2's ending would let the emotional resonance breathe?"\n3. Celebrate their unique authorial voice!`;
      } else {
        reply = `📖 In storytelling, balancing **sensory immediacy** with **emotional subtext** creates magic. What specific scene or character are you working on right now?`;
      }

      chatHistory.push({ sender: 'ai', text: reply });
      renderChat();
    }, 600);
  }

  function clear() {
    chatHistory = [
      {
        sender: 'ai',
        text: "Chat cleared! How can I assist your writing or reading journey today?"
      }
    ];
    renderChat();
  }

  function bindEvents() {
    // Floating circular trigger
    const trigger = document.getElementById('floating-ai-trigger');
    if (trigger) trigger.addEventListener('click', toggle);

    // Navbar AI trigger button
    const navBtn = document.getElementById('nav-ai-pill-btn');
    if (navBtn) navBtn.addEventListener('click', toggle);

    // Drawer close button
    const closeBtn = document.getElementById('ai-drawer-close');
    if (closeBtn) closeBtn.addEventListener('click', close);

    // Drawer clear button
    const clearBtn = document.getElementById('ai-drawer-clear');
    if (clearBtn) clearBtn.addEventListener('click', clear);

    // Form submit
    const form = document.getElementById('ai-drawer-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('ai-drawer-input');
        if (input && input.value.trim()) {
          sendMessage(input.value);
          input.value = '';
        }
      });
    }

    // Quick prompt buttons
    document.querySelectorAll('.ai-quick-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const promptText = chip.getAttribute('data-prompt');
        if (promptText) sendMessage(promptText);
      });
    });
  }

  return {
    init,
    open,
    close,
    toggle,
    sendMessage
  };
})();
