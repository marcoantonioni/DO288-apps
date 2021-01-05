FROM openshift/php:7.3-ubi8

# utenza non root per sicurezza Openshift, folder sorgenti '/tmp/src' come da specifiche S2I
ENV USER=1001 \
    PORT=8080 \
    SRC=/tmp/src
    
WORKDIR $HOME

#======= BEGIN customization

# imposta utenza root
USER 0

# copia sorgenti da folder repo git in folder definito da immagine builder 

## debug visivo
# RUN echo -e "\n\n======> lista files in /tmp" && ls -al /tmp

## opzione 1 (copia del folder 'src' e suoi contenuti nel folder '/tmp', il folder target $SRC ['/tmp/src'] non esiste prima della copia)
COPY src $SRC

## opzione 2 (crea il folder $SRC ['/tmp/src'] manualmente e poi copia il contenuto del folder 'src' all'interno di $SRC)
# RUN mkdir -p $SRC 
# COPY src/* $SRC

## debug visivo
# RUN ls -al $SRC

# esegue script assemblaggio presente in immagine builder
RUN $STI_SCRIPTS_PATH/assemble

## debug visivo
# RUN echo -e "\n\n======> runfolder (pwd): "$(pwd) && echo "======> folder APP_ROOT: "$APP_ROOT && echo "======> folder HOME: "$HOME
# RUN echo -e "\n\n======> lista files in "$HOME && ls -al $HOME && echo "======> lista files in "$APP_ROOT && ls -al $APP_ROOT && echo "======> lista files in "$APP_ROOT"/src" && ls -al $APP_ROOT/src 

# espone porta
EXPOSE $PORT

# imposta utenza esecuzione applicazione
USER $USER

#======= END customization

CMD $STI_SCRIPTS_PATH/run
