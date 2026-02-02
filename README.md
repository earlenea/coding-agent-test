# AI Image Generator

A modern web application for generating images using AI, built with Next.js, TypeScript, and PostgreSQL.

## 🚀 Features

- ✨ Modern UI with shadcn/ui components
- 🎨 AI-powered image generation
- 🔐 User authentication (coming soon)
- 📊 Image history tracking
- 🌙 Dark mode support
- 📱 Responsive design

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Icons:** Lucide React

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 20+ 
- npm or yarn
- PostgreSQL database

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd ai-image-generator
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory based on `.env.example`:

```bash
cp .env.example .env
```

Update the `.env` file with your configuration:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/ai_image_generator?schema=public"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# API Keys (to be added in later phases)
# OPENAI_API_KEY="your-openai-api-key"
# STABILITY_API_KEY="your-stability-api-key"
```

### 4. Set up the database

**Note:** Make sure you have a PostgreSQL database running before proceeding.

Generate Prisma client:

```bash
npm run db:generate
```

Push the schema to your database (this creates the tables):

```bash
npm run db:push
```

Alternatively, you can use Prisma migrations:

```bash
npx prisma migrate dev --name init
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
ai-image-generator/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── not-found.tsx      # 404 page
│   └── globals.css        # Global styles
├── components/            # React components
│   └── ui/               # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── textarea.tsx
├── lib/                   # Utility functions
│   ├── utils.ts          # Helper functions
│   ├── prisma.ts         # Prisma client
│   └── generated/        # Generated Prisma client
├── prisma/               # Database schema
│   └── schema.prisma     # Prisma schema
├── public/               # Static files
└── styles/              # Additional styles
```

## 🗄️ Database Schema

### User Table
- `id` - Unique identifier
- `email` - User email (unique)
- `name` - User name (optional)
- `password` - Hashed password
- `createdAt` - Account creation timestamp
- `updatedAt` - Last update timestamp

### ImageHistory Table
- `id` - Unique identifier
- `userId` - Reference to User
- `prompt` - Text prompt used for generation
- `imageUrl` - Generated image URL
- `model` - AI model used
- `createdAt` - Generation timestamp

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema to database
- `npm run db:studio` - Open Prisma Studio

## 🔮 Upcoming Features

- [ ] User authentication with NextAuth
- [ ] Multiple AI model integrations (DALL-E, Stable Diffusion)
- [ ] Image gallery and history
- [ ] Advanced generation parameters
- [ ] Image editing and variations
- [ ] Download and share functionality

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Prisma](https://www.prisma.io/)
- [Tailwind CSS](https://tailwindcss.com/)
