# Use the httpd-parent image as base
FROM quay.io/redhattraining/httpd-parent

EXPOSE 8080
ENV LogLevel "info"
RUN sed -i 's/Listen [0-9]*/Listen 8080/g' /etc/httpd/conf/httpd.conf
RUN chmod 777 -R /var/log/httpd/
