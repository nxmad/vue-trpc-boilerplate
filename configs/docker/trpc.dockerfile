FROM node as base
EXPOSE 3000
RUN corepack disable yarn \
  && corepack disable npm \
  && corepack prepare --activate pnpm@8.15 \
  && corepack enable

FROM base as dev
CMD pnpm dev
