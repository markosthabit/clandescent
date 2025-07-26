<p align="center">
  <a href="#" target="blank"><img src="./Clandescent.png" width="240" alt="Clandescent Logo"/></a>
</p>

  <p align="center">🛡️ CLANDESCENT — A Secure Vault for Sensitive Information</p>
    <p align="center">
<a href="https://www.gnu.org/licenses/gpl-3.0.en.html#license-text"_blank"><img src="https://img.shields.io/badge/License-GPLv3-teal" alt="Package License" /></a>
  <a href="https://paypal.me/markosthabit" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>

CLANDESCENT is a secure vault system for managing passwords, API keys, and sensitive notes. Built with a zero-knowledge architecture and client-side AES-256 encryption, it ensures that even the system administrators can’t access your secrets.

> **Tech Stack**: NestJS • Angular • MongoDB • Prisma • Web Crypto API
>
> **Core Values**: Privacy by design • Role-based access • Auditability • Simplicity

---
>[!WARNING]
> **Security Disclaimer:**
> CLANDESCENT is under active development and **not yet suitable for production use**.
> While it follows modern security principles, it has **not been audited**, and data protection cannot be guaranteed.
> Use at your own risk during this early stage.

---

## 🔐 Key Features

* 🔒 **Client-side AES-256 Encryption** – Secrets are encrypted before leaving your device.
* 👁️ **Zero-Knowledge Architecture** – Plaintext data is never stored or transmitted.
* 🛡️ **Role-Based Access Control** – Fine-grained permission management.
* 📜 **Comprehensive Audit Logging** – Every sensitive action is recorded.
* ⚙️ **Modular Design** – Clean architecture powered by NestJS and Angular.

---


## 🧪 Tasks

* ### 📦 Backend 
  - [x] Schema: User + VaultItem
  - [x] DTOs: With validation decorators
  - [x] CRUD: Users and vault items
  - [x] Auth Email/Password Model
  - [x] JWT authentication 
  - [ ] Route Guards & Vault ownership guards 
  - [ ] Soft delete or timed Hard delete
  - [ ] Audit logging (Prisma + Decorators)
  - [ ] Standardized HTTP responses
  - [ ] AES-256 encryption service (Web Crypto API)


* ### 🎨 Frontend 
  - [ ] Angular authentication service
  - [ ] PrimeNG vault UI
  - [ ] Encryption status indicators
  - [ ] Admin dashboard layout

---

## 📸 UI Preview (Coming Soon)
---

## 🗺️ Roadmap

### Phase 1: Security Foundations

```mermaid
graph TD
    A[2FA Integration] --> B[Biometric Support]
    C[Key Rotation] --> D[Hardware Key Support]
    E[Pen Testing] --> F[SOC2 Checklist]
```

### Phase 2: Enterprise Support

* Team sharing with granular access
* SCIM support
* Real-time breach monitoring

### Phase 3: Mobile Ecosystem

* iOS/Android clients
* WatchOS unlock
* Secure QR code scanner
* Offline mode

---

## 🧰 Tech Stack

### Backend (NestJS)

```json
{
  "framework": "NestJS v11",
  "database": "MongoDB v8 + Prisma v6",
  "security": ["AES-256-CTR", "bcrypt", "PBKDF2"],
  "testing": ["Jest", "Supertest", "Testcontainers"]
}
```

### Frontend (Angular)

```json
{
  "framework": "Angular v20",
  "ui": "PrimeNG v19",
  "state": "NgRx v19",
  "security": ["Web Crypto API", "OAuth2"]
}
```

---

## ⚙️ Getting Started

### 📦 Prerequisites

* Node.js v18+
* Angular CLI
* MongoDB Atlas account (or local MongoDB)

### 🛠️ Installation

```bash
# Clone repository
git clone https://github.com/markosthabit/clandescent.git

# Backend
cd clandescent
npm install
npx prisma generate

# Frontend (coming soon)
```

### 🔐 Configuration

Create a `.env` file in `/clandescent-api`:

```env
PORT=4200
DATABASE_URL="mongodb+srv://user:pass@cluster.mongodb.net/clandescent"
JWT_SECRET="your-strong-secret"
JWT_EXPIRE=""
SALT_ROUNDS=10
```

### ▶️ Run the App

```bash
# Start backend
npm run start:dev

# Start frontend
ng serve
```

Visit: `http://localhost:4200`

---


## 🤝 Contributing

Want to contribute? You're welcome to fork the repo and open a PR.

> For now, I'm prioritizing focused development.
> A full contribution guide will be added once the architecture stabilizes.

---

## 📜 License

GNU GPLv3 License — see [`LICENSE`](./LICENSE.md) for full terms.

---
## :handshake: Acknowledgments
  This project was developed with the help of AI assistants. Contributions included:
  - Initial project conceptualization and security architecture design.
  - Readme, SRS documentation and technical roadmap planning.
  - Logo Design.

>While AI assistance accelerated the design process, all implementation decisions and final code were created by the author.

--- 
> **CLANDESCENT** — Because your secrets deserve better than sticky notes.
