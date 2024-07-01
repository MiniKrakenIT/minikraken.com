ARG BUN_VERSION=1.1.17
ARG NODE_VERSION=22.3.0
ARG VERBOSE=true

# copy node_modules from temp directory
# then copy all (non-ignored) project files into the image
FROM node:${NODE_VERSION}-alpine AS build
WORKDIR /usr/src/app

COPY . .
RUN npm install -g pnpm
RUN pnpm install

# [optional] tests & build
ENV NODE_ENV=production
RUN npm run build

FROM oven/bun:${BUN_VERSION}-alpine AS dependencies
WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile --production

# copy production dependencies and source code into final image
FROM oven/bun:${BUN_VERSION}-distroless AS release
WORKDIR /app

COPY --from=build /usr/src/app/build .
COPY --from=dependencies /app/node_modules ./node_modules

ENV PORT=3000
ENV LOG_LEVEL=info
ENV ORIGIN=https://minikraken.com

# run the app
USER nobody
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "./index.js" ]
