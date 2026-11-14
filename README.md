# 🪶 FableFlow

> **"FableFlow – Where Stories Flow and Creativity Finds Its Voice."**  
> *An Inclusive Storytelling, Reading, and Learning Space — Powered by AI as a Creative Co-Pilot.*

---

## 👥 1. Team Information

**FableFlow** is conceptualized, designed, and developed by team **Innov8**.

| Team Member | Role & Key Focus Areas | GitHub Profile |
| :--- | :--- | :--- |
| **Debjit Saha** | Frontend Architecture, Writing Studio & Community Guilds | [@Jaxy651](https://github.com/Jaxy651) |
| **Adrita Adhikari** | UI/UX Design, Neurodiversity Typography & Accessibility Systems | [@Adrita-Adhikari](https://github.com/Adrita-Adhikari) |
| **Adrisa Bhattacharjee** | Learning Hub, Focus Zone Pomodoro & Vocabulary Interactive Modules | [@adhelixa07](https://github.com/adhelixa07) |
| **Diganta Mukherjee** | Project Lead, State Management, Storage Architecture & AI Integration | [@digantamukherjee-19](https://github.com/digantamukherjee-19) |

* **Team Name:** Innov8  
* **Repository:** [https://github.com/digantamukherjee-19/FableFlow.git](https://github.com/digantamukherjee-19/FableFlow.git)  
* **License:** MIT License  

---

## 📖 2. Project Name, Mission, and Core Philosophy

### **Project Name:** FableFlow

### **Headline:**
> *"FableFlow – Where Stories Flow and Creativity Finds Its Voice."*

### **Executive Overview & Problem Statement**
Many mainstream reading and writing platforms assume that every user can comfortably process dense walls of text, read using the same standard typography, sustain uniform visual attention, and articulate their thoughts solely by typing on a standard keyboard. In practice, fixed typography, crowded layouts, visual clutter, distracting motion, and unbroken pages create severe sensory fatigue and cognitive friction for readers. Similarly, writers often face creative paralysis when confronted with a stark, blank text field and no scaffolding to help them overcome writer's block.

**FableFlow** was created to fundamentally rethink this experience. It is an inclusive, adaptable storytelling and reading platform inspired by community-driven platforms like Wattpad, but built from the ground up to give readers and writers complete sovereignty over how they interact with text.

The platform is designed with readers and writers who experience **Dyslexia, ADHD, Autism, and sensory-processing differences** in mind, while remaining immediately beneficial to anyone who appreciates a calmer, more customizable, and supportive creative environment. FableFlow does not diagnose users or make broad assumptions about individual preferences; instead, every setting is **optional, modular, and completely user-controlled**.

```
════════════════════════════════════════════════════════════════════════════════
                             THE CORE QUESTION
  "How might we make community storytelling easier to enter, adapt, and return
      to, without forcing one rigid reading or writing style on everyone?"
════════════════════════════════════════════════════════════════════════════════
```

### **Central Idea: AI as a Co-Pilot for Creative Artists**
At the heart of FableFlow is the conviction that technology should amplify and empower human imagination, never replace it. Our **AI Co-Pilot** acts as an empathetic, attentive creative companion:
* **Overcoming Writer's Block:** Generating sensory sparks, emotional plot twists, and dialogue polish when an author feels stuck.
* **Dual-Modality Engagement:** Pairing visual reading with native text-to-speech audio narration to reinforce reading comprehension and reduce cognitive load for dyslexic and ADHD readers.
* **Sustained Attention:** Providing structured, low-friction writing sprints (Pomodoro Focus Zone) with pleasant audio chimes to turn intimidating writing sessions into manageable, rewarding rituals.
* **Low-Pressure Studio:** Offering draft previewing, flexible chapter management, and intuitive authoring tools that invite creative play rather than pressure.

```
       ┌────────────────────────────────────────────────────────────────┐
       │                           FABLEFLOW                            │
       │       "AI as an Empathetic Co-Pilot for Creative Artists"      │
       └───────────────────────────────┬────────────────────────────────┘
                                       │
         ┌─────────────────────────────┼─────────────────────────────┐
         ▼                             ▼                             ▼
  📖 ADAPTIVE READING           ✍️ INCLUSIVE STUDIO           🎓 FOCUS & LEARNING
  • OpenDyslexic & Lexend fonts • Low-pressure drafting       • ADHD Pomodoro timer
  • Spacing & sizing sliders    • Real-time progress stats    • Word of the Day + audio
  • Text-to-Speech (TTS) audio  • Creative AI suggestions     • Personal word bank
  • Dimension-stable layouts    • Multi-chapter organization  • Interactive vocab quiz
```

---

## 🏗️ 3. Platform Architecture and Implementation Status

FableFlow combines a responsive, zero-dependency presentation tier with a robust local data and storage architecture designed for seamless cloud expansion.

| Architectural Layer | Implementation Status | Functional Highlights |
| :--- | :--- | :--- |
| **User Interface & Layouts** | **Active & Functional** | Semantic HTML5, CSS Grid/Flexbox, hardware-accelerated animations, and responsive mobile drawers. |
| **Neurodiversity Typography Engine** | **Active & Functional** | Real-time font scaling, OpenDyslexic & Lexend font support, line/word spacing controls, and live preview. |
| **Dual Literary Themes** | **Active & Functional** | WCAG AAA compliant Warm Parchment (Light) and Nocturne Moss (Dark) palettes with >12:1 contrast. |
| **Audio & Speech Synthesis** | **Active & Functional** | Native Web Speech API for chapter narration and vocabulary pronunciation; Web Audio API for timer chimes. |
| **Client Data Layer & Persistence** | **Active & Functional** | Structured client-side storage architecture managing users, stories, chapters, drafts, bookmarks, and dictionaries. |
| **Authentication & Guest System** | **Active & Functional** | Session state engine supporting both registered profiles (with saved preferences) and barrier-free Guest Mode. |
| **AI Creative Co-Pilot** | **Active & Functional** | Interactive floating companion providing contextual prompt templates for scene hooks, dialogue, and critique. |
| **Community & Guild Lounges** | **Active & Functional** | Genre-based community hubs with active chat, writing challenge tracking, and threaded discussion posts. |
| **Cloud Services & Database Sync** | **Evolutionary Roadmap** | Modular API architecture prepared for hybrid deployment with Node.js, Express, MongoDB Atlas, and external LLM APIs. |

---

## ✨ 4. Key Features & Capabilities

FableFlow delivers a comprehensive suite of features crafted specifically to enhance cognitive accessibility, reading fluency, and authorial flow.

```
                   FABLEFLOW SYSTEM CAPABILITIES
┌──────────────────────────────────────────────────────────────────┐
│  window.FableFlow                                                │
│  ├── Accessibility  ──> Typography Engine, Dyslexia Font, Themes │
│  ├── Auth           ──> User Sessions, Preferences, Guest Guard  │
│  ├── Navigation     ──> SPA Hash Router, Instant Live Search     │
│  ├── Stories        ──> Catalog, Wattpad Reader, Web Speech TTS  │
│  ├── Editor         ──> Multi-Chapter Studio, Local Drafts       │
│  ├── Community      ──> Guild Lounges, Discussions, Writing Chat │
│  ├── Learning       ──> Focus Zone, Vocab Quiz, Personal Dict    │
│  ├── Settings       ──> Universal Preferences, Live Preview      │
│  └── AIAssistant    ──> Floating Orb, Creative Writing Co-Pilot  │
└──────────────────────────────────────────────────────────────────┘
```

---

### A. User Interface and Calm Navigation

* **Calm, High-Contrast Top Navigation:**  
  *Definition:* A clean, fixed navigation header providing immediate access to all sections of the application without cognitive overload.  
  *Functionality:* Houses the brand logo, primary navigation tabs (`Home`, `Dashboard`, `Post`, `Community`, `Learning Hub`), search bar, theme switcher, and account controls. On screens narrower than 920px, tabs smoothly collapse into an accessible touch-friendly slide-out drawer.  
  *Accessibility Advantage:* Protected navbar geometry (`white-space: nowrap !important`) ensures that increasing font sizes or word spacing never causes the navigation to break, wrap, or shift unexpectedly.

* **Single-Page Application (SPA) Router:**  
  *Definition:* Fast, client-side view transitions that eliminate jarring full-page refreshes.  
  *Functionality:* Manages smooth routing between `#home`, `#dashboard`, `#post`, `#community`, `#learning`, `#settings`, `#story-detail`, `#story-reader`, and `#author-profile`. Active audio speech is automatically paused when navigating away to avoid sensory distraction.

* **Global Instant Live Search:**  
  *Definition:* A unified search engine embedded directly in the top navigation bar.  
  *Functionality:* Queries story titles, descriptions, genres, author names, and custom tags simultaneously with live dropdown results, rich cover previews, and complete keyboard navigation (`ArrowDown`, `ArrowUp`, `Enter`, `Escape`).

* **Dual Literary Themes (Light & Dark):**  
  *Definition:* Research-informed color themes designed to prevent screen glare and eye fatigue during prolonged reading sessions.  
  * **Warm Parchment (Light):** `#F7F4EC` body background, `#FFFEFA` card surfaces, and `#252C28` charcoal typography with a contrast ratio exceeding **14.1:1**.  
  * **Nocturne Moss (Dark):** `#151D1A` deep forest background, `#202B26` slate moss cards, and `#F2F0E8` crisp parchment text with a contrast ratio exceeding **12.8:1**.  
  *Both themes comfortably exceed WCAG 2.1 AAA accessibility contrast requirements.*

---

### B. Authentication Interface and Guest Exploration

* **Friction-Free Guest Mode:**  
  *Definition:* Instant access to the platform without forced sign-ups or diagnostic questionnaires.  
  *Functionality:* Visitors can immediately browse stories, read complete chapters, utilize text-to-speech audio narration, customize typography, practice in the Learning Hub, and brainstorm with the AI Co-Pilot without logging in.

* **Personalized User Profiles:**  
  *Definition:* User account management that links typography and accessibility preferences directly to the user's profile.  
  *Functionality:* When users register or log in, their chosen font family, sizing, line height, and theme settings are restored across all views. Includes preloaded demo accounts (e.g., author `ElenaVance`) for instant demonstration.

* **Gentle Action Guidance:**  
  *Definition:* Non-blocking authorization prompts that guide guests toward account creation only when accessing personal author tools (such as publishing in the Writing Studio or saving dashboard stats).

---

### C. Home and Story Discovery

* **Wattpad-Inspired Story Cards:**  
  *Definition:* Visual, high-engagement story cards presenting curated, trending, and community-created stories.  
  *Functionality:* Displays custom cover art, story titles, author avatars, read counters, like counts, chapter numbers, and genre badges.

* **Multi-Genre Browsing:**  
  *Definition:* Instant filtering across 10 literary genres: **Fantasy, Romance, Science Fiction, Horror, Mystery, Thriller, Poetry, Adventure, Drama, and Fanfiction**.

* **Dimension-Stabilized "Continue Reading" Shelf:**  
  *Definition:* A dedicated quick-resume bar tracking the user's active story and chapter milestone.  
  *Accessibility Advantage:* Contained in a dimension-stabilized 80px container that retains layout consistency and never triggers visual re-flow when font scaling is modified.

---

### D. Accessible Reader Experience

* **Distraction-Free Reading Surface (`#story-reader`):**  
  *Definition:* An uncluttered reading interface designed to foster immersive, comfortable reading.  
  *Functionality:* Features clean chapter titles, publication metadata, adjustable line widths, and intuitive navigation.

* **Chapter Navigation & Selector:**  
  *Definition:* Flexible reading controls allowing sequential reading ("Previous" and "Next") or random-access jumps via an interactive chapter dropdown.

* **Reading Progress Persistence:**  
  *Definition:* Automatically records chapter completions and scroll positions so readers can always return to their exact place.

* **Native Text-to-Speech (TTS) Narration (Dual-Modality Support):**  
  *Definition:* An integrated audio reading co-pilot powered by the browser's native `window.speechSynthesis`.  
  *Cognitive Benefit:* Enables simultaneous reading and listening (bimodal processing), which significantly improves comprehension, phonological decoding, and focus for individuals with dyslexia and ADHD.  
  *Controls:* Play, Pause, Resume, and Stop controls on every chapter.  
  *Speed Selector:* Adjustable playback speeds (0.75x, 1.0x, 1.25x, 1.5x, 1.75x, 2.0x).  
  *Smart Sentence Chunking:* Divides long chapter text into ~200-character sentence clauses to ensure continuous audio delivery.

* **Bookmarks and Community Likes:**  
  *Definition:* One-click tools to save stories to a private library and show appreciation to authors.

---

### E. Writer's Studio & Drafting Tools

* **Low-Pressure Multi-Chapter Studio (`#post`):**  
  *Definition:* A serene, uncluttered authoring canvas designed to minimize anxiety and invite creative exploration.  
  *Functionality:* Authors can compose stories, define synopses, select genre categories, attach cover art, and manage episodic chapters.

* **Chapter Management:**  
  *Definition:* Tools to add, reorder, switch between, and edit chapters with safety confirmations.

* **Real-Time Compositional Metrics:**  
  *Definition:* Dynamic word count, character count, and estimated reading time calculations updated live with each keystroke.

* **Draft Management:**  
  *Definition:* Clear separation between saving private in-progress drafts and publishing works to the community catalog.

* **In-Editor AI Writing Sparks:**  
  *Definition:* Creative prompt chips embedded directly into the drafting interface to overcome the blank-page syndrome:  
  * *Grammar & Pacing Polish*  
  * *Sensory Vocabulary Enhancements*  
  * *Sentence Flow & Rhythm*  
  * *Narrative Twists & Conflicts*  
  * *Character Nuance & Tells*  
  * *Scene Unstuck Solutions*  
  * *Subtext Dialogue Polish*  
  * *Creative Writing Prompts*

---

### F. Dashboard & Personal Library

* **Dual Reader & Author Dashboard (`#dashboard`):**  
  *Definition:* A unified overview of both reading consumption and creative output.  
  *Functionality:* Displays user bio, follower stats, bookmarked stories, reading history, and author studio analytics (total reads, community likes, and published works).

---

### G. Community Guilds & Interactive Lounges

* **Themed Genre Guilds (`#community`):**  
  *Definition:* Dedicated communal spaces for shared interests: **Fantasy Worldbuilders**, **Cyberpunk & Sci-Fi Forge**, **The Romance Guild**, and **Writer's Block Refuge**.

* **Guild Lounge Chat:**  
  *Definition:* An interactive space for informal writer discussions, sprint banter, and peer encouragement.

* **Discussion Topics & Community Posts:**  
  *Definition:* Forum-style conversation threads where authors can ask questions about craft, share advice, and celebrate milestones.

* **Writing Challenges:**  
  *Definition:* Structured, accessible exercises (e.g., "The Sensory Opening Challenge", "Micro-Fiction in 200 Words") with progress tracking to help writers build consistent habits.

---

### H. Learning Hub & Focus Zone

* **Focus Zone (Pomodoro Sprint Timer):**  
  *Definition:* A dedicated focus-building tool designed to help ADHD writers break down overwhelming projects into manageable, bite-sized sprints.  
  *Functionality:*  
    * Preset durations: **15m, 25m, 45m, and 60m**.  
    * Activity tags: *Writing*, *Editing*, *Outlining*, and *Reading*.  
    * Completion Chime: Plays an uplifting synthetic chime synthesized programmatically via the browser's `Web Audio API` (`AudioContext`, `OscillatorNode`, and `GainNode`), requiring no external audio downloads.  
    * Focus history logging to celebrate completed milestones.

* **Vocabulary Corner & Word of the Day:**  
  *Definition:* Daily literary enrichment cards featuring phonetic spellings, parts of speech, concise definitions, evocative literary examples, and synonym/antonym chips.  
  *Audio Pronunciation:* Native speech synthesis button (🔊) pronouncing the term clearly aloud.

* **Interactive Vocabulary Search & Quiz:**  
  *Definition:* Instant term lookup and a daily multiple-choice literary challenge providing instant feedback and score tracking.

* **My Dictionary (Personal Author Word Bank):**  
  *Definition:* A private repository where writers can collect novel words, write custom definitions, and add personal usage sentences, sortable alphabetically or chronologically.

---

### I. Adaptive Typography and Cognitive Accessibility

FableFlow's accessibility engine was engineered to eliminate sensory strain, letter inversion, and visual crowding:

* **Curated Neurodivergent-Friendly Typefaces:**  
  1. **Lexend:** (Default) Scientifically designed to reduce visual stress, prevent crowding, and significantly enhance reading speed and comprehension.  
  2. **OpenDyslexic:** Features unique heavy, weighted bottom letterforms to anchor characters and prevent rotation, flipping, and confusion.  
  3. **Georgia:** A classic, balanced serif for readers who prefer traditional printed book typography.  
  4. **Arial:** A clean, widely recognized neutral sans-serif.  
  5. **Verdana:** A spacious, wide-aperture sans-serif optimized for comfortable computer screen readability.

* **Granular Layout Sliders:**  
  * **Font Sizing:** Real-time scaling from `14px` to `24px`.  
  * **Line Spacing:** Fine-tuned adjustments from `1.2x` to `2.2x` to avoid line-jumping while reading.  
  * **Word Spacing:** Adjustable separation from `0px` to `10px` to eliminate visual crowding.

* **Live Settings Preview:**  
  * Interactive preview box in `#settings` that reflects typography changes instantly before returning to reading.

---

### J. AI Assistant Co-Pilot

* **Floating Creative Companion Orb:**  
  *Definition:* A permanent, non-intrusive interactive trigger situated in the bottom-right corner of the interface.  
  *Functionality:* Features a rich circular radial gradient, official feather quill icon, accessible tooltip, and a gentle pulsing CSS glow animation (`@keyframes aiOrbSubtleGlow`). Clicking opens a slide-out conversational drawer that never displaces page content.

* **Creative Mentorship Capabilities:**  
  * *Plot Twist Generator:* Brainstorms unexpected narrative surprises and emotional stakes.  
  * *Scene Unstuck Solutions:* Suggests sudden sensory shifts or physical events to overcome creative blocks.  
  * *Dialogue Polish:* Enriches dialogue subtext, character tension, and unique speech cadences.  
  * *Constructive Peer Critique:* Provides a positive, 3-step structured critique framework for author self-review.

---

## 🛠️ 5. Technology Stack

FableFlow is built upon high-performance, native web standards—ensuring blazing-fast load times, complete cross-platform compatibility, and zero dependency friction.

| Technology / API | Classification | Implementation & Role in FableFlow |
| :--- | :--- | :--- |
| **HTML5** | Semantic Web Markup | Accessible semantic structure, modal dialogs, ARIA attributes, and accessible DOM hierarchies. |
| **CSS3** | Stylesheets & Layouts | CSS custom properties (variables) for live runtime theming, CSS Grid, Flexbox, and hardware-accelerated animations. |
| **Vanilla JavaScript (ES6+)** | Application Logic | Clean object-oriented module architecture (`window.FableFlow.*`), UI events, routing, and dynamic data rendering. |
| **Browser Storage & Data Layer** | Client-Side Database | Structured data persistence managing user sessions, published stories, drafts, bookmarks, and focus history. |
| **Web Speech API (`SpeechSynthesis`)** | Native Audio API | Chapter text-to-speech audio narration and Vocabulary Corner word pronunciation. |
| **Web Audio API (`AudioContext`)** | Native Audio API | Real-time procedural audio synthesis generating the Pomodoro completion chime. |
| **Browser History & Hash Routing** | Native Navigation API | Smooth Single-Page Application (SPA) routing without full-page reloads. |
| **OpenDyslexic Font CDN** | Typography Asset | Specialized weighted typeface served via jsDelivr CDN for dyslexia reading support. |
| **Google Fonts** | Web Typography | High-legibility web typefaces (`Lexend`, `Inter`, `Lora`) loaded via Google Fonts CDN. |
| **Git & GitHub** | Version Control | Distributed source control, branch collaboration, and remote code repository. |

---

## 🗺️ 6. Future Expansion and Evolutionary Roadmap

FableFlow is architected with a modular, scalable foundation. As the platform grows, we are expanding our local-first architecture into a hybrid cloud ecosystem to support global author communities and advanced artificial intelligence capabilities.

```
┌────────────────────────────────────────────────────────────────────────┐
│                   FUTURE HYBRID CLOUD ARCHITECTURE                     │
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
                        │   MONGODB CLUSTER    │             │   REAL-TIME AI API   │
                        │ • User Profiles      │             │ • Google Gemini      │
                        │ • Stories & Chapters │             │ • OpenAI GPT-4o      │
                        │ • Posts & Comments   │             │ • Story Summaries    │
                        └──────────────────────┘             └──────────────────────┘
```

### Key Areas of Future Expansion:
* **Server-Side Architecture:** Dedicated Node.js & Express.js REST API layer with secure JSON Web Token (JWT) authentication and bcrypt password hashing.
* **Cloud Database Synchronization:** MongoDB Atlas integration to seamlessly synchronize local user libraries, bookmarks, and drafts across all user devices.
* **Direct Cloud LLM Gateway:** Direct integration with Google Gemini and OpenAI APIs for deep, context-aware writing analysis, character voice refinement, and real-time narrative summaries.
* **Live Community WebSockets:** Multi-user real-time guild chat and synchronized writing sprints powered by Socket.IO.
* **Author & Reader Analytics:** Granular visual analytics tracking reading retention, chapter completion rates, and reader engagement trends.

---

## 🔮 7. Technology Stack Planned

| Layer | Proposed Technologies | Purpose & Scalability Impact |
| :--- | :--- | :--- |
| **Backend Framework** | **Node.js & Express.js** | High-concurrency asynchronous API server handling authentication, story CRUD, and data validation. |
| **Cloud Database** | **MongoDB & Mongoose ODM** | Scalable NoSQL document database ideal for flexible story chapters, rich drafts, and community conversations. |
| **Authentication & Security** | **JWT & bcrypt** | Industry-standard cryptographic token sessions, salted password hashing, CORS, and Helmet security headers. |
| **Cloud AI Services** | **Google Gemini / OpenAI APIs** | Large Language Models powering context-aware writing assistance, story summaries, and tone analysis. |
| **Real-Time Communication** | **Socket.IO (WebSockets)** | Low-latency bi-directional event communication for live guild chat and synchronized group writing sprints. |
| **API Architecture** | **RESTful JSON APIs** | Standardized, predictable client-server communication with structured error handling. |
| **Hosting & Deployment** | **Render / Railway / Vercel** | Scalable global cloud hosting with automatic continuous integration and delivery (CI/CD). |

---

## 🌟 8. Closing Section

> *"At **Innov8**, we believe that true technological innovation should open doors, not create walls. Storytelling is one of humanity's most fundamental forms of expression, yet too many voices have been sidelined by rigid, inflexible digital tools.*  
>  
> *With **FableFlow**, we are creating a digital home where neurodiversity is embraced by design, where readers can tailor every sentence to their cognitive comfort, and where writers of all abilities find an encouraging co-pilot to help their imagination take flight."*

---

<p align="center">
  <strong>FableFlow</strong> • Crafted with ❤️ by <strong>Innov8</strong><br>
  <em>Debjit Saha • Adrita Adhikari • Adrisa Bhattacharya • Diganta Mukherjee</em><br>
  © 2026 Innov8. Released under the MIT License.
</p>
