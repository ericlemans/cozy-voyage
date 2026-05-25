# --- Builder Stage ---
FROM node:22-alpine AS builder

WORKDIR /app

# Install all deps for build
COPY package*.json ./
RUN npm ci

# Copy everything and build Next.js
COPY . .
RUN rm -rf .next
RUN npm run build

# Prune dev deps after building
RUN npm prune --production

# --- Runner Stage ---
FROM node:23-alpine3.21 AS runner

WORKDIR /app
ENV NODE_ENV=production

# Copy runtime app code from builder
COPY --from=builder /app ./

# Open port for Next.js
EXPOSE 3011
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --spider http://localhost:3011/health || exit 1

CMD ["npm", "start"]