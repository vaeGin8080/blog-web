FROM node:12.16.1
WORKDIR /app
COPY . /app/
EXPOSE 80
# RUN npm config set registry registry.npm.taobao.org \
#     && npm install \
#     && npm run build \
#     && cp -r dist/* /root/web/ \
#     && rm -rf /app
RUN mkdir -p a.html \  && cp -r a.html /root/web/ \
    && rm -rf /app