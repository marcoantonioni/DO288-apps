# il nome NS non serve perchè esegue prima ricerca in progetto locale
FROM the-builder:v1

RUN echo -e "\n\n****** copy files in /temp/src ******\n\n"
COPY upload/src/* /tmp/src/
# MISMATCH immagine build
COPY upload/src/* /tmp/src/upload/src/
RUN ls -al /tmp/src

RUN ls -al /usr/libexec/s2i/bin

RUN echo -e "\n\n****** running assemble from Dockerfile in s2i-nodejs-application ******\n\n"

RUN /usr/libexec/s2i/bin/assemble

RUN /usr/libexec/s2i/bin/run
