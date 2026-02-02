# Quick Start Guide - AI Image Generator

Get up and running in 5 minutes! 🚀

## Prerequisites
- Node.js 20+
- PostgreSQL database
- Git

## Installation

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env

# Edit .env and add your PostgreSQL connection string:
# DATABASE_URL="postgresql://username:password@localhost:5432/ai_image_generator"

# 3. Generate Prisma client
npm run db:generate

# 4. Create database tables
npm run db:push

# 5. Start development server
npm run dev
```

## Access the Application

Open your browser and visit:
- **Homepage**: http://localhost:3000
- **Prisma Studio** (database viewer): Run `npm run db:studio`

## Common Commands

```bash
# Development
npm run dev          # Start dev server with hot reload
npm run build        # Build for production
npm run start        # Start production server

# Database
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema to database
npm run db:studio    # Open database viewer

# Code Quality
npm run lint         # Run ESLint
```

## Project Structure

```
├── app/              # Next.js pages
├── components/ui/    # UI components
├── lib/             # Utilities
├── prisma/          # Database schema
├── public/          # Static files
└── styles/          # Styles
```

## What's Working

✅ Next.js 16 with App Router
✅ TypeScript
✅ Tailwind CSS  
✅ shadcn/ui components
✅ Prisma + PostgreSQL
✅ Modern landing page
✅ 404 error page

## Next Steps

1. Explore the codebase
2. Read the full [README.md](./README.md)
3. Check [SETUP.md](./SETUP.md) for detailed setup
4. Review [PHASE1_COMPLETION.md](./PHASE1_COMPLETION.md) for what's included

## Troubleshooting

**Database connection error?**
- Make sure PostgreSQL is running
- Check your DATABASE_URL in .env
- Try creating the database: `createdb ai_image_generator`

**Port 3000 already in use?**
- Use a different port: `PORT=3001 npm run dev`

**Build errors?**
- Delete .next folder: `rm -rf .next`
- Regenerate Prisma client: `npm run db:generate`
- Reinstall dependencies: `rm -rf node_modules && npm install`

## Need Help?

- 📖 Full documentation: [README.md](./README.md)
- 🔧 Setup guide: [SETUP.md](./SETUP.md)
- ✅ What's included: [PHASE1_COMPLETION.md](./PHASE1_COMPLETION.md)

Happy coding! 🎨✨
