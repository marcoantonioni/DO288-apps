# il nome NS non serve perchè esegue prima ricerca in progetto locale
FROM the-builder:v1

RUN echo -e "\n\n****** copy files in /temp/src ******\n\n"
COPY upload/src/* /tmp/src/
RUN ls -al /tmp/src

# MISMATCH immagine build
USER 0
RUN mkdir -p /tmp/src/upload/src/
COPY upload/src/* /tmp/src/upload/src/
RUN chown -R 1001:0 /tmp/src/
RUN ls -al /tmp/src/upload/src/
USER 1001

RUN echo -e "\n\n****** running assemble from Dockerfile in s2i-nodejs-application ******\n\n"

RUN /usr/libexec/s2i/bin/assemble

CMD ["node"]
