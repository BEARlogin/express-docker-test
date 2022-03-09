FROM node:16
WORKDIR /app
COPY package.json .
RUN yarn
COPY . .
RUN ls

EXPOSE 3000
CMD yarn start

