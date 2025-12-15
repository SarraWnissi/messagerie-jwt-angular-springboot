# Messagerie JWT (Angular + Spring Boot)

Application full‑stack de messagerie avec authentification **JWT**, API REST sécurisée (Spring Security) et interface Angular.

---

## Fonctionnalités
- Authentification via `/auth/login` (JWT).
- Liste des utilisateurs.
- Boîte de réception (messages reçus).
- Messages envoyés.
- Envoi de message.
- “Suppression logique” basée sur l’état (`etat`) côté backend.

---

## Stack technique
### Backend
- Spring Boot
- Spring Data JPA (Hibernate)
- Spring Security (stateless)
- JWT (génération + filtre d’authentification)

### Frontend
- Angular
- HttpClient + Headers (Authorization)
- Routing + Guard (protection des routes)
- Décodage du JWT (récupération `iduser`)

---

## Démarrage rapide

### 1) Backend (Spring Boot)
1. Créer la base MySQL: `appMessagerie`
2. Mettre à jour `application.properties` selon ta config (user/password/port).
3. Lancer l’application Spring Boot.

API par défaut: `http://localhost:8080`

### 2) Frontend (Angular)
npm install
ng serve -o

text
App Angular: `http://localhost:4200`

---

## API Endpoints
Base URL: `http://localhost:8080`

### Auth
- `POST /auth/login` → retourne `{ token: "..." }`

### Messagerie (protégé)
- `GET /messagerie/utilisateurs`
- `GET /messagerie/messagesrecus/{id}`
- `GET /messagerie/messagesenvoyes/{id}`
- `POST /messagerie/addMessage`
- `DELETE /messagerie/delMessage/{id}`
- `GET /messagerie/delMessageRecu/{id}` (suppression logique)
- `GET /messagerie/delMessageSend/{id}` (suppression logique)

---

## Exemple (login)
### Request
{
"username": "user1",
"password": "pass1"
}

text

### Response
{
"token": "JWT_TOKEN_HERE"
}

text

---

## Frontend: Auth & navigation
- Le token est stocké dans `localStorage` (clé: `token`).
- L’id utilisateur est extrait depuis le token (claim: `iduser`) puis stocké dans `localStorage`.
- Les routes sont protégées via Guard:
  - `/msgrecus`
  - `/msgenvoyer`
  - `/send`

---

## Remarques / améliorations possibles
- Externaliser les URLs dans `environment.ts`.
- Corriger l’endpoint de suppression Angular: `delMessage` doit être `/delMessage/` + id (avec un `/`).
- Ajouter un vrai système de rôles/authorities (actuellement `getAuthorities()` retourne `null`).
- Ajouter pagination + tri (messages) et validation des formulaires.
