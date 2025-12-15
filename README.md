# Multi-Region Web App (Vercel + Next.js)

This project demonstrates a **true multi-region web architecture** using:
- Vercel Edge Middleware for geo-based routing
- Region-pinned serverless functions (US + EU)
- Region-aware APIs
- Explicit architecture documentation

## How It Works
1. User request hits Vercel Edge
2. Middleware determines closest region
3. API executes in the appropriate region
4. Response headers expose execution region

## How To Test
- Deploy to Vercel (production)
- Call /api/hello
- Inspect headers:
  - x-app-region
  - x-vercel-region
- Change VPN location and retry

This repo is suitable for production demos and system design interviews.