FROM registry.access.redhat.com/ubi8/ubi:8.0

LABEL io.k8s.description="My custom Builder" \
    io.k8s.display-name="My Sleeper" \
    io.openshift.tags="builder,sleeper" \
    io.openshift.s2i.scripts-url="image:///usr/libexec/s2i"

COPY ./.s2i/bin/ /usr/libexec/s2i
