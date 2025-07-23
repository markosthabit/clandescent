<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">🛡️ CLANDESCENT — A Secure Vault for Sensitive Information</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

CLANDESCENT is a secure vault system for managing passwords, API keys, and sensitive notes. Built with a zero-knowledge architecture and client-side AES-256 encryption, it ensures that even the system administrators can’t access your secrets.

> **Tech Stack**: NestJS • Angular • MongoDB • Prisma • Web Crypto API
> **Core Values**: Privacy by design • Role-based access • Auditability • Simplicity

---
  >[!WARNING]  **Security Disclaimer**
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

### 📦 Backend 
- [x] Schema: User + VaultItem
- [x] DTOs: With validation decorators
- [x] CRUD: Users and vault items
- [ ] Auth Email/Password Model
- [ ] JWT authentication 
- [ ] Vault ownership guards and soft delete
- [ ] Standardized HTTP responses
- [ ] AES-256 encryption service (Web Crypto API)
- [ ] Audit logging (Prisma + Decorators)


### 🎨 Frontend 

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
cd clandescent-api
npm install
npx prisma generate

# Frontend
cd ../clandescent-web
npm install
```

### 🔐 Configuration

Create a `.env` file in `/clandescent-api`:

```env
DATABASE_URL="mongodb+srv://user:pass@cluster.mongodb.net/clandescent"
JWT_SECRET="your-strong-secret"
ENCRYPTION_DERIVATION_ROUNDS=100000
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

## 📡 API Endpoints

| Endpoint         | Method | Description             | Status |
| ---------------- | ------ | ----------------------- | ------ |
| `/auth/register` | POST   | User registration       | ✅      |
| `/auth/login`    | POST   | JWT login               | ⬜️     |
| `/vault`         | GET    | List user's vault items | ✅      |
| `/vault`         | POST   | Create new vault item   | ✅      |
| `/vault/:id`     | PATCH  | Update vault item       | ⬜️     |
| `/vault/:id`     | DELETE | Soft-delete vault item  | ⬜️     |
| `/admin/users`   | GET    | Admin-only user list    | ⬜️     |

---

## 🧭 Architecture Overview

```mermaid
graph TD
    A[Angular UI] --> B[NestJS API]
    B --> C[Auth Service]
    B --> D[Encryption Service]
    B --> E[Vault Service]
    C --> F[Prisma ORM]
    D --> G[Crypto Module]
    E --> H[Audit Logger]
    F --> I[(MongoDB)]
    H --> J[(Audit DB)]
```

---

## 🤝 Contributing

Want to contribute? You're welcome to fork the repo and open a PR.

> For now, we’re prioritizing focused development.
> A full contribution guide will be added once the architecture stabilizes.

---

## 📜 License

MIT License — see [`LICENSE`](./LICENSE) for full terms.

---

> **CLANDESCENT** — Because your secrets deserve better than sticky notes.

---
