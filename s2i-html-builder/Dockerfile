FROM registry.redhat.io/ubi8
LABEL description="This is a base image for httpd - Marco"
MAINTAINER Marco Antonioni <antonioni.marco@gmail.com>

ENV DOCROOT=/var/www/html \
    SRC=root \
    S2IBIN=/usr/libexec/s2i/bin \
    CFG=/etc/httpd/conf/httpd.conf \
    LOGS=/var/log/httpd \
    PORT=8080 \
    USER=0 \
    BASE_MSG="Hello from base image, if you see this message you are missing an index.html in your src folder."
    
COPY ./s2i/bin/* ${S2IBIN}/
COPY ./${SRC}/* ${DOCROOT}/

RUN yum install -y net-tools httpd \
    && yum clean all \
    && chgrp -R 0 ${LOGS} \
    && chmod -R 777 /run/httpd/ ${LOGS} ${CFG} \    
    && echo ${BASE_MSG} > ${DOCROOT}/index.html \
    && chown -R ${USER}:${USER} ${DOCROOT} \
    && chgrp -R 0 ${DOCROOT} \
    && chmod -R g=u ${DOCROOT} \
    && chmod +x ${S2IBIN}/assemble ${S2IBIN}/run

RUN sed -i 's/80/8080/g' ${CFG} \
    && cat ${CFG}

EXPOSE ${PORT}

USER ${USER}

ENV LogLevel "info"

CMD ["/usr/libexec/s2i/bin/run"]

# ENTRYPOINT ["/usr/sbin/httpd"]
# CMD ["-D", "FOREGROUND"]
