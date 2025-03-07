/**
 * This file was auto-generated by @ui/openapi.
 * Do not make direct changes to the file.
 */

export const actions = [
    'stress-cpu',
    'stress-mem',
    'disk-read-payload',
    'disk-write-payload',
    'disk-fill',
    'network-corrupt',
    'network-duplicate',
    'network-loss',
    'network-delay',
    'network-partition',
    'network-dns',
    'network-bandwidth',
    'process',
    'jvm-exception',
    'jvm-gc',
    'jvm-latency',
    'jvm-return',
    'jvm-stress',
    'jvm-rule-data',
    'clock',
  ],
  data = [
    {
      field: 'label',
      label: 'address',
      value: [],
      helperText: 'Optional. DEPRECATED: Use Selector instead. Only one of Address and Selector could be specified.',
    },
    {
      field: 'ref',
      label: 'clock',
      children: [
        {
          field: 'text',
          label: 'clock-ids-slice',
          value: '',
          helperText:
            'the identifier of the particular clock on which to act. More clock description in linux kernel can be found in man page of clock_getres, clock_gettime, clock_settime. Muti clock ids should be split with ","',
        },
        {
          field: 'number',
          label: 'pid',
          value: 0,
          helperText: 'the pid of target program.',
        },
        {
          field: 'text',
          label: 'time-offset',
          value: '',
          helperText: 'specifies the length of time offset.',
        },
      ],
      when: "action=='clock'",
    },
    {
      field: 'ref',
      label: 'disk-fill',
      children: [
        {
          field: 'select',
          label: 'fill-by-fallocate',
          value: false,
          items: [true, false],
          helperText: 'fill disk by fallocate',
        },
        {
          field: 'text',
          label: 'path',
          value: '',
          helperText:
            'specifies the location to fill data in. if path not provided, payload will read/write from/into a temp file, temp file will be deleted after writing',
        },
        {
          field: 'text',
          label: 'size',
          value: '',
          helperText:
            'specifies how many units of data will write into the file path. support unit: c=1, w=2, b=512, kB=1000, K=1024, MB=1000*1000, M=1024*1024, GB=1000*1000*1000, G=1024*1024*1024 BYTES. example : 1M | 512kB',
        },
      ],
      when: "action=='disk-fill'",
    },
    {
      field: 'ref',
      label: 'disk-read-payload',
      children: [
        {
          field: 'text',
          label: 'path',
          value: '',
          helperText:
            'specifies the location to fill data in. if path not provided, payload will read/write from/into a temp file, temp file will be deleted after writing',
        },
        {
          field: 'number',
          label: 'payload-process-num',
          value: 0,
          helperText: 'specifies the number of process work on writing, default 1, only 1-255 is valid value',
        },
        {
          field: 'text',
          label: 'size',
          value: '',
          helperText:
            'specifies how many units of data will write into the file path. support unit: c=1, w=2, b=512, kB=1000, K=1024, MB=1000*1000, M=1024*1024, GB=1000*1000*1000, G=1024*1024*1024 BYTES. example : 1M | 512kB',
        },
      ],
      when: "action=='disk-read-payload'",
    },
    {
      field: 'ref',
      label: 'disk-write-payload',
      children: [
        {
          field: 'text',
          label: 'path',
          value: '',
          helperText:
            'specifies the location to fill data in. if path not provided, payload will read/write from/into a temp file, temp file will be deleted after writing',
        },
        {
          field: 'number',
          label: 'payload-process-num',
          value: 0,
          helperText: 'specifies the number of process work on writing, default 1, only 1-255 is valid value',
        },
        {
          field: 'text',
          label: 'size',
          value: '',
          helperText:
            'specifies how many units of data will write into the file path. support unit: c=1, w=2, b=512, kB=1000, K=1024, MB=1000*1000, M=1024*1024, GB=1000*1000*1000, G=1024*1024*1024 BYTES. example : 1M | 512kB',
        },
      ],
      when: "action=='disk-write-payload'",
    },
    {
      field: 'ref',
      label: 'jvm-exception',
      children: [
        {
          field: 'text',
          label: 'class',
          value: '',
          helperText: 'Optional.  Java class',
        },
        {
          field: 'text',
          label: 'exception',
          value: '',
          helperText: 'the exception which needs to throw for action `exception`',
        },
        {
          field: 'text',
          label: 'method',
          value: '',
          helperText: 'Optional.  the method in Java class',
        },
        {
          field: 'number',
          label: 'pid',
          value: 0,
          helperText: 'the pid of Java process which needs to attach',
        },
        {
          field: 'number',
          label: 'port',
          value: 0,
          helperText: 'Optional.  the port of agent server, default 9277',
        },
      ],
      when: "action=='jvm-exception'",
    },
    {
      field: 'ref',
      label: 'jvm-gc',
      children: [
        {
          field: 'number',
          label: 'pid',
          value: 0,
          helperText: 'the pid of Java process which needs to attach',
        },
        {
          field: 'number',
          label: 'port',
          value: 0,
          helperText: 'Optional.  the port of agent server, default 9277',
        },
      ],
      when: "action=='jvm-gc'",
    },
    {
      field: 'ref',
      label: 'jvm-latency',
      children: [
        {
          field: 'text',
          label: 'class',
          value: '',
          helperText: 'Optional.  Java class',
        },
        {
          field: 'number',
          label: 'latency',
          value: 0,
          helperText: "the latency duration for action 'latency', unit ms",
        },
        {
          field: 'text',
          label: 'method',
          value: '',
          helperText: 'Optional.  the method in Java class',
        },
        {
          field: 'number',
          label: 'pid',
          value: 0,
          helperText: 'the pid of Java process which needs to attach',
        },
        {
          field: 'number',
          label: 'port',
          value: 0,
          helperText: 'Optional.  the port of agent server, default 9277',
        },
      ],
      when: "action=='jvm-latency'",
    },
    {
      field: 'ref',
      label: 'jvm-return',
      children: [
        {
          field: 'text',
          label: 'class',
          value: '',
          helperText: 'Optional.  Java class',
        },
        {
          field: 'text',
          label: 'method',
          value: '',
          helperText: 'Optional.  the method in Java class',
        },
        {
          field: 'number',
          label: 'pid',
          value: 0,
          helperText: 'the pid of Java process which needs to attach',
        },
        {
          field: 'number',
          label: 'port',
          value: 0,
          helperText: 'Optional.  the port of agent server, default 9277',
        },
        {
          field: 'text',
          label: 'value',
          value: '',
          helperText: "the return value for action 'return'",
        },
      ],
      when: "action=='jvm-return'",
    },
    {
      field: 'ref',
      label: 'jvm-rule-data',
      children: [
        {
          field: 'number',
          label: 'pid',
          value: 0,
          helperText: 'the pid of Java process which needs to attach',
        },
        {
          field: 'number',
          label: 'port',
          value: 0,
          helperText: 'Optional.  the port of agent server, default 9277',
        },
        {
          field: 'text',
          label: 'rule-data',
          value: '',
          helperText: "RuleData used to save the rule file's data, will use it when recover",
        },
      ],
      when: "action=='jvm-rule-data'",
    },
    {
      field: 'ref',
      label: 'jvm-stress',
      children: [
        {
          field: 'number',
          label: 'cpu-count',
          value: 0,
          helperText: 'the CPU core number need to use, only set it when action is stress',
        },
        {
          field: 'text',
          label: 'mem-type',
          value: '',
          helperText:
            "the memory type need to locate, only set it when action is stress, the value can be 'stack' or 'heap'",
        },
        {
          field: 'number',
          label: 'pid',
          value: 0,
          helperText: 'the pid of Java process which needs to attach',
        },
        {
          field: 'number',
          label: 'port',
          value: 0,
          helperText: 'Optional.  the port of agent server, default 9277',
        },
      ],
      when: "action=='jvm-stress'",
    },
    {
      field: 'ref',
      label: 'network-bandwidth',
      children: [
        {
          field: 'number',
          label: 'buffer',
          value: 0,
          helperText: '+kubebuilder:validation:Minimum=1',
        },
        {
          field: 'text',
          label: 'device',
          value: '',
          helperText: '',
        },
        {
          field: 'text',
          label: 'hostname',
          value: '',
          helperText: '',
        },
        {
          field: 'text',
          label: 'ip-address',
          value: '',
          helperText: '',
        },
        {
          field: 'number',
          label: 'limit',
          value: 0,
          helperText: '+kubebuilder:validation:Minimum=1',
        },
        {
          field: 'number',
          label: 'minburst',
          value: 0,
          helperText: '',
        },
        {
          field: 'number',
          label: 'peakrate',
          value: 0,
          helperText: '',
        },
        {
          field: 'text',
          label: 'rate',
          value: '',
          helperText: '',
        },
      ],
      when: "action=='network-bandwidth'",
    },
    {
      field: 'ref',
      label: 'network-corrupt',
      children: [
        {
          field: 'text',
          label: 'correlation',
          value: '',
          helperText: 'correlation is percentage (10 is 10%)',
        },
        {
          field: 'text',
          label: 'device',
          value: '',
          helperText: 'the network interface to impact',
        },
        {
          field: 'text',
          label: 'egress-port',
          value: '',
          helperText:
            "only impact egress traffic to these destination ports, use a ',' to separate or to indicate the range, such as 80, 8001:8010. it can only be used in conjunction with -p tcp or -p udp",
        },
        {
          field: 'text',
          label: 'hostname',
          value: '',
          helperText: 'only impact traffic to these hostnames',
        },
        {
          field: 'text',
          label: 'ip-address',
          value: '',
          helperText: 'only impact egress traffic to these IP addresses',
        },
        {
          field: 'text',
          label: 'ip-protocol',
          value: '',
          helperText: 'only impact traffic using this IP protocol, supported: tcp, udp, icmp, all',
        },
        {
          field: 'text',
          label: 'percent',
          value: '',
          helperText: 'percentage of packets to corrupt (10 is 10%)',
        },
        {
          field: 'text',
          label: 'source-port',
          value: '',
          helperText:
            "only impact egress traffic from these source ports, use a ',' to separate or to indicate the range, such as 80, 8001:8010. it can only be used in conjunction with -p tcp or -p udp",
        },
      ],
      when: "action=='network-corrupt'",
    },
    {
      field: 'ref',
      label: 'network-delay',
      children: [
        {
          field: 'text',
          label: 'correlation',
          value: '',
          helperText: 'correlation is percentage (10 is 10%)',
        },
        {
          field: 'text',
          label: 'device',
          value: '',
          helperText: 'the network interface to impact',
        },
        {
          field: 'text',
          label: 'egress-port',
          value: '',
          helperText:
            "only impact egress traffic to these destination ports, use a ',' to separate or to indicate the range, such as 80, 8001:8010. it can only be used in conjunction with -p tcp or -p udp",
        },
        {
          field: 'text',
          label: 'hostname',
          value: '',
          helperText: 'only impact traffic to these hostnames',
        },
        {
          field: 'text',
          label: 'ip-address',
          value: '',
          helperText: 'only impact egress traffic to these IP addresses',
        },
        {
          field: 'text',
          label: 'ip-protocol',
          value: '',
          helperText: 'only impact traffic using this IP protocol, supported: tcp, udp, icmp, all',
        },
        {
          field: 'text',
          label: 'jitter',
          value: '',
          helperText: 'jitter time, time units: ns, us (or \u00B5s), ms, s, m, h.',
        },
        {
          field: 'text',
          label: 'latency',
          value: '',
          helperText: 'delay egress time, time units: ns, us (or \u00B5s), ms, s, m, h.',
        },
        {
          field: 'text',
          label: 'source-port',
          value: '',
          helperText:
            "only impact egress traffic from these source ports, use a ',' to separate or to indicate the range, such as 80, 8001:8010. it can only be used in conjunction with -p tcp or -p udp",
        },
      ],
      when: "action=='network-delay'",
    },
    {
      field: 'ref',
      label: 'network-dns',
      children: [
        {
          field: 'text',
          label: 'dns-domain-name',
          value: '',
          helperText: 'map this host to specified IP',
        },
        {
          field: 'text',
          label: 'dns-ip',
          value: '',
          helperText: 'map specified host to this IP address',
        },
        {
          field: 'text',
          label: 'dns-server',
          value: '',
          helperText: 'update the DNS server in /etc/resolv.conf with this value',
        },
      ],
      when: "action=='network-dns'",
    },
    {
      field: 'ref',
      label: 'network-duplicate',
      children: [
        {
          field: 'text',
          label: 'correlation',
          value: '',
          helperText: 'correlation is percentage (10 is 10%)',
        },
        {
          field: 'text',
          label: 'device',
          value: '',
          helperText: 'the network interface to impact',
        },
        {
          field: 'text',
          label: 'egress-port',
          value: '',
          helperText:
            "only impact egress traffic to these destination ports, use a ',' to separate or to indicate the range, such as 80, 8001:8010. it can only be used in conjunction with -p tcp or -p udp",
        },
        {
          field: 'text',
          label: 'hostname',
          value: '',
          helperText: 'only impact traffic to these hostnames',
        },
        {
          field: 'text',
          label: 'ip-address',
          value: '',
          helperText: 'only impact egress traffic to these IP addresses',
        },
        {
          field: 'text',
          label: 'ip-protocol',
          value: '',
          helperText: 'only impact traffic using this IP protocol, supported: tcp, udp, icmp, all',
        },
        {
          field: 'text',
          label: 'percent',
          value: '',
          helperText: 'percentage of packets to duplicate (10 is 10%)',
        },
        {
          field: 'text',
          label: 'source-port',
          value: '',
          helperText:
            "only impact egress traffic from these source ports, use a ',' to separate or to indicate the range, such as 80, 8001:8010. it can only be used in conjunction with -p tcp or -p udp",
        },
      ],
      when: "action=='network-duplicate'",
    },
    {
      field: 'ref',
      label: 'network-loss',
      children: [
        {
          field: 'text',
          label: 'correlation',
          value: '',
          helperText: 'correlation is percentage (10 is 10%)',
        },
        {
          field: 'text',
          label: 'device',
          value: '',
          helperText: 'the network interface to impact',
        },
        {
          field: 'text',
          label: 'egress-port',
          value: '',
          helperText:
            "only impact egress traffic to these destination ports, use a ',' to separate or to indicate the range, such as 80, 8001:8010. it can only be used in conjunction with -p tcp or -p udp",
        },
        {
          field: 'text',
          label: 'hostname',
          value: '',
          helperText: 'only impact traffic to these hostnames',
        },
        {
          field: 'text',
          label: 'ip-address',
          value: '',
          helperText: 'only impact egress traffic to these IP addresses',
        },
        {
          field: 'text',
          label: 'ip-protocol',
          value: '',
          helperText: 'only impact traffic using this IP protocol, supported: tcp, udp, icmp, all',
        },
        {
          field: 'text',
          label: 'percent',
          value: '',
          helperText: 'percentage of packets to loss (10 is 10%)',
        },
        {
          field: 'text',
          label: 'source-port',
          value: '',
          helperText:
            "only impact egress traffic from these source ports, use a ',' to separate or to indicate the range, such as 80, 8001:8010. it can only be used in conjunction with -p tcp or -p udp",
        },
      ],
      when: "action=='network-loss'",
    },
    {
      field: 'ref',
      label: 'network-partition',
      children: [
        {
          field: 'text',
          label: 'accept-tcp-flags',
          value: '',
          helperText:
            'only the packet which match the tcp flag can be accepted, others will be dropped. only set when the IPProtocol is tcp, used for partition.',
        },
        {
          field: 'text',
          label: 'device',
          value: '',
          helperText: 'the network interface to impact',
        },
        {
          field: 'text',
          label: 'direction',
          value: '',
          helperText:
            "specifies the partition direction, values can be 'from', 'to'. 'from' means packets coming from the 'IPAddress' or 'Hostname' and going to your server, 'to' means packets originating from your server and going to the 'IPAddress' or 'Hostname'.",
        },
        {
          field: 'text',
          label: 'hostname',
          value: '',
          helperText: 'only impact traffic to these hostnames',
        },
        {
          field: 'text',
          label: 'ip-address',
          value: '',
          helperText: 'only impact egress traffic to these IP addresses',
        },
        {
          field: 'text',
          label: 'ip-protocol',
          value: '',
          helperText: 'only impact egress traffic to these IP addresses',
        },
      ],
      when: "action=='network-partition'",
    },
    {
      field: 'ref',
      label: 'process',
      children: [
        {
          field: 'text',
          label: 'process',
          value: '',
          helperText: 'the process name or the process ID',
        },
        {
          field: 'text',
          label: 'recoverCmd',
          value: '',
          helperText: 'the command to be run when recovering experiment',
        },
        {
          field: 'number',
          label: 'signal',
          value: 0,
          helperText: 'the signal number to send',
        },
      ],
      when: "action=='process'",
    },
    {
      field: 'ref',
      label: 'stress-cpu',
      children: [
        {
          field: 'number',
          label: 'load',
          value: 0,
          helperText:
            'specifies P percent loading per CPU worker. 0 is effectively a sleep (no load) and 100 is full loading.',
        },
        {
          field: 'text',
          label: 'options',
          value: '',
          helperText: 'extend stress-ng options',
        },
        {
          field: 'number',
          label: 'workers',
          value: 0,
          helperText: 'specifies N workers to apply the stressor.',
        },
      ],
      when: "action=='stress-cpu'",
    },
    {
      field: 'ref',
      label: 'stress-mem',
      children: [
        {
          field: 'text',
          label: 'options',
          value: '',
          helperText: 'extend stress-ng options',
        },
        {
          field: 'text',
          label: 'size',
          value: '',
          helperText:
            'specifies N bytes consumed per vm worker, default is the total available memory. One can specify the size as % of total available memory or in units of B, KB/KiB, MB/MiB, GB/GiB, TB/TiB..',
        },
      ],
      when: "action=='stress-mem'",
    },
  ]
