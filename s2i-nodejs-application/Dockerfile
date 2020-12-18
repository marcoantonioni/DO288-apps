FROM s2i-nodejs-builder/s2i-nodejs-builder

RUN echo -e "\n\n****** copy files in /temp/src ******\n\n"
COPY upload/src/* /tmp/src/
RUN ls -al /tmp/src

RUN echo -e "\n\n****** running assemble from Dockerfile in s2i-nodejs-application ******\n\n"

RUN /usr/libexec/s2i/bin/assemble

RUN /usr/libexec/s2i/bin/run
