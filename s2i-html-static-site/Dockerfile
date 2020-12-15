# use IS named 'html-static-builder' from NS 's2i-html-builder'
FROM s2i-html-builder/html-static-builder

# ???
# USER 0

# the builder image wants sources in /tmp/src/
RUN echo -e "\n\n***********\n+++++ STEP Dockerfile static site: Copying static resources (cp -Rf ./root/* /tmp/src/)\n***********\n\n" \
    && mkdir -p /tmp/src 

# copy static site files in /tmp/src/
COPY ./root/* /tmp/src/

RUN echo -e "\n\n***********\n+++++ STEP Dockerfile static site: Executing 'assemble' script from builder image (/usr/libexec/s2i/bin/assemble)\n***********\n\n" \
    && /usr/libexec/s2i/bin/assemble
