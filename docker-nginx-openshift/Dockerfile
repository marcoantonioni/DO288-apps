FROM docker.io/library/nginx
COPY ./html /usr/share/nginx/html
LABEL io.k8s.description="A basic Nginx Server" \
      io.k8s.display-name="Nginx Server" \
      io.openshift.expose-services="8080:http" \
      io.openshift.tags="nginx"
RUN sed -i 's/80;/8080;/g' /etc/nginx/conf.d/default.conf \
    && chmod 777 /etc/nginx/conf.d/default.conf \
    && touch /var/run/nginx.pid && chmod 777 /var/run/nginx.pid \
    && chmod 777 -R /var/log/nginx /var/cache/nginx
EXPOSE 8080
USER 1001
CMD ["/bin/sh", "-c", "exec nginx -g 'daemon off;'"]
