# Sultan PM - Project Management Dashboard

A beautiful project management dashboard for monitoring OpenClaw tasks, sub-agents, and API keys, inspired by Bermy Banana's UI design.

## 🎨 Features

- **Dashboard** with real-time system status
- **Task Management** with progress tracking
- **API Key Management** with secure storage
- **Bermy Banana Inspired UI** (yellow/orange theme)
- **Single User Authentication** (for Sultan Yahya)
- **Mobile Responsive** design
- **Next.js + TypeScript** for optimal performance

## 🚀 Tech Stack

- **Framework**: Next.js 16.1.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Authentication**: NextAuth.js
- **Deployment**: Vercel

## 📦 Installation

```bash
npm install
npm run dev
```

## 🌐 Environment Variables

Create a `.env.local` file:

```
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=your-secure-secret
ADMIN_USERNAME=your-username
ADMIN_PASSWORD=your-secure-password
```

## 📝 Pages

- **Home**: `/` - Landing page
- **Dashboard**: `/dashboard` - System monitoring
- **Tasks**: `/tasks` - Task management
- **API Keys**: `/keys` - API key management

## 🎨 UI/UX Design

Inspired by Bermy Banana's branding:
- Yellow/orange gradient backgrounds
- Clean card-based layout
- Smooth animations and transitions
- Modern, professional appearance

## 🔧 Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Deploy to Vercel
npm run deploy
```

## 📁 Project Structure

```
src/
├── app/              # Next.js app directory
│   ├── dashboard/    # Dashboard page
│   ├── tasks/        # Task management
│   ├── keys/         # API key management
│   └── layout.tsx    # Root layout
├── components/       # Reusable components
│   ├── ui/          # UI components
│   └── Layout.tsx    # Main layout
├── lib/             # Utilities and helpers
│   ├── auth.ts      # Authentication config
│   ├── colors.ts    # Color palette
│   └── api.ts       # API utilities
└── types/           # TypeScript types
```

## 🚀 Deployment

The app is configured for easy Vercel deployment:

1. Connect your GitHub repo to Vercel
2. Add environment variables
3. Deploy!

## 🎯 Features for OpenClaw Users

- Monitor active tasks and sub-agents
- Track API costs and performance
- Manage API keys securely
- Real-time status updates
- Beautiful, accessible interface

## 📄 License

Private project for Sultan Yahya