ARG BUN_VERSION=1.1.18

FROM oven/bun:${BUN_VERSION} AS base

FROM base AS dependencies
WORKDIR /app

COPY ./build/package.json .
RUN bun install --production

# copy production dependencies and source code into final image
FROM oven/bun:${BUN_VERSION}-distroless AS release
WORKDIR /app

COPY ./build .
COPY --from=dependencies /app/node_modules ./node_modules

ENV PORT=3000
ENV LOG_LEVEL=info
ENV ORIGIN=https://minikraken.com

# run the app
USER nobody
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "./index.js" ]
