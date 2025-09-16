# 🔐 Next.js Authentication with NextAuth.js + Prisma + MongoDB

![Authentication Demo](https://github.com/user-attachments/assets/c5543913-276d-4277-8909-f50bba17fa21)

This project demonstrates a modern authentication setup using:

- **Next.js 15 App Router**
- **NextAuth.js** (JWT session strategy)
- **Prisma ORM**
- **MongoDB**
- **OAuth Providers**: GitHub & Google
- **Credentials Provider** (Email & Password Login)

---

## 📦 Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [NextAuth.js](https://next-auth.js.org/) - Authentication library
- [Prisma](https://www.prisma.io/) - Database ORM
- [MongoDB](https://www.mongodb.com/) - NoSQL database
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/emrreucar/yt-next-auth.git
cd yt-next-auth
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Variables Configuration

Create a `.env.local` file in the root directory and add the following variables:

```env
# MongoDB Connection String
DATABASE_URL="mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority"

# NextAuth Configuration
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your_super_secret_key_here"

# GitHub OAuth Provider
GITHUB_ID="your_github_client_id"
GITHUB_SECRET="your_github_client_secret"

# Google OAuth Provider
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"
```

### 4. Prisma Setup

```bash
# Install Prisma CLI (if not already installed)
npm install -D prisma

# Generate Prisma Client
npx prisma generate

# Push the schema to MongoDB
npx prisma db push
```

### 5. Run the Application

```bash
npm run dev
# or
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

---

## 🔧 OAuth Provider Setup

### GitHub OAuth

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click "New OAuth App"
3. Fill in the required information:
   - **Application name**: Your application name
   - **Homepage URL**: `http://localhost:3000`
   - **Authorization callback URL**: `http://localhost:3000/api/auth/callback/github`
4. Copy the Client ID and Client Secret to your `.env.local` file

### Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to APIs & Services > Credentials
4. Click "Create Credentials" > "OAuth 2.0 Client IDs"
5. Add the following to Authorized redirect URIs: `http://localhost:3000/api/auth/callback/google`
6. Copy the Client ID and Client Secret to your `.env.local` file

---

## 📁 Project Structure

```
├── app/
│   ├── api/auth/[...nextauth]/
│   ├── login/
│   ├── register/
│   └── dashboard/
├── components/
├── lib/
│   ├── auth.ts
│   └── prisma.ts
├── prisma/
│   └── schema.prisma
└── types/
```

---

## 🚀 Features

- ✅ Email/Password authentication
- ✅ GitHub OAuth integration
- ✅ Google OAuth integration
- ✅ JWT-based session management
- ✅ Database operations with Prisma
- ✅ TypeScript support
- ✅ Responsive design
- ✅ Protected routes

---

## 🌐 Deployment

### Environment Variables for Production

Make sure to update the following environment variables for production:

```env
NEXTAUTH_URL="https://yourdomain.com"
NEXTAUTH_SECRET="your_production_secret_key"
```

### OAuth Callback URLs for Production

Update your OAuth providers with production callback URLs:

- **GitHub**: `https://yourdomain.com/api/auth/callback/github`
- **Google**: `https://yourdomain.com/api/auth/callback/google`

---

## 📝 Important Notes

- Replace `NEXTAUTH_URL` with your actual domain in production
- Use a secure random string for `NEXTAUTH_SECRET`
- If using MongoDB Atlas, make sure to whitelist your IP address
- Update OAuth provider callback URLs for production environment
- Ensure your MongoDB connection string has proper read/write permissions

---

## 🛠️ Development

### Database Management

```bash
# View your database in Prisma Studio
npx prisma studio

# Reset your database
npx prisma db push --force-reset

# Generate Prisma Client after schema changes
npx prisma generate
```

### Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 🐛 Troubleshooting

### Common Issues

- **MongoDB Connection Error**: Check your connection string and network access
- **OAuth Callback Mismatch**: Verify callback URLs match in both provider settings and your application
- **JWT Secret Missing**: Ensure `NEXTAUTH_SECRET` is set in your environment variables
- **Prisma Client Issues**: Try running `npx prisma generate` after schema changes

---

## 🙏 Acknowledgments

- [Next.js Team](https://nextjs.org/) for the amazing framework
- [NextAuth.js](https://next-auth.js.org/) for authentication solution
- [Prisma](https://www.prisma.io/) for the excellent ORM
- [MongoDB](https://www.mongodb.com/) for the database platform
