FROM registry.redhat.io/ubi8
LABEL description="This is a base image for httpd - Marco"
MAINTAINER Marco Antonioni <antonioni.marco@gmail.com>

ENV DOCROOT=/var/www/html \
    SRC=root \
    CFG=/etc/httpd/conf/httpd.conf \
    LOGS=/var/log/httpd \
    PORT=8080 \
    USER=1001 \
    BASE_MSG="Hello from base image, if you see this message you are missing an index.html in your src folder."
    
COPY ./s2i/bin/* /usr/libexec/s2i/bin/
COPY ./${SRC}/* ${DOCROOT}/

RUN yum install -y httpd \
    && yum clean all \
    && chgrp -R 0 ${LOGS} \
    && chmod -R 777 /run/httpd/ ${LOGS} ${CFG} \
    && sed -i 's/Listen [0-9]*/Listen ${PORT}/g' ${CFG} \
    && echo ${BASE_MSG} > ${DOCROOT}/index.html \
    && chown -R ${USER}:${USER} ${DOCROOT} \
    && chgrp -R 0 ${DOCROOT} \
    && chmod -R g=u ${DOCROOT} \
    && chmod +x /usr/libexec/s2i/assemble /usr/libexec/s2i/run

EXPOSE ${PORT}

USER ${USER}

ENV LogLevel "info"

CMD ["/usr/libexec/s2i/run"]

# ENTRYPOINT ["/usr/sbin/httpd"]
# CMD ["-D", "FOREGROUND"]
