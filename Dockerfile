FROM node:18-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

COPY . /apps
WORKDIR /apps

FROM base AS prod-deps
RUN pnpm install --frozen-lockfile

FROM base AS build
RUN pnpm install && pnpm run build

FROM base
WORKDIR /apps
ENV NODE_ENV production

COPY --from=prod-deps /apps/node_modules /apps/node_modules
COPY --from=build /apps/.next /apps/.next

EXPOSE 3000
CMD [ "pnpm", "start" ]