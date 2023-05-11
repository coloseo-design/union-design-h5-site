# FROM 10.172.49.246/design/nginx-vts:v1.0
FROM 10.124.152.135/tianticommon/nginx:1.17.10
COPY dist /usr/share/nginx/html/union-design-h5
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
