FROM node:23-alpine3.21 AS builder
WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm i

# Development defaults, set from Environment-specific vars in GitHub Actions
#ARG NEXT_PUBLIC_SERVER_API=https://
#ARG NEXT_PUBLIC_WEBSOCKET=wss://

# Expose the build args as environments for client-side component building
#ENV NEXT_PUBLIC_SERVER_API=$NEXT_PUBLIC_SERVER_API
#ENV NEXT_PUBLIC_WEBSOCKET=$NEXT_PUBLIC_WEBSOCKET

# Copy all files and build the Next.js app
COPY . .
RUN npm run build

FROM node:23-alpine3.21 AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy production artifacts from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./

# Install only production dependencies
RUN npm ci --only=production

EXPOSE 3011
CMD ["npm", "start"]