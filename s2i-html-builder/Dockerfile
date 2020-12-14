FROM registry.access.redhat.com/ubi8/ubi:8.2

# Apache HTTP Server image.
#
# Volumes:
#  * /var/www - Datastore for httpd
#  * /var/log/httpd24 - Storage for logs when $HTTPD_LOG_TO_VOLUME is set
# Environment:
#  * $HTTPD_LOG_TO_VOLUME (optional) - When set, httpd will log into /var/log/httpd24

ENV HTTPD_VERSION=2.4

ENV SUMMARY="Platform for running Apache httpd $HTTPD_VERSION or building httpd-based application" \
    DESCRIPTION="Apache httpd $HTTPD_VERSION available as container, is a powerful, efficient, \
and extensible web server. Apache supports a variety of features, many implemented as compiled modules \
which extend the core functionality. \
These can range from server-side programming language support to authentication schemes. \
Virtual hosting allows one Apache installation to serve many different Web sites."

LABEL summary="$SUMMARY" \
      description="$DESCRIPTION" \
      io.k8s.description="$DESCRIPTION" \
      io.k8s.display-name="Apache httpd $HTTPD_VERSION" \
      io.openshift.expose-services="8080:http,8443:https" \
      io.openshift.tags="builder,httpd,httpd-24" \
      name="rhel8/httpd-24" \
      version="1" \
      com.redhat.license_terms="https://www.redhat.com/en/about/red-hat-end-user-license-agreements#rhel" \
      com.redhat.component="httpd-24-container" \
      usage="s2i build https://github.com/sclorg/httpd-container.git --context-dir=examples/sample-test-app/ rhel8/httpd-24 sample-server" \
      maintainer="SoftwareCollections.org <sclorg@redhat.com>"

EXPOSE 8080
EXPOSE 8443

RUN yum -y module enable httpd:$HTTPD_VERSION && \
    INSTALL_PKGS="gettext hostname nss_wrapper bind-utils httpd mod_ssl mod_auth_mellon sscg" && \
    yum install -y --setopt=tsflags=nodocs $INSTALL_PKGS && \
    rpm -V $INSTALL_PKGS && \
    yum -y clean all --enablerepo='*'

ENV HTTPD_CONTAINER_SCRIPTS_PATH=/usr/share/container-scripts/httpd/ \
    HTTPD_APP_ROOT=${APP_ROOT} \
    HTTPD_CONFIGURATION_PATH=${APP_ROOT}/etc/httpd.d \
    HTTPD_MAIN_CONF_PATH=/etc/httpd/conf \
    HTTPD_MAIN_CONF_MODULES_D_PATH=/etc/httpd/conf.modules.d \
    HTTPD_MAIN_CONF_D_PATH=/etc/httpd/conf.d \
    HTTPD_TLS_CERT_PATH=/etc/httpd/tls \
    HTTPD_VAR_RUN=/var/run/httpd \
    HTTPD_DATA_PATH=/var/www \
    HTTPD_DATA_ORIG_PATH=/var/www \
    HTTPD_LOG_PATH=/var/log/httpd

COPY ./s2i/bin/* /usr/libexec/s2i/bin/
COPY ./root /

# Reset permissions of filesystem to default values
RUN chmod +x /usr/libexec/s2i/bin/* \
    && chown -R 1001:0 ${HTTPD_CONTAINER_SCRIPTS_PATH} ${HTTPD_APP_ROOT} ${HTTPD_CONFIGURATION_PATH} ${HTTPD_MAIN_CONF_PATH} ${HTTPD_MAIN_CONF_MODULES_D_PATH} ${HTTPD_MAIN_CONF_D_PATH} ${HTTPD_TLS_CERT_PATH} ${HTTPD_VAR_RUN} ${HTTPD_DATA_PATH} ${HTTPD_DATA_ORIG_PATH} ${HTTPD_LOG_PATH}

USER 1001

# Not using VOLUME statement since it's not working in OpenShift Online:
# https://github.com/sclorg/httpd-container/issues/30
# VOLUME ["${HTTPD_DATA_PATH}"]
# VOLUME ["${HTTPD_LOG_PATH}"]

CMD ["/usr/libexec/s2i/run"]