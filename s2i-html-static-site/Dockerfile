FROM s2i-html-builder/html-static-builder

COPY ./root/* /tmp/src/

RUN echo -e "\n\n Running static site build\n\n" \
    && /usr/libexec/s2i/bin/assemble
