FROM node:20-alpine AS builder

WORKDIR /app

COPY yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

FROM node:20-alpine AS runner

WORKDIR /app

RUN yarn install --production

COPY --from=builder /app/.next .next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

ENV NODE_ENV=production

CMD ["yarn", "start"]
