# Use the httpd-parent image as base
FROM quay.io/redhattraining/httpd-parent

# modifiche aggiunte successivamente per esecuzione non-root
MAINTAINER Marco Antonioni <antonioni.marco@gmail.com>

ENV DOCROOT=/var/www/html \
    SRC=src \
    CFG=/etc/httpd/conf/httpd.conf \
    LOGS=/var/log/httpd \
    PORT=8080 \
    USER=1001 \
    BASE_MSG="Hello from test httpd."
    

RUN chgrp -R 0 ${LOGS} \
    && chmod -R 777 /run/httpd/ ${LOGS} ${CFG} \
    && sed -i 's/Listen [0-9]*/Listen ${PORT}/g' ${CFG} \
    && echo ${BASE_MSG} > ${DOCROOT}/index.html

EXPOSE ${PORT}

USER ${USER}
