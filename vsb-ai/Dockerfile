FROM node:14.15.4-alpine3.12

ARG USER_ID=10000
RUN adduser \
    --disabled-password \
    --gecos "" \
    --uid ${USER_ID} \
    www-data

WORKDIR /home/www-data

COPY package-lock.json .
COPY package.json .
COPY build_docker.sh .
COPY src src
COPY public public
RUN chmod +x build_docker.sh

USER www-data
RUN npm ci --silent

ENTRYPOINT ["./build_docker.sh"]