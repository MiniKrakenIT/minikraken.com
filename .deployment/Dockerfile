ARG BUN_VERSION=1.0.29
ARG NODE_VERSION=21.6.1
ARG VERBOSE=true

# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:${BUN_VERSION} as base
WORKDIR /usr/src/app

# install dependencies into temp directory
# this will cache them and speed up future builds
FROM base AS install
RUN mkdir -p /dependencies/dev
COPY package.json bun.lockb /dependencies/dev/
RUN cd /dependencies/dev && bun install --frozen-lockfile

# install with --production (exclude devDependencies)
RUN mkdir -p /dependencies/prod
COPY package.json bun.lockb /dependencies/prod/
RUN cd /dependencies/prod && bun install --frozen-lockfile --production

# copy node_modules from temp directory
# then copy all (non-ignored) project files into the image
FROM node:${NODE_VERSION}-alpine AS build
WORKDIR /usr/src/app

COPY . .
COPY --from=install /dependencies/dev/node_modules node_modules

# [optional] tests & build
ENV NODE_ENV=production
RUN npm run build

# copy production dependencies and source code into final image
FROM oven/bun:${BUN_VERSION}-distroless AS release
WORKDIR /app

COPY --from=build /usr/src/app/build .
COPY --from=install /dependencies/prod/node_modules ./node_modules
COPY --from=install /dependencies/prod/package.json .

ENV PORT=3000
ENV LOG_LEVEL=info
ENV ORIGIN=https://minikraken.com

# run the app
USER nobody
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "./index.js" ]
