run node:

```
docker run -it \
                                   -p 9090:9090 \
                                   -p 8060:8060 \
                                   -p 18190:18190 \
                                   -p 18191:18191 \
                                   --rm \
                                   --name tron \
                                   trontools/quickstart

```
compile
```
tronbox compile
```

deploy

```
tronbox migrate
```
