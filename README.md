# 🪶 FableFlow

> **"FableFlow – Where Stories Flow and Creativity Finds Its Voice."**  
> *Central Philosophy: AI as a Co-Pilot for Creative Artists*

---

## 👥 1. Team Information

**FableFlow** is conceptualized, designed, and developed by team **Innov8**.

| Team Member | Role & Focus Areas | GitHub Profile |
| :--- | :--- | :--- |
| **Debjit Saha** | Frontend Architecture, Story Studio & Community Lounges | [@debjit-saha](https://github.com/debjitsaha) |
| **Adrita Adhikari** | UI/UX Design, Accessibility Systems & Typography Engineering | [@adritaadhikari](https://github.com/Adrita-Adhikari) |
| **Adrisa Bhattacharjee** | Learning Hub, Focus Zone & Vocabulary Interactive Modules | [@adhelixa07](https://github.com/adhelixa07) |
| **Diganta Mukherjee** | Project Lead, Routing, State Management & AI Assistant Integration | [@digantamukherjee-19](https://github.com/digantamukherjee-19) |

* **Team Name:** Innov8  
* **Repository:** [https://github.com/digantamukherjee-19/FableFlow.git](https://github.com/digantamukherjee-19/FableFlow.git)  
* **License:** MIT License  

---

## 📖 2. Project Name and Headline

### **Project Name:** FableFlow

### **Headline:**
> *"FableFlow – Where Stories Flow and Creativity Finds Its Voice."*

### **Executive Overview**
**FableFlow** is an accessible, modern digital storytelling and reading platform inspired by platforms like Wattpad, purposefully engineered to empower both passionate readers and aspiring writers. Traditional writing and reading platforms frequently separate immersion from utility: interfaces are cluttered with noisy ads, typography is rigid, accessibility is treated as an afterthought, and writers are left to navigate the isolating wall of writer's block entirely alone.

FableFlow bridges this gap through a unified creative environment built around our core ethos: **"AI as a Co-Pilot for Creative Artists."** 

Rather than automating or replacing human creativity, FableFlow positions artificial intelligence as an empathetic, attentive creative companion. It helps storytellers brainstorm sensory details, explore branching plot directions, refine character voice, and polish dialogue—while leaving the author firmly in the director's seat. Coupled with customizable neurodivergent-friendly typography, browser-native text-to-speech narration, a focused literary learning hub, and genre-based community lounges, FableFlow transforms storytelling into an accessible, collaborative, and uplifting journey.

```
       ┌────────────────────────────────────────────────────────┐
       │                       FABLEFLOW                        │
       │     "AI as a Co-Pilot for Creative Storytellers"       │
       └──────────────────────────┬─────────────────────────────┘
                                  │
         ┌────────────────────────┼────────────────────────┐
         ▼                        ▼                        ▼
  📖 READERS               ✍️ WRITERS               🎓 LEARNERS
  • Wattpad-style browse   • Multi-chapter studio   • Pomodoro Focus Zone
  • Web Speech TTS audio   • Real-time metrics      • Word of the Day
  • OpenDyslexic & themes  • AI writing prompts     • Custom word bank
  • Dimension-safe reading • Draft management       • Literary quizzes
```

---

## 📑 Table of Contents

- [👥 1. Team Information](#-1-team-information)
- [📖 2. Project Name and Headline](#-2-project-name-and-headline)
- [📊 3. Project Status](#-3-project-status)
- [✨ 4. Available Features (Current Frontend Implementation)](#-4-available-features-current-frontend-implementation)
  - [A. User Interface and Navigation](#a-user-interface-and-navigation)
  - [B. Authentication Interface and Guest Mode](#b-authentication-interface-and-guest-mode)
  - [C. Home and Story Discovery](#c-home-and-story-discovery)
  - [D. Reader Features](#d-reader-features)
  - [E. Writer Features](#e-writer-features)
  - [F. Dashboard](#f-dashboard)
  - [G. Community](#g-community)
  - [H. Learning Hub](#h-learning-hub)
  - [I. Accessibility and Personalization](#i-accessibility-and-personalization)
  - [J. AI Assistant Interface](#j-ai-assistant-interface)
- [🛠️ 5. Technology Stack Used So Far](#️-5-technology-stack-used-so-far)
- [🗺️ 6. Future Features and Development Roadmap](#️-6-future-features-and-development-roadmap)
  - [A. Backend Development](#a-backend-development)
  - [B. Database Integration](#b-database-integration)
  - [C. Real AI Integration](#c-real-ai-integration)
  - [D. Community and Real-Time Communication](#d-community-and-real-time-communication)
  - [E. Advanced Personalization](#e-advanced-personalization)
  - [Development Roadmap Status](#development-roadmap-status)
- [🔮 7. Technology Stack Planned for Future Development](#-7-technology-stack-planned-for-future-development)
- [🤝 8. Contribution and Collaboration](#-8-contribution-and-collaboration)
- [🚀 9. How to Run the Project](#-9-how-to-run-the-project)
- [🌟 10. Closing Section](#-10-closing-section)

---

## 📊 3. Project Status

> **Current Phase:** `Frontend Development Completed` | **Next Phase:** `Backend & Database Architecture Under Development`

```
Phase 1: Frontend Architecture & UI/UX Experience    [████████████████████] 100% (Completed)
Phase 2: Backend REST API & Server-Side Auth        [░░░░░░░░░░░░░░░░░░░░]   0% (Planned / In Progress)
Phase 3: Database Integration & Persistent Models   [░░░░░░░░░░░░░░░░░░░░]   0% (Planned)
Phase 4: Real Cloud AI API Connection (LLM)         [░░░░░░░░░░░░░░░░░░░░]   0% (Planned)
Phase 5: Real-Time Multi-User WebSockets & Deploy   [░░░░░░░░░░░░░░░░░░░░]   0% (Planned)
```

The current repository represents the **complete, standalone frontend foundation** of FableFlow. It is built strictly with semantic HTML5, modern CSS3, and modular Vanilla JavaScript. The user interface, responsive layout system, accessibility controls, browser-side audio, and writing workflows are fully realized and interactively verifiable using client-side browser storage (`localStorage`) and native Web APIs.

| Architectural Layer | Current Implementation Status | Notes |
| :--- | :--- | :--- |
| **User Interface (UI/UX)** | ✅ **Fully Implemented** | Responsive layouts, accessible components, and animations. |
| **Client Routing & SPA** | ✅ **Fully Implemented** | Hash-based router (`#home`, `#dashboard`, `#post`, etc.). |
| **Typography & Accessibility** | ✅ **Fully Implemented** | OpenDyslexic font, Lexend, real-time font scaling, high contrast. |
| **Audio & Speech (TTS)** | ✅ **Fully Implemented** | Browser-native `window.speechSynthesis` and `Web Audio API`. |
| **Client Data Persistence** | ✅ **Implemented via `localStorage`** | Stores sessions, drafts, bookmarks, focus sprints, and word bank. |
| **Authentication System** | ⚠️ **Frontend Simulation Only** | Mock accounts and guest sessions stored in browser storage. |
| **AI Assistant** | ⚠️ **Frontend Demonstration Only** | Rule-based storytelling heuristics; no external LLM API connected. |
| **Community & Guilds** | ⚠️ **Frontend Demonstration Only** | Local post creation and simulated author chat responses. |
| **Backend & Cloud Database** | ⏳ **Planned for Future Development** | Node.js, Express, MongoDB, and JWT authentication. |

---

## ✨ 4. Available Features (Current Frontend Implementation)

Every feature described below has been verified directly in the project codebase (`index.html`, `css/style.css`, and `js/*.js`). Where features rely on mock data or browser storage, this is explicitly indicated.

```
       FABLEFLOW APPLICATION MODULES (Vanilla JS Architecture)
┌──────────────────────────────────────────────────────────────────┐
│  window.FableFlow                                                │
│  ├── Accessibility  ──> Typography, Dyslexia Font, Themes        │
│  ├── Auth           ──> Sessions, Demo Accounts, Guest Guard     │
│  ├── Navigation     ──> Hash Router, Live Search Bar             │
│  ├── Stories        ──> Catalog, Wattpad Reader, Web Speech TTS  │
│  ├── Editor         ──> Multi-chapter Studio, Local Drafts       │
│  ├── Community      ──> Guild Lounges, Discussions, Local Chat   │
│  ├── Learning       ──> Pomodoro Chime, Vocab Quiz, Dictionary   │
│  ├── Settings       ──> Preferences Panel, Account Actions       │
│  └── AIAssistant    ──> Floating Orb, Heuristic Writing Co-Pilot │
└──────────────────────────────────────────────────────────────────┘
```

---

### A. User Interface and Navigation

* **Responsive Top Navigation Bar:**  
  *Definition:* A fixed, high-contrast header providing instantaneous access to all core sections of the platform.  
  *Functionality:* Houses the official brand emblem, primary navigation buttons (`Home`, `Dashboard`, `Post`, `Community`, `Learning Hub`), search bar, theme switcher, and authentication controls. When viewed on viewports below 920px, navigation items gracefully collapse into an accessible slide-out mobile drawer.  
  *Implementation:* Client-side CSS Flexbox and media queries with protected label geometry (`white-space: nowrap !important`) preventing navbar wrapping when users increase accessibility font sizes.

* **Single-Page Application (SPA) Hash Routing:**  
  *Definition:* Seamless client-side view swapping without full-page browser reloads.  
  *Functionality:* Users navigate smoothly between `#home`, `#dashboard`, `#post`, `#community`, `#learning`, `#settings`, `#story-detail`, `#story-reader`, and `#author-profile`. The router automatically protects author views from unauthenticated guest access and stops active audio speech upon route change.  
  *Implementation:* Vanilla JavaScript `hashchange` listener in `js/navigation.js`.

* **Global Navbar Live Search:**  
  *Definition:* An instant, multi-entity search engine embedded directly in the top navigation bar.  
  *Functionality:* Simultaneously indexes and queries story titles, descriptions, genres, author names, and custom tags from dynamic catalog data. Features an interactive dropdown showing cover thumbnails, reader stats, full keyboard navigation (`ArrowDown`, `ArrowUp`, `Enter`, `Escape`), and helpful empty-state suggestions.  
  *Implementation:* Real-time DOM filtering in `js/navigation.js`; works for both registered users and guests.

* **Dual Literary Themes (Light & Dark):**  
  *Definition:* Custom color palettes engineered specifically for long-duration reading comfort.  
  *Functionality:* 
    * **Light Mode (Warm Parchment):** `#F7F4EC` background with `#2F6B52` forest green accents and `#252C28` charcoal typography (contrast ratio > 14.1:1).  
    * **Dark Mode (Nocturne Moss):** `#151D1A` background with `#8CC7A2` sage green accents and `#F2F0E8` crisp light typography (contrast ratio > 12.8:1).  
  *Implementation:* CSS custom properties (`--bg-body`, `--text-main`, etc.) toggled via `data-theme` attribute and persisted in browser `localStorage`.

---

### B. Authentication Interface and Guest Mode

* **Interactive Authentication Modals:**  
  *Definition:* Modal dialogs for user registration, login, and profile onboarding.  
  *Functionality:* Users can log in using preconfigured demo credentials (e.g., author `ElenaVance` with password `password123`) or register a new simulated account with customized reading preferences (font choice, font size, spacing).  
  *Implementation & Limitations:* **Frontend Demonstration Only.** Credentials and user session states are saved directly into the browser's `localStorage` (`fableflow_current_user`, `fableflow_users`). Passwords are not encrypted or hashed on a server, and sessions do not use secure tokens (JWT/cookies). **This does not represent production-level security.**

* **"Continue as Guest" Exploration Mode:**  
  *Definition:* Barrier-free visitor access allowing unrestricted exploration of reading and learning modules.  
  *Functionality:* Guests can search, browse all stories, read full chapters, utilize text-to-speech audio narration, customize typography, practice in the Vocabulary Corner, run the Pomodoro timer, and open the AI Co-Pilot drawer without logging in.

* **Contextual Guest Action Prompts:**  
  *Definition:* Polite authorization gates safeguarding write-enabled features.  
  *Functionality:* If a guest attempts to create a story in `#post`, view the author `#dashboard`, post a community comment, or follow an author, a non-blocking modal (`#guest-prompt-modal`) appears offering one-click options to sign in, create an account, or dismiss without throwing errors or breaking navigation.  
  *Implementation:* Intercepted in `js/auth.js` via `requireAuth(actionName, callback)`.

---

### C. Home and Story Discovery

* **Wattpad-Inspired Story Cards & Hero Showcase:**  
  *Definition:* A visual discovery feed presenting curated and trending literary works.  
  *Functionality:* Story cards display rich cover imagery, book titles, author avatars, read counters, like counts, chapter tallies, and synopsis excerpts. Clicking any card transitions to the detailed story overview or chapter reader.  
  *Implementation:* Dynamically rendered from initial catalog records stored in `localStorage` (`fableflow_stories`).

* **Multi-Genre Filter Bar:**  
  *Definition:* Instant catalog filtering based on literary genres.  
  *Functionality:* Readers can filter titles across 10 distinct genres: **Fantasy, Romance, Science Fiction, Horror, Mystery, Thriller, Poetry, Adventure, Drama, and Fanfiction**.  
  *Implementation:* Client-side array filtering in `js/stories.js`.

* **Dimension-Stabilized "Continue Reading" Shelf:**  
  *Definition:* A dedicated quick-resume bar displaying the user's most recently read story and chapter progress.  
  *Functionality:* Shows story cover art, current chapter title, and a percentage progress bar with a direct "Resume" button.  
  *Implementation:* Fixed 80px container structurally isolated to prevent layout breakage when accessibility font scaling is enabled; progress data read from `localStorage`.

---

### D. Reader Features

* **Distraction-Free Reading Interface (`#story-reader`):**  
  *Definition:* A clean, book-like reading surface optimized for sustained visual comfort.  
  *Functionality:* Displays chapter headings, publication metadata, full chapter text, and reader action toolbars.

* **Chapter Navigation & Selector:**  
  *Definition:* Controls for sequential or random-access chapter reading.  
  *Functionality:* Readers can move smoothly via "Previous Chapter" and "Next Chapter" buttons, or jump immediately to any chapter using an interactive dropdown selector.

* **Reading Progress Persistence:**  
  *Definition:* Client-side bookmarking of reading completion.  
  *Functionality:* Automatically saves the active chapter index and scroll milestone when a reader completes a chapter.  
  *Implementation:* Stored per-story in `localStorage` under `fableflow_reading_progress`.

* **Story Bookmarking and Likes:**  
  *Definition:* Reader engagement tools to save and favorite stories.  
  *Functionality:* Toggle bookmarks to store stories in the user's library; toggle likes with live counter increments.  
  *Implementation:* Stored in browser `localStorage`.

* **Native Text-to-Speech (TTS) Narration:**  
  *Definition:* An integrated audio reading co-pilot that narrates chapter content aloud.  
  *Functionality:*  
    * **Playback Controls:** Play, Pause, Resume, and Stop controls available on every chapter.  
    * **Variable Playback Speed:** Adjustable speeds of 0.75x, 1.0x (normal), 1.25x, 1.5x, 1.75x, and 2.0x.  
    * **Intelligent Sentence Chunking:** Splits long chapter HTML into ~200-character sentence clauses to bypass browser speech buffer timeout bugs.  
    * **Navigation Safety:** Automatically stops audio narration when the user navigates away from the reader to avoid background audio leaks.  
  *Implementation:* Browser-native Web Speech API (`window.speechSynthesis` and `SpeechSynthesisUtterance`) in `js/stories.js`.

---

### E. Writer Features

* **Writing Studio & Multi-Chapter Editor (`#post`):**  
  *Definition:* A focused authoring environment for drafting stories and organizing chapters.  
  *Functionality:* Writers can compose stories, define book titles, write synopses, select genre categories, input comma-separated search tags, attach custom cover image URLs, and manage multi-chapter works.

* **Chapter Management:**  
  *Definition:* Tools to structure serialized or episodic fiction.  
  *Functionality:* Authors can add new chapters, switch between existing chapters, rename chapter titles, and delete chapters with safety confirmation.

* **Live Writing Metrics:**  
  *Definition:* Real-time compositional counters.  
  *Functionality:* Displays dynamic word counts, character counts, and estimated reading time calculations updated on every keystroke.

* **Draft Management & Publishing:**  
  *Definition:* State separation between works-in-progress and published stories.  
  *Functionality:* Authors can choose to save their work as a private draft or publish it immediately into the public story catalog.  
  *Implementation:* Stored locally in `localStorage`. Changes persist in the user's local browser instance.

* **In-Editor AI Writing Suggestion Panel:**  
  *Definition:* An authoring drawer providing targeted literary inspirations.  
  *Functionality:* Writers can trigger contextual prompts for:  
    1. *Grammar & Pacing Polish*  
    2. *Sensory Vocabulary Enhancements*  
    3. *Sentence Flow & Rhythm*  
    4. *Narrative Twists & Conflicts*  
    5. *Character Nuance & Tells*  
    6. *Scene Unstuck Solutions*  
    7. *Subtext Dialogue Polish*  
    8. *Creative Writing Prompts*  
  *Implementation & Limitations:* **Frontend Demonstration Only.** Suggestions are generated using pre-scripted literary template heuristics based on the author's cursor selection in `js/editor.js`. No live external LLM API is invoked.

---

### F. Dashboard

* **Reader and Writer Unified Views (`#dashboard`):**  
  *Definition:* A centralized command center tracking both consumption and creation.  
  *Functionality:* Displays a personalized welcome banner, user avatar, bio, follower metrics, and tabulated dashboard views.

* **Reading History & Library:**  
  *Definition:* Quick access to in-progress reads and saved favorites.  
  *Functionality:* Displays saved bookmarks, continue reading links, and liked stories.

* **Author Studio & Engagement Statistics:**  
  *Definition:* Performance metrics for written stories.  
  *Functionality:* Summarizes total story reads, community likes received, total published chapters, and a management list of published stories with direct "Edit in Studio" shortcuts.  
  *Implementation:* Aggregated dynamically from `localStorage` records.

---

### G. Community

* **Genre Guild Lounges (`#community`):**  
  *Definition:* Themed community hubs for genre-specific author collaboration.  
  *Functionality:* Users can browse and join four distinct guilds: **Fantasy Worldbuilders**, **Cyberpunk & Sci-Fi Forge**, **The Romance Guild**, and **Writer's Block Refuge**. Guild memberships can be toggled on and off.

* **Guild Lounge Chat:**  
  *Definition:* A simulated chatroom for informal banter and writer sprints.  
  *Functionality:* Users can send messages to the active guild lounge. Messages appear immediately with timestamps.  
  *Implementation & Limitations:* **Frontend Demonstration Only.** Sent chat messages are saved to `localStorage` (`fableflow_chat_messages`). The application simulates an automated friendly author companion reply after a 1.2-second delay. **No multi-user WebSocket server or real-time networking is currently connected.**

* **Discussion Topics & Community Posts:**  
  *Definition:* Forum-style conversation threads for craft questions and feedback.  
  *Functionality:* Users can post new discussion threads, read existing community posts, and toggle upvotes/likes.  
  *Implementation:* Persisted locally in `localStorage` (`fableflow_discussion_posts`).

* **Writing Challenges:**  
  *Definition:* Community exercises designed to build writing habits.  
  *Functionality:* Curated challenges (e.g., "The Sensory Opening Challenge", "Micro-Fiction in 200 Words") with an "Accept Challenge" interaction saving enrollment state to browser storage.

---

### H. Learning Hub

* **Focus Zone (Pomodoro Sprint Timer):**  
  *Definition:* A dedicated time-management tool engineered for writers and deep readers.  
  *Functionality:*  
    * Preset sprint durations: **15m, 25m, 45m, and 60m**.  
    * Activity mode tagging: *Writing*, *Editing*, *Outlining*, or *Reading*.  
    * Play, Pause, Resume, and Reset controls.  
    * Completion Chime: Plays an audible celebratory frequency chime generated programmatically via the browser's `Web Audio API` (`AudioContext`, `OscillatorNode`, and `GainNode`), requiring zero external audio files.  
    * Sprint history logging saved to `localStorage` (`fableflow_focus_sessions`).

* **Vocabulary Corner & Word of the Day:**  
  *Definition:* A daily literary enrichment card designed to expand an author's lexicon.  
  *Functionality:* Displays a curated literary word (e.g., *Petrichor*, *Ineffable*, *Luminescence*) accompanied by phonetic spelling, part of speech, concise definition, evocative literary example sentence, and clickable synonym/antonym chips.  
  *Audio Pronunciation:* Features a speaker button (🔊) utilizing the browser's `Web Speech API` to pronounce the word aloud.

* **Live Vocabulary Search & Literary Quiz:**  
  *Definition:* Interactive vocabulary reinforcement tools.  
  *Functionality:* Instant keyword search across literary terms and meanings. Includes a daily multiple-choice vocabulary quiz with immediate answer validation and dynamic score calculations.

* **My Dictionary (Personal Author Word Bank):**  
  *Definition:* A private custom dictionary for authors to archive words discovered while reading or brainstorming.  
  *Functionality:* Users can add new vocabulary entries with custom definitions and personal usage sentences. Entries can be sorted alphabetically or by recently added, and deleted with confirmation.  
  *Implementation:* Persisted across browser sessions in `localStorage` (`fableflow_my_dictionary`).

* **Pedagogical Purpose:**  
  The Learning Hub reinforces FableFlow's core mission: creating better writers by integrating vocabulary acquisition, deliberate practice, and structured writing sprints directly into the reading and drafting workflow.

---

### I. Accessibility and Personalization

* **Neurodiversity & Low-Vision Typography Engine:**  
  *Definition:* A comprehensive typography customizer designed to reduce visual crowding, glare, and reading fatigue.  
  *Supported Font Families:*  
    1. **Lexend:** (Default) Engineered by educational researchers to reduce visual stress and significantly increase reading fluency.  
    2. **OpenDyslexic:** Features heavy bottom-weighted letterforms to help prevent character rotation and letter-flipping confusion.  
    3. **Georgia:** Elegant serif optimized for traditional novel-like literary reading.  
    4. **Arial:** Standard neutral, highly legible sans-serif.  
    5. **Verdana:** Wide-aperture sans-serif designed for effortless computer screen reading.

* **Fine-Grained Geometry Adjustments:**  
  * **Font Scaling:** Live slider scaling body and reader text from `14px` to `24px`.  
  * **Line Height Spacing:** Adjustable line spacing multiplier from `1.2x` to `2.2x`.  
  * **Word Spacing:** Adjustable word separation from `0px` to `10px`.

* **Protected Navbar Structural Metrics:**  
  *Definition:* Structural CSS defense preserving navigation integrity.  
  *Functionality:* Global typography adjustments apply dynamically to story cards, reader text, and descriptions while critical top navigation tabs enforce `white-space: nowrap !important`. This guarantees that magnifying text for low-vision reading **never breaks the navbar layout, forces unnatural multi-line wrapping, or causes horizontal page overflow**.

* **Live Preference Previews:**  
  *Definition:* Real-time sample reading preview inside the settings panel (`#settings`) allowing users to inspect adjustments before returning to reading.

---

### J. AI Assistant Interface

* **Floating AI Co-Pilot Orb:**  
  *Definition:* A permanent, non-intrusive interactive trigger situated in the bottom-right corner of every screen.  
  *Functionality:* Features a rich circular radial gradient, official feather emblem icon, accessible hover tooltip, and a gentle pulsing CSS glow animation (`@keyframes aiOrbSubtleGlow`). Clicking the orb smoothly slides open the conversational AI drawer without displacing active page content.

* **Conversational Co-Pilot Drawer:**  
  *Definition:* A sliding side panel for creative brainstorming and editorial feedback.  
  *Functionality:* Includes quick-action prompt chips for instant brainstorming:  
    * *Plot Twist:* Generates unconventional narrative twists and emotional stakes.  
    * *Unstick Scene:* Suggests sudden sensory disruptions to overcome writer's block.  
    * *Dialogue Polish:* Heightens subtext, tension, and distinct character voices.  
    * *Constructive Critique:* Provides a structured 3-step actionable feedback framework.

* **Current Implementation Disclosure:**  
  > ⚠️ **IMPORTANT IMPLEMENTATION NOTICE:**  
  > The current AI Co-Pilot operates in **Demonstration Mode**. It utilizes client-side keyword matching and pre-configured storytelling heuristics with simulated response delays (600ms). **No live connection to OpenAI, Google Gemini, Anthropic, or external language model APIs exists in the current codebase.** The user interface demonstrates the intended interaction model, ready for seamless API integration in the backend phase.

---

## 🛠️ 5. Technology Stack Used So Far

The current frontend implementation of FableFlow was built strictly adhering to clean, native web standards—requiring **zero build tools, zero bundlers, zero frontend frameworks, and zero runtime package dependencies**.

| Technology / API | Classification | Role in FableFlow | Verification in Codebase |
| :--- | :--- | :--- | :--- |
| **HTML5** | Markup Language | Semantic page structure, modal dialogs, accessible ARIA roles, high-performance DOM trees. | `index.html` |
| **CSS3** | Stylesheet Language | Design tokens, responsive CSS Grid/Flexbox, hardware-accelerated animations, theme variables. | `css/style.css`, `css/responsive.css` |
| **Vanilla JavaScript (ES6+)** | Programming Language | Object-oriented module architecture (`window.FableFlow.*`), UI events, DOM rendering, business logic. | `js/*.js` (10 modular files) |
| **Browser LocalStorage API** | Web Storage API | Client-side cross-session persistence for users, drafts, bookmarks, reading progress, focus logs, and dictionary. | `js/auth.js`, `js/stories.js`, `js/learning.js` |
| **Web Speech API (`SpeechSynthesis`)** | Native Browser API | Audio text-to-speech chapter narration and Vocabulary Corner pronunciation (`window.speechSynthesis`). | `js/stories.js` (TTS object), `js/learning.js` |
| **Web Audio API (`AudioContext`)** | Native Browser API | Synthetic completion chime generation for Pomodoro timer (`OscillatorNode`, `GainNode`). | `js/learning.js` |
| **Browser History & Hash Routing** | Native Browser API | Single-page application hash routing (`window.addEventListener('hashchange')`). | `js/navigation.js` |
| **OpenDyslexic Font CDN** | Typography Asset | Specialized weighted typeface served via jsDelivr CDN for dyslexia reading support. | Linked in `index.html` |
| **Google Fonts** | Web Typography | High-legibility typefaces (`Lexend`, `Inter`, `Lora`) loaded via Google Fonts CDN. | Linked in `index.html` |
| **Git & GitHub** | Version Control | Distributed source control, branch management, collaborative code reviews, and remote hosting. | `.git/`, GitHub Repository |
| **VS Code & Live Server** | Development Environment | Local development IDE with hot-reloading static HTTP server. | Local development setup |

> **Note on Dependencies:** Inspection of the repository confirms there is **no `package.json`**, **no `node_modules`**, and **no build step (Webpack/Vite/Babel)** required for this frontend release. The app runs directly in any modern browser.

---

## 🗺️ 6. Future Features and Development Roadmap

FableFlow's current frontend provides the comprehensive UI/UX foundation. The next major stages of development will introduce robust server-side architecture, permanent cloud persistence, and genuine artificial intelligence.

```
┌────────────────────────────────────────────────────────────────────────┐
│                   FUTURE FULL-STACK ARCHITECTURE                       │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
           ┌────────────────────────┴────────────────────────┐
           ▼                                                 ▼
┌──────────────────────┐                         ┌───────────────────────┐
│   CLIENT FRONTEND    │ <===== HTTPS / WSS =====> │    NODE.JS BACKEND    │
│ • HTML5 / CSS3 / JS  │       REST API          │ • Express.js REST API │
│ • Web Speech TTS     │       WebSocket         │ • JWT Auth & Bcrypt   │
│ • LocalStorage Cache │                         │ • Socket.IO Events    │
└──────────────────────┘                         └───────────┬───────────┘
                                                             │
                                   ┌─────────────────────────┴──────────┐
                                   ▼                                    ▼
                        ┌──────────────────────┐             ┌──────────────────────┐
                        │   MONGODB DATABASE   │             │   REAL AI SERVICES   │
                        │ • User Profiles      │             │ • OpenAI / Gemini    │
                        │ • Stories & Chapters │             │ • Writing Co-Pilot   │
                        │ • Posts & Comments   │             │ • Semantic Summaries │
                        └──────────────────────┘             └──────────────────────┘
```

---

### A. Backend Development
* **Server-Side Authentication & Authorization:** Implement secure user registration, login, and password management using bcrypt hashing and signed JSON Web Tokens (JWT) or secure HTTP-only session cookies.
* **RESTful API Service:** Build modular endpoints for user accounts, story catalogs, chapter drafting, comments, guild management, and personal dictionaries.
* **Role-Based Access Control (RBAC):** Differentiate between standard readers, verified authors, community moderators, and administrators.
* **Secure Data Validation & Sanitization:** Implement rigorous request body validation (e.g., using Joi or Zod) to safeguard against cross-site scripting (XSS), SQL/NoSQL injection, and data corruption.

### B. Database Integration
* **Cloud Database Persistence:** Replace browser `localStorage` with a managed cloud database (MongoDB Atlas / PostgreSQL) ensuring data persists across devices and browser cache clearances.
* **Relational & Document Schemas:**
  * *User Schema:* Secure credentials, profile bio, avatar URLs, follower arrays, and accessibility preferences.
  * *Story & Chapter Schemas:* Hierarchical story structures, version history, chapter word counts, and publishing timestamps.
  * *Engagement Schemas:* Reading milestones, bookmarks, likes, and comment threads.
  * *Community Schemas:* Guild definitions, discussion posts, threaded replies, and message history.
  * *Learning Hub Schemas:* Personal vocabulary collections and focus session analytics.

### C. Real AI Integration
* **Live LLM API Connection:** Transition the AI Co-Pilot drawer from demonstration templates to live cloud AI endpoints (e.g., Google Gemini 1.5 Pro/Flash or OpenAI GPT-4o API).
* **Context-Aware Creative Writing Assistance:** Send active chapter excerpts, genre metadata, and author outlines to the AI model to generate truly customized narrative feedback.
* **Intelligent Editorial Tools:**
  * Contextual grammar, pacing, and tone adjustments.
  * Literary vocabulary recommendations matched to character background and scene mood.
  * Branching plot twists and constructive resolution suggestions.
  * Character dialogue polish heightening distinct dialect and subtext.
* **AI-Generated Story Summaries:** Automated generation of concise story synopses, content warnings, and chapter recaps for readers.

### D. Community and Real-Time Communication
* **Live Multi-User WebSockets:** Implement real-time guild chat using Socket.IO, enabling real authors to write, chat, and participate in synchronized writing sprints simultaneously.
* **Social Networking Features:** Follow authors, receive notifications for new chapter releases, and participate in threaded community discussions.
* **Moderation & Reporting Infrastructure:** Automated word filters, community reporting tools, and moderator review queues to keep community spaces safe and supportive.

### E. Advanced Personalization
* **Cross-Device Cloud Synchronization:** Automatically synchronize reading bookmarks, progress markers, and accessibility settings across all user devices upon sign-in.
* **Personalized Recommendation Algorithm:** Intelligent story discovery based on past reading history, genre affinities, and community engagement.
* **Author & Reader Analytics:** Advanced telemetry showing reading retention graphs per chapter, drop-off rates, and audience demographics.

---

### Development Roadmap Status

- [x] **Milestone 1: Frontend Foundation (Current Stage)**
  - [x] Semantic HTML5 layout and modular CSS design tokens
  - [x] Responsive navigation bar with mobile drawer
  - [x] Single-Page Application (SPA) hash router
  - [x] Wattpad-inspired story cards and genre filtering
  - [x] Distraction-free story reader with chapter selector
  - [x] Web Speech API text-to-speech audio narration
  - [x] Multi-chapter writing studio with word count metrics
  - [x] Focus Zone Pomodoro timer with Web Audio chime
  - [x] Vocabulary Corner, Word of the Day, and My Dictionary
  - [x] OpenDyslexic font integration and typography customizer
  - [x] High-contrast Light (Parchment) and Dark (Moss) themes
  - [x] LocalStorage client persistence for sessions and drafts
  - [x] Floating AI Co-Pilot orb interface (Demonstration Mode)
- [ ] **Milestone 2: Backend Architecture & Database (Planned)**
  - [ ] Node.js & Express.js REST API server setup
  - [ ] MongoDB Atlas schema design (Users, Stories, Chapters)
  - [ ] JWT authentication with bcrypt password encryption
  - [ ] User profile and preference synchronization endpoints
  - [ ] Story CRUD APIs (create, read, update, delete, publish)
- [ ] **Milestone 3: Real AI Engine Integration (Planned)**
  - [ ] Server-side AI gateway (Gemini / OpenAI API)
  - [ ] Context-aware prompt engineering pipeline for authors
  - [ ] Real-time streaming AI writing suggestions
  - [ ] Scene unstuck and dialogue polish generators
- [ ] **Milestone 4: Real-Time Community & Social Features (Planned)**
  - [ ] Socket.IO integration for live guild chatrooms
  - [ ] Synchronized author writing sprints
  - [ ] Author follow system and release notifications
  - [ ] Moderation and content reporting workflows
- [ ] **Milestone 5: Production Deployment & Scale (Planned)**
  - [ ] CI/CD pipeline configuration
  - [ ] Frontend edge hosting & backend containerization
  - [ ] Performance profiling and WCAG 2.1 AAA accessibility audit

---

## 🔮 7. Technology Stack Planned for Future Development

The following technologies represent the proposed architectural roadmap for evolving FableFlow into a full-stack, production-grade cloud application. *Note: Final selections may be refined during development.*

| Layer | Proposed Technologies | Architectural Purpose |
| :--- | :--- | :--- |
| **Backend Framework** | **Node.js & Express.js** | High-performance asynchronous REST API server for business logic, routing, and middleware. |
| **Database & ODM** | **MongoDB & Mongoose ODM** | Scalable NoSQL document store flexible for multi-chapter stories, community discussions, and user profiles. |
| **Authentication & Security** | **JSON Web Tokens (JWT) & bcrypt** | Cryptographic token-based session management, salted password hashing, CORS, and Helmet headers. |
| **AI Integration** | **OpenAI API / Google Gemini API** | Advanced Large Language Models providing real-time creative co-pilot suggestions and story summaries. |
| **Real-Time Communication** | **Socket.IO (WebSockets)** | Low-latency bi-directional event communication for live guild chatrooms and synchronized writing sprints. |
| **API Architecture** | **RESTful JSON APIs** | Standardized, stateless client-server communication with structured error handling. |
| **Environment Management** | **dotenv (`.env`)** | Secure management of API secret keys, database URIs, and server ports. |
| **Cloud Hosting & Deployment** | **Render / Railway / Vercel** | Scalable cloud deployment for frontend static assets, containerized backend services, and MongoDB Atlas. |

---

## 🤝 8. Contribution and Collaboration

FableFlow is an active collaborative project developed by team **Innov8**. We welcome contributions, bug reports, and suggestions from fellow developers.

### Collaborative Git Workflow

To maintain repository stability and ensure clean version histories, all team members and contributors follow a feature-branch workflow:

#### 1. Clone the Repository
```bash
git clone https://github.com/digantamukherjee-19/FableFlow.git
cd FableFlow
```

#### 2. Synchronize with the Main Branch
Always ensure your local `main` branch is up to date before starting new work:
```bash
git checkout main
git pull origin main
```

#### 3. Create a Feature Branch
Never commit directly to the `main` branch. Create a descriptive branch named after the feature or fix:
```bash
# Naming convention: feature/your-feature-name or fix/bug-description
git checkout -b feature/backend-auth-setup
```

#### 4. Make Your Changes and Commit
Adhere to clean, modular code conventions and write clear, semantic commit messages:
```bash
git status
git add .
git commit -m "feat: implement JWT authentication middleware in auth service"
```

#### 5. Push Feature Branch to GitHub
```bash
git push -u origin feature/backend-auth-setup
```

#### 6. Submit a Pull Request (PR)
* Navigate to the [GitHub Repository Pull Requests](https://github.com/digantamukherjee-19/FableFlow/pulls).
* Click **New Pull Request** and select your feature branch against `main`.
* Complete the PR description explaining:
  * Summary of changes made.
  * Features added or bugs fixed.
  * Manual testing steps performed.
* Request a review from at least one Innov8 team member before merging.

---

## 🚀 9. How to Run the Project

Because FableFlow's current version is built strictly using standard web technologies (HTML5, CSS3, Vanilla JavaScript), it requires **no package installation (`npm install`), no Node.js runtime, and no build compilation steps**.

### Prerequisites
* Any modern web browser with JavaScript enabled:
  * Google Chrome (recommended for full Web Speech API voice support)
  * Microsoft Edge
  * Mozilla Firefox
  * Apple Safari

---

### Method 1: VS Code with Live Server (Recommended)

1. **Clone or Download** the repository to your local machine:
   ```bash
   git clone https://github.com/digantamukherjee-19/FableFlow.git
   cd FableFlow
   ```
2. **Open the Project** in Visual Studio Code:
   ```bash
   code .
   ```
3. **Install the Live Server Extension:**
   * Open the Extensions tab in VS Code (`Ctrl+Shift+X` or `Cmd+Shift+X`).
   * Search for **Live Server** (by *Ritwick Dey*) and click **Install**.
4. **Launch the Application:**
   * In the VS Code file explorer, right-click on **`index.html`**.
   * Select **"Open with Live Server"**.
5. The application will launch automatically in your default browser at:
   ```
   http://127.0.0.1:5500/index.html
   ```
   *Any edits made to HTML, CSS, or JS files will instantly hot-reload in your browser!*

---

### Method 2: Direct Browser Launch

1. Navigate to the downloaded project directory in your operating system's file manager (Explorer or Finder).
2. Locate **`index.html`** in the root directory.
3. Double-click **`index.html`** or right-click and choose **Open With** → **Google Chrome** (or your preferred browser).
4. The application will initialize immediately with full sample data, typography controls, and interactive tools ready for testing.

---

### Method 3: Python Simple HTTP Server (CLI Alternative)

If you have Python installed and prefer a lightweight CLI web server:
```bash
# Navigate to the repository root
cd FableFlow

# Python 3
python3 -m http.server 8000
```
Open your browser and navigate to:
```
http://localhost:8000
```

---

## 🌟 10. Closing Section

> *"At **Innov8**, we believe that the true promise of technology lies not in replacing human creativity, but in amplifying it. **FableFlow** was created to be a sanctuary for imagination—a place where neurodivergent and visual accessibility are native foundations, where writer's block is met with an empathetic co-pilot, and where every storyteller, regardless of background or experience, can discover their voice and share it with the world."*

---

<p align="center">
  <strong>FableFlow</strong> • Created with ❤️ by <strong>Innov8</strong><br>
  <em>Debjit Saha • Adrita Adhikari • Adrisa Bhattacharya • Diganta Mukherjee</em><br>
  © 2026 Innov8. Released under the MIT License.
</p>
