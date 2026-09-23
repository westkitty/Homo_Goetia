# ⛦ HOMO GOETIA: Infernal Temple & Computational Grimoire

> **A private, local-first ritual operating system, computational grimoire, and authentic Solomonic occult sanctuary.**

[![Deploy Homo Goetia to GitHub Pages](https://github.com/westkitty/Homo_Goetia/actions/workflows/deploy.yml/badge.svg)](https://github.com/westkitty/Homo_Goetia/actions/workflows/deploy.yml)
[![Offline First](https://img.shields.io/badge/Privacy-100%25%20Local--First-red.svg)](#privacy--local-first-guarantee)
[![PWA Ready](https://img.shields.io/badge/PWA-Installable-blueviolet.svg)](#progressive-web-app-pwa)
[![License: MIT](https://img.shields.io/badge/License-MIT-gold.svg)](LICENSE)

Live Deployment: **[https://westkitty.github.io/Homo_Goetia/](https://westkitty.github.io/Homo_Goetia/)**

---

## 🏛️ The Five Sacred Domains

Homo Goetia is architected into five top-level operational domains, navigable via the global header or mobile bottom sanctuary bar:

```
┌─────────┬───────────┬─────────┬────────────┬───────────┐
│  ALTAR  │  ARCHIVE  │  FORGE  │  CHAMBERS  │  GRIMOIRE │
└─────────┴───────────┴─────────┴────────────┴───────────┘
```

1. **ALTAR (`altar`)**: The ceremonial heart. Set session intentions, launch curated ritual compositions (*Severance*, *Invocation*, *Crypt Descent*, *Sovereign Will*) or assemble custom ceremonies, step through ritual stages, record artifacts in real time, and observe the deterministic **Living Seal** evolve.
2. **ARCHIVE (`archive`)**: Historical Solomonic research.
   - All 72 Goetic Spirits of the Lesser Key of Solomon (*Ars Goetia*) with planetary seals and attributes.
   - All 44 Pentacles of the Greater Key of Solomon across the 7 classical planets.
   - Black Sun Astrolabe (real-time planetary hours), Sacred Geometry Mirror, Dark Scryer, and Occult Trivia.
3. **FORGE (`forge`)**: Active computational talisman creation.
   - Dynamic Sigil Forge (vowel stripping, kamea/wheel routing, canvas export).
   - Alchemical Transmuter & Dice of Azazel.
   - Goetic Demon Generator (**FORGED / PROCEDURAL**).
   - Blood Pact Contract with touch/pointer signature capture.
   - Cryptographic Cipher with AES-GCM vault integration.
4. **CHAMBERS (`chambers`)**: Ritual environments and sensory modulation.
   - Lesser Banishing Ritual of the Pentagram (LBRP) interactive canvas.
   - 78-Card Tarot Oracle with 3-card spread interpretation.
   - 7-Node Acoustic Soundscape Synthesizer & Binaural Drone Mixer.
   - Procedural WebGL Censer Smoke (Serpent, Brimstone, Dragon, Transmute).
   - Focus & Edge Meditation Timer.
   - TST Seven Tenets Contemplation & Descent Journey.
5. **GRIMOIRE (`grimoire`)**: The permanent record.
   - **Ritual History**: Inspect past ceremonies, stage completions, and recorded artifacts.
   - **Artifact Vault**: View and export generated sigils, pacts, tarot spreads, and demonic pacts.
   - **Personal Journal**: Preserved client-side markdown ritual reflection logs.
   - **Encrypted Cryptographic Vault**: Zero-knowledge PBKDF2/AES-GCM encryption with passphrase locks and encrypted export/import.
   - **Chronological Timeline**: Visual evolutionary log of all spiritual operations.

---

## 🗝️ Core Product Thesis & Workflow

```
ENTER PORTAL
    │
    ▼
DECLARE INTENT ──► ASSEMBLE COMPOSITION ──► PERFORM IN CHAMBER
                                                   │
                                                   ▼
LIVING SEAL EVOLVES ◄── SEAL CEREMONY ◄── CREATE ARTIFACTS
```

- **Session Continuity**: Active ceremonies persist across browser reloads via IndexedDB (`HomoGoetiaDB_v1`). You can pause, resume, or abort an ongoing ritual at will.
- **Stage Progression**: Step forward through structured ceremonial phases (`Preparation` → `Execution` → `Integration` → `Sealing`).
- **Artifact Pipeline**: Any talisman, reading, or pact created during an active ritual automatically attaches to the session record.

---

## ⛧ The Living Seal (Centerpiece)

The Altar features a dynamic, deterministic vector talisman generated entirely via SVG:
- **Mathematical Determinism**: Each sealed ritual adds a new sacred geometric layer seeded deterministically by the ritual's ID, composition, intent, and timestamp.
- **Chronology Scrubber**: Scrub back in time through the history of your practice to see earlier iterations of your seal.
- **Composition & Tag Filters**: Filter the seal layers by intent (`sever`, `invoke`, `descent`, `sovereign`).
- **Inspection & Isolation**: Hover or click any layer ring to inspect the ritual that forged it.
- **Direct Vector & Raster Export**: One-click download as standalone SVG or high-resolution PNG.

---

## 🛡️ Provenance Framework

To maintain absolute esoteric integrity, every entity, spirit, and talisman in the system bears an immutable provenance badge:

| Provenance Badge | Description | Examples |
|:---|:---|:---|
| **`ARCHIVE`** | Historical, canon occult sources | 72 Goetic Spirits, 44 Solomonic Pentacles, Classical Planetary Hours |
| **`FORGED`** | Procedurally generated computational creations | Procedural Goetic Generator, Transmuter, Sigil Forge outputs |
| **`PERSONAL`** | User-created sacred records & vows | Active Rituals, Blood Pacts, Journal Reflections, Sealed Sessions |

---

## 🔒 Privacy & Cryptographic Architecture

- **100% Client-Side & Local-First**: Zero external telemetry, zero Google Fonts, zero CDN dependencies, zero cloud sync.
- **Authenticated Web Crypto**:
  - **KDF**: PBKDF2 with SHA-256, 100,000 iterations, 256-bit salt.
  - **Cipher**: AES-GCM (Galois/Counter Mode) 256-bit encryption with unique 96-bit initialization vectors (IV) and 128-bit authentication tags.
  - **Memory Hygiene**: Passphrase and decrypted keys are never persisted in unencrypted storage. Locking clears keys from browser memory immediately.
  - **Encrypted Archive Portability**: Export your complete grimoire as an encrypted `.hgenc` envelope and restore it with your master passphrase.
- **Non-Destructive Migration**: Automatically detects and migrates legacy `localStorage.hg_grimoire_entries` into IndexedDB on first boot without data loss.

---

## 📱 Progressive Web App (PWA) & Offline Use

- **Service Worker (`sw.js`)**: Cache-first asset caching with automatic version management (`homo-goetia-sanctum-v3`).
- **Manifest (`manifest.json`)**: Standalone display mode with dark theme color (`#ff5a79`) and responsive application icon.
- **Standalone Offline Grimoire (`index_offline.html`)**: A single, completely inlined HTML file (~290 KB) containing all HTML, CSS, procedural SVG graphics, audio synthesis engines, and logic for air-gapped computers and USB talismans.

---

## ⚡ Keyboard Shortcuts

| Shortcut | Action |
|:---|:---|
| `Cmd + K` / `Ctrl + K` | Open Universal Chamber Palette & Jump Search |
| `Escape` | Close active modals, palette, and drawer |
| `Alt + 1` ... `Alt + 5` | Direct jump to Altar, Archive, Forge, Chambers, Grimoire |

---

## 🧪 Automated Test Suite

Homo Goetia includes a comprehensive, browser-verified Playwright test suite:

```bash
# Run all automated tests sequentially
npm test

# Run individual test modules
node --test tests/preservation.test.js
node --test tests/navigation.test.js
node --test tests/ritual-engine.test.js
node --test tests/living-seal.test.js
node --test tests/vault-crypto.test.js
node --test tests/persistence-migration.test.js
node --test tests/offline.test.js
node --test tests/mobile.test.js
```

### Build Standalone Grimoire
```bash
npm run build:offline
```

---

## 📜 License & Tradition

Released under the [MIT License](LICENSE). Built for solitary practitioners, queer occultists, and computational grimoire enthusiasts.
