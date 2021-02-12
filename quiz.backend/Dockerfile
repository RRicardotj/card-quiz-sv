FROM node:12.14-alpine as base
EXPOSE 8000
ENV NODE_ENV=production

WORKDIR /node
COPY package.json package-lock*.json* yarn.lock* ./

RUN npm install && npm cache clean --force

# stage 2 (development)
# We don't COPY here because will bind-mount with docker-compose
FROM base as dev
ENV NODE_ENV=development
ENV PATH=/node/node_modules/.bin:$PATH
WORKDIR /node
RUN npm install --only=development
RUN apk add --no-cache --upgrade bash
WORKDIR /node/app
CMD ["node", "src/index.js"]

#stage 3 (production)
FROM base as prod
WORKDIR /node/app
COPY . .
CMD ["node", "src/index.js"]
