#!/bin/bash

# Vercel Deployment Script
# Usage: ./scripts/deploy_vercel.sh

echo "🚀 Deploying to Vercel..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm i -g vercel
fi

# Navigate to frontend directory
cd frontend || exit

# Check if logged in
if ! vercel whoami &> /dev/null; then
    echo "🔐 Please login to Vercel..."
    vercel login
fi

# Deploy to preview
echo "📦 Deploying to preview..."
vercel

# Ask for production deployment
read -p "Deploy to production? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🚀 Deploying to production..."
    vercel --prod
fi

echo "✅ Deployment complete!"

