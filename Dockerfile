ARG REGISTRY=docker.io/library
ARG NPM_REGISTRY=https://registry.npmjs.org

FROM ${REGISTRY}/node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm ci \
      --registry=${NPM_REGISTRY} \
      --fetch-retries=8 \
      --fetch-retry-mintimeout=20000 \
      --fetch-retry-maxtimeout=180000 \
      --fetch-timeout=600000

FROM ${REGISTRY}/node:22-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM ${REGISTRY}/nginx:1.29-alpine AS runtime
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://127.0.0.1/ || exit 1
CMD ["nginx", "-g", "daemon off;"]
