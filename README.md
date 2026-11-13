# 🪶 FableFlow

> **TAGLINE:** *Where stories flow and creativity grows.*  
> **PROJECT THEME:** *"AI as a Co-Pilot for Creative Artists"*

FableFlow is a complete, fully functional, responsive web application inspired by Wattpad, designed specifically for storywriters and readers. It pairs immersive story discovery, accessible reading typography, and authoring tools with an AI-powered creative writing co-pilot, interactive community lounges, and a focused literary learning hub.

Built strictly using **HTML5, CSS3, and Vanilla JavaScript** — requiring **zero build tools, zero external frameworks, and zero runtime dependencies**.

---

## 📑 Table of Contents
1. [Project Overview & Purpose](#-project-overview--purpose)
2. [Technology Stack](#-technology-stack)
3. [Key Features](#-key-features)
   - [For Readers](#for-readers)
   - [For Writers](#for-writers)
   - [Global Navbar Live Search](#global-navbar-live-search)
   - [Text-to-Speech (TTS) Narration](#text-to-speech-tts-narration)
   - [AI Assistant Co-Pilot & Floating Orb](#ai-assistant-co-pilot--floating-orb)
   - [Learning Hub & Focus Zone](#learning-hub--focus-zone)
4. [Guest Mode vs. Registered Users](#-guest-mode-vs-registered-users)
5. [Accessibility & Typography Customization](#-accessibility--typography-customization)
6. [Colour Themes & Literary Aesthetics](#-colour-themes--literary-aesthetics)
7. [Project File Structure](#-project-file-structure)
8. [How to Run Locally](#-how-to-run-locally)
9. [Configuration & Current Limitations](#-configuration--current-limitations)
10. [Developer & Contribution Guide](#-developer--contribution-guide)

---

## 🌟 Project Overview & Purpose

Creative artists and passionate readers often face fragmented experiences: platforms either overwhelm users with noisy interfaces and rigid typography, or lack supportive brainstorming tools when writer's block strikes. 

**FableFlow** bridges this gap by offering:
- **Wattpad-Inspired Discovery:** Book cards, chapter readers, trending charts, author profiles, and community lounges.
- **AI as a Creative Co-Pilot:** A supportive conversational storytelling mentor assisting authors with scene hooks, sensory details, plot twists, and constructive critique.
- **Radical Accessibility:** Inclusive reading controls (OpenDyslexic font support, font scaling, word spacing, line height) that adapt smoothly without breaking website layouts.
- **Focus & Learning:** An integrated Pomodoro sprint timer, literary Word of the Day vocabulary cards, and a personal dictionary.

---

## 🛠️ Technology Stack

FableFlow is built adhering strictly to lightweight, clean, native web standards:
- **HTML5:** Semantic markup, accessible ARIA roles, clean modal structures, and high-performance layout trees.
- **CSS3:** Custom properties (CSS variables) for dynamic runtime theming, CSS Grid, Flexbox, media queries, and smooth hardware-accelerated animations.
- **Vanilla JavaScript (ES6+):** Pure object-oriented module architecture (`window.FableFlow.*`), zero external runtime libraries, zero build pipelines.
- **Browser APIs Utilized:**
  - `localStorage` for cross-session state persistence.
  - `Web Speech API` (`window.speechSynthesis`, `SpeechSynthesisUtterance`) for chapter audio narration and word pronunciation.
  - `Web Audio API` (`AudioContext`, `OscillatorNode`, `GainNode`) for Pomodoro completion chimes.
  - `History API` and `hashchange` routing for client-side single-page navigation.

---

## 🚀 Key Features

### For Readers
- **Browse & Discovery:** Filter by 10+ genres (Fantasy, Romance, Science Fiction, Horror, Mystery, Thriller, Poetry, Adventure, Drama, Fanfiction).
- **Dimension-Stabilized Continue Reading Bar:** Displays the last-read chapter and progress in a fixed 80px container that remains invariant under typography enlargement.
- **Immersive Reader Mode:** Clean reading surface with adjustable font families, font sizes, line heights, and dark/light modes.
- **Engagement Tools:** Save bookmarks, like stories, leave comments, and follow favorite authors.
- **Author Profiles:** Dedicated author pages showcasing author bios, follower stats, total reads, and all published stories.

### For Writers
- **Writing Studio (`#post`):** Compose stories, write multi-chapter works, select genres, specify custom tags, and publish or save drafts.
- **Author Dashboard (`#dashboard`):** Real-time analytics tracking total story reads, community likes, and chapter draft management.
- **AI Co-Pilot Drawer Integration:** Quick brainstorming chips to immediately generate sensory descriptions, plot twists, and dialogue polish while authoring.

### Global Navbar Live Search
- **Instant Live Search:** Located directly in the top navigation bar with a search icon and clear placeholder.
- **Multi-Entity Indexing:** Queries story titles, descriptions, genres, author names, and custom tags simultaneously from dynamic data.
- **Interactive Dropdown:** Groups matching stories (with cover art and read/like stats), authors (with avatars and published counts), and genres.
- **Keyboard Navigation:** Full support for `ArrowDown`, `ArrowUp`, `Enter` (to select or open), and `Escape` (to dismiss).
- **Empty State Guidance:** Informative empty-results notice with suggested keywords when no matches are found.
- **Universal Availability:** Completely functional for both registered users and guest visitors.

### Text-to-Speech (TTS) Narration
- **Native Browser Playback:** Powered by the browser's native `window.speechSynthesis`.
- **Playback Controls:** Play, Pause, Resume, and Stop controls available on every chapter.
- **Variable Speed Selector:** Supports 0.75x, 1.0x (normal), 1.25x, 1.5x, 1.75x, and 2.0x speeds.
- **Intelligent Clause Chunking:** Splits long text into ~200-character sentence clauses to eliminate browser speech buffer timeouts.
- **Auto-Stop on Navigation:** Safely stops playback when navigating away from the reader to avoid background audio leaks.

### AI Assistant Co-Pilot & Floating Orb
- **Fixed Floating Orb:** Polished trigger in the bottom-right corner featuring a radial gradient, literary feather icon, hover tooltip, and a subtle pulsing glow animation (`@keyframes aiOrbSubtleGlow`).
- **Conversational Drawer:** Slides out smoothly on click without displacing page content.
- **Co-Pilot Guidance:** Pre-configured with prompt chips for:
  - *Plot Twists:* Unexpected narrative twists and emotional compass shifts.
  - *Unstick Scene:* Sensory interruptions to overcome writer's block.
  - *Dialogue Polish:* Heightening subtext and distinct character voices.
  - *Constructive Feedback:* Three-step positive and actionable feedback framework.
- **Mobile Responsive:** Automatically shifts out of the way or hides when the drawer is opened on small mobile screens to prevent interface overlap.

### Learning Hub & Focus Zone
- **Focus Zone (Pomodoro Timer):**
  - Preset sprint buttons (15m, 25m, 45m, 60m).
  - Activity tagging (Writing, Editing, Outlining, Reading).
  - Subtle Web Audio chime and sprint completion log saved to `localStorage`.
- **Vocabulary Corner:**
  - Daily Word of the Day with phonetic notation, part of speech, definition, and literary example.
  - Native Web Speech audio pronunciation button (🔊).
  - Synonym and antonym tag chips.
  - Live vocabulary search matching meanings and terms.
  - Daily Vocabulary Challenge quiz with score tracking and instant feedback.
- **My Dictionary:**
  - Personal author word bank to save new vocabulary, definitions, and personal usage sentences.
  - Sort by recent additions or alphabetically.
  - Delete entries with confirmation.

---

## 👥 Guest Mode vs. Registered Users

FableFlow believes in seamless exploration. Visitors can immediately start reading and using tools without barriers:

| Feature / Capability | Guest Exploration Mode | Registered User Account |
| :--- | :---: | :---: |
| Browse story catalogs & trending charts | ✅ Yes | ✅ Yes |
| Use Global Navbar Live Search | ✅ Yes | ✅ Yes |
| Read complete chapters | ✅ Yes | ✅ Yes |
| Use Text-to-Speech (TTS) Audio Narration | ✅ Yes | ✅ Yes |
| Customize typography (fonts, sizes, spacing) | ✅ Yes | ✅ Yes |
| Switch Light / Dark themes | ✅ Yes | ✅ Yes |
| Use Focus Zone Pomodoro Timer | ✅ Yes | ✅ Yes |
| Practice with Vocabulary Corner & Quiz | ✅ Yes | ✅ Yes |
| Consult Floating AI Co-Pilot Assistant | ✅ Yes | ✅ Yes |
| View Author Profiles | ✅ Yes | ✅ Yes |
| Create and publish new stories in Studio | 🔒 Prompt to Sign In | ✅ Yes |
| Access Author Analytics Dashboard | 🔒 Prompt to Sign In | ✅ Yes |
| Post comments, follow authors & like stories | 🔒 Prompt to Sign In | ✅ Yes |

> **Guest Action Prompts:** If a guest attempts a registered-only action, a friendly modal (`#guest-prompt-modal`) appears with an option to Sign In, Create an Account, or Continue as Guest without throwing errors or breaking navigation.

---

## 👓 Accessibility & Typography Customization

FableFlow was designed from the ground up to support neurodiverse readers and individuals with visual fatigue:

- **Font Family Support:**
  - `Lexend` (Default, designed specifically to reduce visual stress and improve reading speed)
  - `Georgia` (Classic serif for traditional literary book feel)
  - `Arial` (Clean, neutral sans-serif)
  - `Verdana` (Spacious sans-serif with distinct letterforms)
  - `OpenDyslexic` (Weighted bottom letterforms preventing letter flipping and confusion)
- **Live Adjustable Controls:**
  - **Font Size:** 14px to 24px (real-time scaling).
  - **Line Spacing:** 1.2x to 2.2x.
  - **Word Spacing:** 0px to 10px.
- **Protected Navbar Text Alignment:**
  - The top navigation bar labels ("📖 Home", "📊 Dashboard", "✍️ Post", "☕ Community", "🎓 Learning Hub") utilize `white-space: nowrap !important` and protected structural metrics.
  - Changing font sizes, word spacing, or letter spacing in Accessibility Settings adapts the body text, cards, and reader **without causing navbar labels to wrap, break onto multiple lines, or horizontally overflow the screen**.
  - On screens narrower than 920px, the desktop tabs seamlessly collapse into the mobile hamburger menu drawer with large, accessible touch targets.

---

## 🎨 Colour Themes & Literary Aesthetics

FableFlow uses an intentional, comfortable digital library palette designed for marathon reading sessions:

### Light Theme (Warm Parchment & Forest Green)
- **Background:** `#F7F4EC` (warm parchment)
- **Cards and surfaces:** `#FFFEFA` (soft ivory)
- **Secondary surfaces:** `#EDE9DF`
- **Primary:** `#2F6B52` (deep forest green)
- **Secondary:** `#354A70` (muted navy blue)
- **Accent:** `#C9684B` (terracotta)
- **Main text:** `#252C28` (deep charcoal)
- **Muted text:** `#69736D`
- **Borders:** `#DDD8CD`
- **Contrast Ratio:** Exceeds **14.1:1** on cards (well above WCAG AAA standards).

### Dark Theme (Nocturne Moss & Sage Green)
- **Background:** `#151D1A` (deep forest dark)
- **Cards and surfaces:** `#202B26` (slate moss)
- **Secondary surfaces:** `#293831`
- **Primary:** `#8CC7A2` (soft sage green)
- **Secondary:** `#9DADD7` (soft periwinkle)
- **Accent:** `#E18A6E` (muted coral)
- **Main text:** `#F2F0E8` (crisp parchment light)
- **Muted text:** `#B5BDB7`
- **Borders:** `#3B4941`
- **Contrast Ratio:** Exceeds **12.8:1** on cards (well above WCAG AAA standards).

Theme selection persists in `localStorage` and toggles instantly via the navbar 🌙/☀️ icon.

---

## 📁 Project File Structure

```
FableFlow/
├── index.html              # Main application single-page markup & modal definitions
├── css/
│   ├── style.css           # Design tokens, themes, typography, layout, search & component styling
│   └── responsive.css      # Responsive media queries (Desktop, Tablet, Mobile)
├── js/
│   ├── app.js              # Application bootstrapper initializing all modules
│   ├── navigation.js       # Client-side routing, protected routes & Navbar Live Search
│   ├── auth.js             # User accounts, guest sessions, login/signup & accessibility onboarding
│   ├── accessibility.js    # Global accessibility manager (fonts, sizing, spacing, themes)
│   ├── stories.js          # Story catalog, Wattpad discovery, reader, comments & Web Speech TTS
│   ├── editor.js           # Post writing studio, chapter authoring & AI suggestion panel
│   ├── community.js        # Writing lounges, live guild chat, writing challenges & topics
│   ├── learning.js         # Focus Zone Pomodoro, Vocabulary Corner, Quiz & My Dictionary
│   ├── settings.js         # User preferences coordinator & safe logout modal flow
│   └── ai-assistant.js     # Floating AI orb companion & conversational assistance drawer
├── assets/
│   └── icons/
│       ├── Magical Fountain Pen and Open Book.webp  # Official FableFlow emblem logo
│       └── logo.svg                                # Vector brand asset
└── README.md               # Complete project documentation
```

---

## 💻 How to Run Locally

Because FableFlow is a pure client-side static web application, it requires **no Node.js build process, no npm install, and no local server setup**.

### Method 1: Direct File Launch (Easiest)
1. Open your file manager and navigate to the project directory: `D:\FableFlow`.
2. Double-click **`index.html`** or right-click `index.html` → **Open with** → **Google Chrome**, **Microsoft Edge**, **Firefox**, or **Safari**.
3. The platform opens immediately with all demo stories, fonts, and tools ready.

### Method 2: VS Code Live Server
1. Launch **Visual Studio Code** and open the `FableFlow` root folder (`File` → `Open Folder...`).
2. If not already installed, install the **Live Server** extension by *Ritwick Dey*.
3. Right-click on **`index.html`** in the Explorer pane and choose **"Open with Live Server"**.
4. The application will serve automatically at `http://127.0.0.1:5500/index.html` with hot-reloading on file edits.

---

## ⚙️ Configuration & Current Limitations

FableFlow is currently designed as a standalone, zero-dependency client-side architecture. Below are its current operating parameters and production migration paths:

1. **AI Assistant Co-Pilot:**
   - *Current Behavior:* Operates in Demonstration Mode with built-in contextual storytelling prompts and heuristics.
   - *Production Path:* Easily connect `sendMessage()` in `js/ai-assistant.js` to a live API endpoint (e.g. Gemini 1.5 Pro / Flash via Google GenAI SDK or serverless backend).
2. **Data Persistence:**
   - *Current Behavior:* Stores user sessions, published stories, bookmarks, focus sprints, and dictionary entries in the browser's `localStorage`. Clearing browser data resets to initial sample catalogs.
   - *Production Path:* Connect `FableFlow.Stories` and `FableFlow.Auth` to a cloud database (such as Google Cloud Firestore, Supabase, or PostgreSQL).
3. **Text-to-Speech Voices:**
   - *Current Behavior:* Employs the client's native operating system voices via the browser's `window.speechSynthesis`. Voice quality and accents depend on the user's browser/OS.
   - *Production Path:* Integrate cloud neural TTS (e.g. Google Cloud Text-to-Speech API) for studio-grade human narration.

---

## 🤝 Developer & Contribution Guide

To maintain the project's simplicity, speed, and architectural integrity, please adhere to these guidelines:

1. **Strict Vanilla Standards:** Do not introduce heavy frontend frameworks (React, Vue, Angular), CSS utility frameworks (Tailwind, Bootstrap), or bundlers (Webpack, Vite) unless requested. The app must remain directly runnable by double-clicking `index.html`.
2. **Module Namespacing:** All modules are attached to the global `window.FableFlow` namespace. Keep module state enclosed in IIFEs:
   ```javascript
   window.FableFlow = window.FableFlow || {};
   FableFlow.MyFeature = (function() {
     // Private state
     function init() { ... }
     return { init };
   })();
   ```
3. **Accessibility First:** Whenever creating new UI components, verify:
   - Elements maintain high contrast (>4.5:1 for body text, >3:1 for large text).
   - Interactive elements have explicit `aria-label` or visible text.
   - New inputs include visible placeholders and associated labels.
   - Navbar and header elements enforce `white-space: nowrap` to prevent layout reflows when accessibility font size is scaled.
4. **Theme Testing:** Always test new components in both Light (`#F7F4EC`) and Dark (`#151D1A`) modes to verify legibility.

---

*FableFlow — Where stories flow and creativity grows.*
