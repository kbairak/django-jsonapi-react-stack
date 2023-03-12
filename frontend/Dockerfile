FROM node:18.15.0

COPY ./public /app/public
COPY ./src /app/src
COPY ./index.html /app/index.html
COPY ./package.json /app/package.json
COPY ./vite.config.js /app/vite.config.js

WORKDIR /app
RUN --mount=type=cache,target=/root/.npm npm install

CMD ./node_modules/.bin/vite --host
