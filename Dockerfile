# --- Builder Stage ---
FROM node:23-alpine3.21 AS builder

WORKDIR /app

# Install all deps for build
COPY package*.json ./
RUN npm ci

# Copy everything and build Next.js
COPY . .
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

CMD ["npm", "start"]