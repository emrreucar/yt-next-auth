# 🔐 Next.js Authentication with NextAuth.js + Prisma + MongoDB

This project demonstrates a modern authentication setup using:

- **Next.js 14 App Router**
- **NextAuth.js** (JWT session strategy)
- **Prisma ORM**
- **MongoDB**
- **OAuth Providers**: GitHub & Google
- **Credentials Provider** (Email & Password Login)

---

## 📦 Technologies Used

- [Next.js](https://nextjs.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [Prisma](https://www.prisma.io/)
- [MongoDB](https://www.mongodb.com/)
- [TypeScript](https://www.typescriptlang.org/)

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-auth-project.git
cd your-auth-project
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables

Create a .env file in the root directory and fill in the following:

# MongoDB

DATABASE_URL=mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority

# NextAuth Secret (for JWT encryption)

NEXTAUTH_SECRET=your_super_secret_key

# GitHub OAuth

GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret

# Google OAuth

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

### 4. Setup Prisma

Generate Prisma Client:

```bash
npm install -D prisma
npx prisma init

// Push the schema to MongoDB
npx prisma db push
```
