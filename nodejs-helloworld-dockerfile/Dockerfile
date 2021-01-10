#----------------------------------------------------------------------------------------------------
# Modificare contenuti di questo Dockerfile con vari dockerfile presenti nel folder 'dockerfiles'
#----------------------------------------------------------------------------------------------------

FROM xyzam-nodejs-builder:v1

# utenza non root per sicurezza Openshift, folder sorgenti '/tmp/src' come da specifiche S2I
ENV USER=1001 \
    PORT=8080 \
    SRC=/tmp/src
    
WORKDIR $HOME

USER 0
RUN mkdir -p $SRC/upload/src
COPY src/* $SRC/upload/src/
RUN chown -R $USER:0 $SRC && ls -al $SRC/upload/src/
USER $USER

RUN $STI_SCRIPTS_PATH/assemble

EXPOSE $PORT

CMD $STI_SCRIPTS_PATH/run
