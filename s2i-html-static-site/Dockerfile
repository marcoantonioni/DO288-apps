FROM s2i-html-builder/html-static-builder

USER 0
RUN echo -e "\n\n Copying static resources\n\n" \
    && ls -al ./root/ \
    && ls -al /tmp/src/

COPY ./root/* /tmp/src/

RUN echo -e "\n\n Running static site assembling\n\n" \
    && /usr/libexec/s2i/bin/assemble
