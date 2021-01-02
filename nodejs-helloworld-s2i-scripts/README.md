# Esempio di utilizzo scripts s2i in assenza di un Dockerfile di applicazione

Per realizzare una customizzazione della fase di assemblaggio della applicazione (script 'assemble') è possibile utilizzare i folder

- src
- .s2i/bin

Il contenuto del folder 'src' verrà copiato automaticamente all'interno dell'imagine in '/tmp/src'
