FROM node:19.4.0
WORKDIR /app

# Add pnpm to match Next.js 13
RUN npm install -g pnpm