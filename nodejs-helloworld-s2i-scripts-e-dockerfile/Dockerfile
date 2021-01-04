FROM openshift/nodejs:12-ubi8

ENV USER=1001 \
    PORT=8080 \
    SRC=/tmp/src
    
WORKDIR $APP_ROOT

#======= BEGIN customization

# imposta utenza root
USER 0

# copia sorgenti da folder repo git in folder definito da immagine builder 
RUN mkdir -p $SRC 
COPY src/* $SRC

RUN ls -al $SRC

# esegue script assemblaggio presente in immagine builder
RUN $STI_SCRIPTS_PATH/assemble

RUN ls -al $HOME && ls -al $APP_ROOT && ls -al $APP_ROOT/src && echo "======> runfolder: "$(pwd) && echo "======> APP_ROOT: "$APP_ROOT && echo "======> HOME: "$HOME

# espone porta
EXPOSE $PORT

# imposta utenza esecuzione applicazione
USER $USER

#======= END customization

CMD $STI_SCRIPTS_PATH/run
