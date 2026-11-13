# 🪶 FableFlow

> **TAGLINE:** *Where stories flow and creativity grows.*  
> **PROJECT THEME:** *"AI as a Co-Pilot for Creative Artists"*

FableFlow is a complete, fully functional, responsive storytelling and reading web platform inspired by Wattpad. It combines creative writing, accessible reading typography, AI-assisted authoring, interactive community collaboration, and learning tools.

Built strictly with **HTML5, CSS3, and Vanilla JavaScript** — with **zero external dependencies, zero build steps, and zero node runtime requirements**.

---

## 🚀 How to Run the Website

The website is a pure static web application. It can be opened and used immediately through any of the following methods:

### Method 1: Direct File Open (Easiest)
1. Open File Explorer and navigate to `D:\FableFlow`.
2. Double-click **`index.html`** or right-click `index.html` -> **Open with** -> **Google Chrome / Microsoft Edge / Firefox**.
3. The platform opens immediately with all features, sample stories, fonts, and AI tools ready!

### Method 2: VS Code Live Server
1. Open the `D:\FableFlow` folder in VS Code.
2. Right-click **`index.html`** and select **"Open with Live Server"**.
3. Browse at `http://127.0.0.1:5500/index.html`.

---

## 🎨 Premium Literary Colour Palette

FableFlow features a modern, premium digital library aesthetic tailored for long, comfortable reading and writing sessions:

### Light Theme (Warm Parchment & Forest Green)
- **Background:** `#F7F4EC` (warm parchment)
- **Cards and surfaces:** `#FFFEFA` (soft ivory)
- **Secondary surfaces:** `#EDE9DF`
- **Primary:** `#2F6B52` (deep forest green)
- **Secondary:** `#354A70` (muted navy blue)
- **Accent:** `#C9684B` (terracotta)
- **Main text:** `#252C28`
- **Muted text:** `#69736D`
- **Borders:** `#DDD8CD`

### Dark Theme (Nocturne & Sage Green)
- **Background:** `#151D1A`
- **Cards and surfaces:** `#202B26`
- **Secondary surfaces:** `#293831`
- **Primary:** `#8CC7A2` (soft sage green)
- **Secondary:** `#9DADD7` (soft periwinkle)
- **Accent:** `#E18A6E` (muted coral)
- **Main text:** `#F2F0E8`
- **Muted text:** `#B5BDB7`
- **Borders:** `#3B4941`

Theme toggling is accessible anywhere from the navbar or Settings tab and persists in `localStorage`.

---

## 📖 Sleek, Dimension-Stabilised "Continue Reading" Section

The topmost Continue Reading section on the Home page is streamlined and invariant under typography customization:
- **Compact Dimensions:** Locked fixed height of `80px` (`min-height: 80px; max-height: 80px; box-sizing: border-box; overflow: hidden;`).
- **Petite Cover:** 38x54px high-contrast cover thumbnail.
- **Single-Row Meta:** Neatly aligns tag, title, author, and a sleek Resume Reading pill.
- **Typography Invariance:** Changing font size (14px–24px), line height, or word spacing in Accessibility settings will **never** cause this container to expand, break out, or push content down. Title and author automatically use ellipsis truncation.
- **Catalog Visibility:** Readers immediately see Featured Stories and Trending stories without excessive scrolling.

---

## 🚪 Distraction-Free Authentication & "Continue as Guest"

The Login and Registration modal is clean, focused, and free of book cards or browsing distractions:
- **Clean Branding:** Clear logo, tagline, and welcoming instructions.
- **Accessibility Onboarding:** Live sliders for font style, font size, line spacing, and word spacing on registration.
- **Continue as Guest Button:** Prominently featured on both Login and Register tabs.
- **Persistent Guest Session:** Stores `fableflow_session_type = 'guest'`. Guests can refresh the browser without being redirected to login.
- **Guest Navbar Indicator:** Shows a "Guest" profile badge alongside direct "Sign In" and "Sign Up" buttons for seamless transition at any time.
- **Guest Privileges:**
  - Browse all stories, categories, trending lists, and search queries.
  - Read full chapters and use the Web Speech API Text-to-Speech audio player.
  - Customise typography and switch between light/dark themes.
  - Use Focus Zone Pomodoro and Vocabulary Corner.
- **Friendly Action Prompts:** If a guest attempts registered-only actions (publishing a story in the Studio, joining a community guild, sending a chat message, posting a discussion topic, commenting on a chapter, or following an author), a friendly modal (`#guest-prompt-modal`) opens with options to Sign In or Continue as Guest without errors or silent failure.

---

## 🔊 Text-to-Speech (TTS) Story Narration

Every story chapter includes a built-in, compact, and keyboard-accessible audio narration player powered by the browser's native **Web Speech API** (`SpeechSynthesis` and `SpeechSynthesisUtterance`):
- **Controls:** Play, Pause, Resume, and Stop.
- **Playback Speed Selector:** 0.75x, 1.0x (Default), 1.25x, 1.5x, 1.75x, and 2.0x.
- **Intelligent Chunking:** Automatically divides long chapters into sentence clauses (~180-240 characters) to prevent browser speech synthesis timeouts.
- **Navigation Safety:** Automatically stops previous narration when another chapter, story, or page is opened.

---

## 📂 Project Structure

```
FableFlow/
├── index.html              # Single-page application entry point & view markup
├── css/
│   ├── style.css           # Core styling, literary color system, stabilized continue-reading
│   └── responsive.css      # Fluid responsive breakpoints (Desktop, Tablet, Mobile)
├── js/
│   ├── app.js              # Application bootstrap & coordinator
│   ├── navigation.js       # Client-side router, view manager & protected route guard
│   ├── auth.js             # Session management, Guest mode, login/signup & accessibility onboarding
│   ├── accessibility.js    # Global typography engine (fonts, sizing, spacing, themes)
│   ├── stories.js          # Wattpad story discovery, reader, comments & Web Speech API TTS player
│   ├── editor.js           # Post writing studio, chapter editor & AI Co-Pilot review tray
│   ├── community.js        # Guilds, live group chat, challenges & discussion threads
│   ├── learning.js         # Focus Zone Pomodoro, Vocabulary Corner & My Dictionary
│   ├── settings.js         # Global settings coordinator & Logout confirmation flow
│   └── ai-assistant.js     # Global floating AI writing & reading companion drawer
├── assets/
│   └── icons/
│       └── Magical Fountain Pen and Open Book.webp  # Official FableFlow emblem logo
└── README.md               # Complete documentation
```

---

## 🔑 Authentication & Manual Sign-In

- **Manual Entry:** To ensure a clean experience, login and registration fields remain completely empty by default with browser autocomplete disabled.
- **Account Creation:** Users can register their own accounts with personalized reading typography preferences.
- **Existing User Login:** Standard manual sign-in with your registered username or email and password.
- **Continue as Guest:** One-click instant guest exploration without credentials.
>>>>>>> a05c4b8 (feat: complete FableFlow web application with literary theme, floating AI orb, and high-contrast Vocabulary Corner)
