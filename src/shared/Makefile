obj-y += libshared.mod

obj-libshared-y := \
    sol-modules.o \
    sol-monitors.o \
    sol-util.o \
    sol-random.o

obj-libshared-$(USE_FLOW) += \
    sol-fbp-graph.o \
    sol-fbp-internal-scanner.o \
    sol-fbp-parser.o

ifeq (y,$(LOG))
obj-libshared-$(USE_FLOW) += \
    sol-fbp-internal-log.o
endif

obj-libshared-$(PLATFORM_LINUX) += \
    sol-conffile.o \
    sol-file-reader.o \
    sol-lib-loader.o \
    sol-util-impl-linux.o

obj-libshared-$(FEATURE_FILESYSTEM) += \
    sol-util-file.o

obj-libshared-$(PLATFORM_RIOTOS) += \
    sol-util-impl-riot.o

obj-libshared-$(PLATFORM_CONTIKI) += \
    sol-util-impl-contiki.o

obj-libshared-$(PLATFORM_ZEPHYR) += \
    sol-util-impl-zephyr.o

obj-libshared-y-extra-cflags += -fvisibility=default

obj-libshared-y-extra-ldflags += -lm

headers-y += \
    include/sol-reentrant.h \
    include/sol-util.h

headers-$(FEATURE_FILESYSTEM) += \
    include/sol-util-file.h \
    include/sol-file-reader.h
