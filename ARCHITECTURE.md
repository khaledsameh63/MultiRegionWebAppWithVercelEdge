# Multi-Region Architecture Overview

## Regions
- US: iad1 (primary)
- EU: fra1 (secondary)

## Routing
- Edge Middleware detects user location
- Requests are routed to nearest region

## Compute
- Serverless functions deployed in multiple regions
- Explicit region pinning via vercel.json

## Data Strategy
- Writes go to US primary database
- Reads served from nearest replica

## Failover
- Automatic edge retry
- Application-level fallback logic