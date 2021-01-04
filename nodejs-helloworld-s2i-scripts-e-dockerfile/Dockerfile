FROM openshift/nodejs:12-ubi8

ENV USER=1001 \
    PORT=8080 \
    SRC=/tmp/src
    
WORKDIR $APP_ROOT

## BEGIN customization

# imposta utenza root
USER 0
RUN echo "sono in esecuzione come utente: "$(whoami)

# copia sorgenti da folder repo git in folder definito da immagine builder 
COPY src $SRC

# assegna ownership gruppo root
# test RUN chgrp -R 0 $SRC

# test presenza files
RUN pwd && ls -al . && ls -al $SRC && ls -al $STI_SCRIPTS_PATH

# esegue script assemblaggio presente in immagine builder
RUN $STI_SCRIPTS_PATH/assemble

# espone porta
EXPOSE $PORT

# imposta utenza esecuzione applicazione
USER $USER

## END customization

CMD $STI_SCRIPTS_PATH/run
