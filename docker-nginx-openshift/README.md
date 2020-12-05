# immagine nginx per Openshift

```bash
oc new-project test-image-nginx-openshift

oc new-app --name nginx-image --context-dir=docker-nginx-openshift --strategy docker https://github.com/marcoantonioni/DO288-apps

oc expose service nginx-image

oc get route nginx-image

curl nginx-image-test-image-nginx-openshift.apps.qb-testpaks.cp.fyre.ibm.com
curl nginx-image-test-image-nginx-openshift.apps.qb-testpaks.cp.fyre.ibm.com/info.html
```
