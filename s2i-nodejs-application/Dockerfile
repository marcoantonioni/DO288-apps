FROM s2i-nodejs-builder/s2i-nodejs-builder

COPY upload/src/* /tmp/src/

RUN echo -e "\n\n****** running assemble from Dockerfile in s2i-nodejs-application ******\n\n"
RUN ls -al /tmp/src

RUN /usr/libexec/s2i/bin/assemble
