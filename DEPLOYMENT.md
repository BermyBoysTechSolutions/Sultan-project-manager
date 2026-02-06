# Sultan PM - Deployment Instructions

## Local Development
```bash
cd /home/sultan-yahya/clawd/sultan-project-manager
npm install
cp .env.local.example .env.local
# Edit .env.local with your credentials
npm run dev
```

## Environment Variables
Create `.env.local` with:
```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
ADMIN_USERNAME=your-username
ADMIN_PASSWORD=your-password
```

## Deploy to Vercel
```bash
npm i -g vercel
vercel --prod
```

## Features
- ✅ Dashboard with task/agent monitoring
- ✅ API key management
- ✅ Bermy Banana inspired UI (yellow/orange theme)
- ✅ Single user authentication
- ✅ Responsive design
- ✅ Clean, modern interface

## Next Steps
1. Set up environment variables
2. Configure authentication
3. Connect to your OpenClaw instance
4. Deploy to Vercel
5. Access from anywhere!
