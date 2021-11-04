FROM nginx:1.15-alpine

COPY ./dist/demoweb /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
