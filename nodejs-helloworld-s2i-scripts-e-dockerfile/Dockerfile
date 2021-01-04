FROM openshift/nodejs:12-ubi8

ENV USER=1001
WORKDIR $APP_ROOT

## BEGIN customization

COPY src .

RUN pwd && ls -al . && ls -al $STI_SCRIPTS_PATH

## END customization

RUN $STI_SCRIPTS_PATH/assemble

CMD $STI_SCRIPTS_PATH/run
