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
ENV PORT 3011
ENV HOSTNAME "0.0.0.0"
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD [ "wget", "-q0", "http://localhost:3011/health" ]


CMD ["npm", "start"]