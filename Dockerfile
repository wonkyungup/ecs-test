FROM 778906112548.dkr.ecr.us-east-1.amazonaws.com/node:latest

EXPOSE 3000

RUN mkdir -p /var/app
COPY . /var/app

WORKDIR /var/app
RUN npm install
RUN npm run build

CMD ["npm","run","start"]
