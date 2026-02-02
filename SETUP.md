# AI Image Generator - Setup Guide

## Phase 1: Project Initialization ✅

This document provides detailed setup instructions for the AI Image Generator project.

## Prerequisites

Before starting, ensure you have the following installed on your system:

- **Node.js**: Version 20 or higher
- **npm**: Comes with Node.js
- **PostgreSQL**: Version 14 or higher
- **Git**: For version control

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Setup

Copy the example environment file:

```bash
cp .env.example .env
```

Edit `.env` and configure your database connection:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/ai_image_generator?schema=public"
```

Replace `username`, `password`, and database name with your PostgreSQL credentials.

### 3. Database Setup

#### Option A: Using Prisma Push (Recommended for Development)

```bash
npm run db:generate
npm run db:push
```

This will:
- Generate the Prisma Client
- Create the database tables based on the schema

#### Option B: Using Migrations (Recommended for Production)

```bash
npm run db:generate
npx prisma migrate dev --name init
```

This will:
- Generate the Prisma Client
- Create migration files
- Apply migrations to your database

### 4. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application.

## Database Schema

The project includes two main tables:

### User Table
Stores user account information for authentication.

| Field | Type | Description |
|-------|------|-------------|
| id | String | Unique identifier (CUID) |
| email | String | User email (unique) |
| name | String? | Optional user name |
| password | String | Hashed password |
| createdAt | DateTime | Account creation timestamp |
| updatedAt | DateTime | Last update timestamp |

### ImageHistory Table
Tracks all generated images for each user.

| Field | Type | Description |
|-------|------|-------------|
| id | String | Unique identifier (CUID) |
| userId | String | Foreign key to User |
| prompt | Text | Text prompt used for generation |
| imageUrl | String | URL of generated image |
| model | String | AI model used |
| createdAt | DateTime | Generation timestamp |

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality |
| `npm run db:generate` | Generate Prisma Client |
| `npm run db:push` | Push schema to database (no migrations) |
| `npm run db:studio` | Open Prisma Studio (database GUI) |

## Troubleshooting

### Database Connection Issues

If you encounter database connection errors:

1. Verify PostgreSQL is running:
   ```bash
   # Linux/Mac
   sudo service postgresql status
   
   # Or check if the port is listening
   netstat -an | grep 5432
   ```

2. Test your connection string using `psql`:
   ```bash
   psql "postgresql://username:password@localhost:5432/ai_image_generator"
   ```

3. Ensure the database exists:
   ```bash
   createdb ai_image_generator
   ```

### Port Already in Use

If port 3000 is already in use:

```bash
# Use a different port
PORT=3001 npm run dev
```

### Prisma Client Issues

If you see Prisma Client errors:

```bash
# Regenerate the Prisma Client
npm run db:generate

# Clear Next.js cache
rm -rf .next
npm run dev
```

## Next Steps

After completing the setup:

1. **Test the application**: Visit the homepage and verify it loads correctly
2. **Explore Prisma Studio**: Run `npm run db:studio` to view your database
3. **Review the codebase**: Familiarize yourself with the project structure
4. **Ready for Phase 2**: User authentication and API integration

## Project Structure

```
ai-image-generator/
├── app/                    # Next.js app directory (App Router)
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Landing page
│   ├── not-found.tsx      # 404 error page
│   └── globals.css        # Global styles with Tailwind
├── components/            # React components
│   ├── layout/           # Layout components (future)
│   └── ui/               # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── textarea.tsx
├── lib/                   # Utility functions and clients
│   ├── utils.ts          # Helper functions (cn, etc.)
│   ├── db.ts             # Database client (placeholder)
│   └── generated/        # Generated Prisma client (gitignored)
├── prisma/               # Database configuration
│   └── schema.prisma     # Database schema
├── public/               # Static assets
├── styles/               # Additional styles (future)
├── .env                  # Environment variables (gitignored)
├── .env.example          # Environment template
├── components.json       # shadcn/ui configuration
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow existing code conventions
- Use ESLint for code quality

### Git Workflow
- Create feature branches
- Write descriptive commit messages
- Test before committing

### Environment Variables
- Never commit `.env` files
- Update `.env.example` when adding new variables
- Document all environment variables

## Support

For issues or questions:
- Check the troubleshooting section above
- Review Next.js documentation: https://nextjs.org/docs
- Review Prisma documentation: https://www.prisma.io/docs

## What's Included in Phase 1

✅ Next.js 16 with App Router
✅ TypeScript configuration
✅ Tailwind CSS setup
✅ shadcn/ui components (Button, Card, Input, Textarea)
✅ Prisma ORM with PostgreSQL
✅ Database schema (User, ImageHistory tables)
✅ Landing page with modern design
✅ 404 error page
✅ Project documentation

## Coming in Phase 2

- User authentication with NextAuth.js
- Protected routes
- User registration and login
- API integration for image generation
- User dashboard
