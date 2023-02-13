FROM node:14-bullseye-slim

EXPOSE 3000

RUN mkdir -p /var/app
COPY . /var/app

WORKDIR /var/app
RUN npm install
RUN npm run build

CMD ["npm","run","start"]
