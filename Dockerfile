# Image Size: 221MB
# Linux + Node + Source + Project dependencies
FROM node:14.17.1-alpine3.13 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Linux + Node + Source + Project dependencies + build assets
FROM base AS build
ENV NODE_ENV=production
WORKDIR /build
COPY --from=base /app ./
RUN npm run build

# We keep some artifacts from build
FROM node:current-alpine AS production
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build /build/package*.json ./
COPY --from=build /build/.next ./.next
COPY --from=build /build/public ./public
RUN npm install next

EXPOSE 3000
CMD npm run start
