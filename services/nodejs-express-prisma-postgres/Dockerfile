FROM node:20.9.0-alpine3.18 as build

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npx prisma generate

RUN npm run build

FROM node:20.9.0-alpine3.18

WORKDIR /app

COPY package.json .

COPY  --from=build /app/.env ./.env

COPY --from=build /app/node_modules ./node_modules

COPY --from=build /app/dist ./dist

ENTRYPOINT ["npm", "run", "start"]


