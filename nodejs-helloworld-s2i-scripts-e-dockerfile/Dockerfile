FROM openshift/nodejs:12-ubi8

ENV USER=1001 \
    PORT=8080 \
    SRC=/tmp/src
    
WORKDIR $APP_ROOT

## BEGIN customization

COPY src $SRC
RUN chgrp -R 0 $SRC

RUN pwd && ls -al . && ls -al $SRC && ls -al $STI_SCRIPTS_PATH

## END customization

EXPOSE $PORT
USER $USER

RUN $STI_SCRIPTS_PATH/assemble

CMD $STI_SCRIPTS_PATH/run
