FROM nginx:stable-alpine

LABEL maintainer="memclutter@gmail.com"

ADD nginx.conf /etc/nginx/nginx.conf

RUN mkdir -p /var/www/html/static

VOLUME "/var/www/html/static"
