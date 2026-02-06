#!/bin/bash
# Deploy Sultan PM to Vercel

echo "🚀 Deploying Sultan PM to Vercel..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "Installing Vercel CLI..."
    npm i -g vercel
fi

# Login to Vercel if needed
echo "🔐 Ensure you're logged in to Vercel"
vercel login

# Deploy
echo "📦 Building and deploying..."
vercel --prod --yes

echo "✅ Deployment complete!"
echo "🌐 Your app will be available at: https://sultan-pm.vercel.app"
echo "📋 Remember to:"
echo "1. Set up environment variables in Vercel dashboard"
echo "2. Configure your domain if needed"
echo "3. Test the deployed app"
