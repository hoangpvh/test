# Install dependencies only when needed
FROM node:20.10.0-alpine AS deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:20.10.0-alpine AS builder
WORKDIR /app
COPY . .
RUN yarn build

# Production image, copy all the files and run next
FROM node:20.10.0-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/next.config.ts ./next.config.ts
COPY --from=builder /app/src/public ./src/public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3001

CMD ["yarn", "start", "-p", "3001"]
