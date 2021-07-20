FROM node:12.16.1
RUN apt-get update && apt-get install -y nginx || apt-get install -y nginx
WORKDIR /app
COPY . /app/
EXPOSE 80
RUN npm config set registry registry.npm.taobao.org \
    && npm install \
    && npm run build \
    && cp -r dist/* /var/www/html \
    && rm -rf /app
CMD ["nginx","-g","daemon off;"]