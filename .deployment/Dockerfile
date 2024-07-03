ARG BUN_VERSION=1.1.17
ARG VERBOSE=true

FROM oven/bun:${BUN_VERSION} AS base

FROM base AS build
WORKDIR /app

COPY . .
RUN bun install --frozen-lockfile

# [optional] tests & build
ENV NODE_ENV=production
RUN bun run build

FROM base AS dependencies
WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile --production

# copy production dependencies and source code into final image
FROM oven/bun:${BUN_VERSION}-distroless AS release
WORKDIR /app

COPY --from=build /app/build ./
COPY --from=dependencies /app/node_modules ./node_modules

ENV PORT=3000
ENV LOG_LEVEL=info
ENV ORIGIN=https://minikraken.com

# run the app
USER nobody
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "/app/index.js" ]
