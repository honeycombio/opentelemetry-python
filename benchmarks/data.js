window.BENCHMARK_DATA = {
  "lastUpdate": 1639084412178,
  "repoUrl": "https://github.com/honeycombio/opentelemetry-python",
  "entries": {
    "OpenTelemetry Python Benchmarks - Python 3.6 - sdk": [
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "9ef6829b23a6bc59154ed0c644c72833d0a0e46f",
          "message": "Refactor Meter and MeterProvider (#2296)\n\n* Refactor Meter and MeterProvider\r\n\r\nFixes #2292\r\n\r\n* Remove synchronous instruments list\r\n\r\n* Undo changes to _time.py\r\n\r\n* Make lint pass\r\n\r\n* Remove unnecesary docstring\r\n\r\n* Remove _create_instrument\r\n\r\n* Add missing callback\r\n\r\n* Remove instrument creating methods from MeterProvider\r\n\r\n* Remove views and other attributes\r\n\r\n* Removed dataclass dependency\r\n\r\n* Add warning\r\n\r\n* Add export directory\r\n\r\n* Add missing callbacks",
          "timestamp": "2021-12-08T15:09:07-06:00",
          "tree_id": "48c8c14a37999be37abbb4950edf2aa4a38c5c57",
          "url": "https://github.com/honeycombio/opentelemetry-python/commit/9ef6829b23a6bc59154ed0c644c72833d0a0e46f"
        },
        "date": 1639084236018,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 14854.855236806276,
            "unit": "iter/sec",
            "range": "stddev: 0.000026415193239870642",
            "extra": "mean: 67.31805756829411 usec\nrounds: 4030"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 9509.511846436933,
            "unit": "iter/sec",
            "range": "stddev: 0.00009440775042319095",
            "extra": "mean: 105.15786889467775 usec\nrounds: 5835"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.8 - propagator": [
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "9ef6829b23a6bc59154ed0c644c72833d0a0e46f",
          "message": "Refactor Meter and MeterProvider (#2296)\n\n* Refactor Meter and MeterProvider\r\n\r\nFixes #2292\r\n\r\n* Remove synchronous instruments list\r\n\r\n* Undo changes to _time.py\r\n\r\n* Make lint pass\r\n\r\n* Remove unnecesary docstring\r\n\r\n* Remove _create_instrument\r\n\r\n* Add missing callback\r\n\r\n* Remove instrument creating methods from MeterProvider\r\n\r\n* Remove views and other attributes\r\n\r\n* Removed dataclass dependency\r\n\r\n* Add warning\r\n\r\n* Add export directory\r\n\r\n* Add missing callbacks",
          "timestamp": "2021-12-08T15:09:07-06:00",
          "tree_id": "48c8c14a37999be37abbb4950edf2aa4a38c5c57",
          "url": "https://github.com/honeycombio/opentelemetry-python/commit/9ef6829b23a6bc59154ed0c644c72833d0a0e46f"
        },
        "date": 1639084239042,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 110650.57545001897,
            "unit": "iter/sec",
            "range": "stddev: 7.740006736215313e-7",
            "extra": "mean: 9.037458647937187 usec\nrounds: 11124"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 243150.27784719708,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024591856955241444",
            "extra": "mean: 4.112682941816048 usec\nrounds: 68489"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.6 - propagator": [
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "9ef6829b23a6bc59154ed0c644c72833d0a0e46f",
          "message": "Refactor Meter and MeterProvider (#2296)\n\n* Refactor Meter and MeterProvider\r\n\r\nFixes #2292\r\n\r\n* Remove synchronous instruments list\r\n\r\n* Undo changes to _time.py\r\n\r\n* Make lint pass\r\n\r\n* Remove unnecesary docstring\r\n\r\n* Remove _create_instrument\r\n\r\n* Add missing callback\r\n\r\n* Remove instrument creating methods from MeterProvider\r\n\r\n* Remove views and other attributes\r\n\r\n* Removed dataclass dependency\r\n\r\n* Add warning\r\n\r\n* Add export directory\r\n\r\n* Add missing callbacks",
          "timestamp": "2021-12-08T15:09:07-06:00",
          "tree_id": "48c8c14a37999be37abbb4950edf2aa4a38c5c57",
          "url": "https://github.com/honeycombio/opentelemetry-python/commit/9ef6829b23a6bc59154ed0c644c72833d0a0e46f"
        },
        "date": 1639084240129,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 80321.64191173803,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033128686455179705",
            "extra": "mean: 12.449944699821458 usec\nrounds: 10000"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 153905.34554081288,
            "unit": "iter/sec",
            "range": "stddev: 9.547925202811952e-7",
            "extra": "mean: 6.4975001127223235 usec\nrounds: 53192"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.7 - propagator": [
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "9ef6829b23a6bc59154ed0c644c72833d0a0e46f",
          "message": "Refactor Meter and MeterProvider (#2296)\n\n* Refactor Meter and MeterProvider\r\n\r\nFixes #2292\r\n\r\n* Remove synchronous instruments list\r\n\r\n* Undo changes to _time.py\r\n\r\n* Make lint pass\r\n\r\n* Remove unnecesary docstring\r\n\r\n* Remove _create_instrument\r\n\r\n* Add missing callback\r\n\r\n* Remove instrument creating methods from MeterProvider\r\n\r\n* Remove views and other attributes\r\n\r\n* Removed dataclass dependency\r\n\r\n* Add warning\r\n\r\n* Add export directory\r\n\r\n* Add missing callbacks",
          "timestamp": "2021-12-08T15:09:07-06:00",
          "tree_id": "48c8c14a37999be37abbb4950edf2aa4a38c5c57",
          "url": "https://github.com/honeycombio/opentelemetry-python/commit/9ef6829b23a6bc59154ed0c644c72833d0a0e46f"
        },
        "date": 1639084240073,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 111935.23634285529,
            "unit": "iter/sec",
            "range": "stddev: 7.778747352233029e-7",
            "extra": "mean: 8.933737334837272 usec\nrounds: 13245"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 219022.7364471263,
            "unit": "iter/sec",
            "range": "stddev: 5.149402783977124e-7",
            "extra": "mean: 4.565736033717245 usec\nrounds: 64512"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.10 - propagator": [
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "9ef6829b23a6bc59154ed0c644c72833d0a0e46f",
          "message": "Refactor Meter and MeterProvider (#2296)\n\n* Refactor Meter and MeterProvider\r\n\r\nFixes #2292\r\n\r\n* Remove synchronous instruments list\r\n\r\n* Undo changes to _time.py\r\n\r\n* Make lint pass\r\n\r\n* Remove unnecesary docstring\r\n\r\n* Remove _create_instrument\r\n\r\n* Add missing callback\r\n\r\n* Remove instrument creating methods from MeterProvider\r\n\r\n* Remove views and other attributes\r\n\r\n* Removed dataclass dependency\r\n\r\n* Add warning\r\n\r\n* Add export directory\r\n\r\n* Add missing callbacks",
          "timestamp": "2021-12-08T15:09:07-06:00",
          "tree_id": "48c8c14a37999be37abbb4950edf2aa4a38c5c57",
          "url": "https://github.com/honeycombio/opentelemetry-python/commit/9ef6829b23a6bc59154ed0c644c72833d0a0e46f"
        },
        "date": 1639084248013,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 93287.59879948545,
            "unit": "iter/sec",
            "range": "stddev: 0.000008515279383326804",
            "extra": "mean: 10.719538425996186 usec\nrounds: 13038"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 178765.57293441796,
            "unit": "iter/sec",
            "range": "stddev: 0.00001952402157222828",
            "extra": "mean: 5.593918244912071 usec\nrounds: 56180"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.10 - sdk": [
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "9ef6829b23a6bc59154ed0c644c72833d0a0e46f",
          "message": "Refactor Meter and MeterProvider (#2296)\n\n* Refactor Meter and MeterProvider\r\n\r\nFixes #2292\r\n\r\n* Remove synchronous instruments list\r\n\r\n* Undo changes to _time.py\r\n\r\n* Make lint pass\r\n\r\n* Remove unnecesary docstring\r\n\r\n* Remove _create_instrument\r\n\r\n* Add missing callback\r\n\r\n* Remove instrument creating methods from MeterProvider\r\n\r\n* Remove views and other attributes\r\n\r\n* Removed dataclass dependency\r\n\r\n* Add warning\r\n\r\n* Add export directory\r\n\r\n* Add missing callbacks",
          "timestamp": "2021-12-08T15:09:07-06:00",
          "tree_id": "48c8c14a37999be37abbb4950edf2aa4a38c5c57",
          "url": "https://github.com/honeycombio/opentelemetry-python/commit/9ef6829b23a6bc59154ed0c644c72833d0a0e46f"
        },
        "date": 1639084259284,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 27793.25406541682,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036819060627138493",
            "extra": "mean: 35.97995389983144 usec\nrounds: 5423"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 19495.778765229134,
            "unit": "iter/sec",
            "range": "stddev: 0.000004561535994720776",
            "extra": "mean: 51.29315489481792 usec\nrounds: 6456"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.7 - sdk": [
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "9ef6829b23a6bc59154ed0c644c72833d0a0e46f",
          "message": "Refactor Meter and MeterProvider (#2296)\n\n* Refactor Meter and MeterProvider\r\n\r\nFixes #2292\r\n\r\n* Remove synchronous instruments list\r\n\r\n* Undo changes to _time.py\r\n\r\n* Make lint pass\r\n\r\n* Remove unnecesary docstring\r\n\r\n* Remove _create_instrument\r\n\r\n* Add missing callback\r\n\r\n* Remove instrument creating methods from MeterProvider\r\n\r\n* Remove views and other attributes\r\n\r\n* Removed dataclass dependency\r\n\r\n* Add warning\r\n\r\n* Add export directory\r\n\r\n* Add missing callbacks",
          "timestamp": "2021-12-08T15:09:07-06:00",
          "tree_id": "48c8c14a37999be37abbb4950edf2aa4a38c5c57",
          "url": "https://github.com/honeycombio/opentelemetry-python/commit/9ef6829b23a6bc59154ed0c644c72833d0a0e46f"
        },
        "date": 1639084263640,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 19895.620123628258,
            "unit": "iter/sec",
            "range": "stddev: 0.000023615269583228824",
            "extra": "mean: 50.26231873076372 usec\nrounds: 4223"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14579.316988361697,
            "unit": "iter/sec",
            "range": "stddev: 0.00008929589590540212",
            "extra": "mean: 68.59031879190739 usec\nrounds: 6258"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.8 - sdk": [
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "9ef6829b23a6bc59154ed0c644c72833d0a0e46f",
          "message": "Refactor Meter and MeterProvider (#2296)\n\n* Refactor Meter and MeterProvider\r\n\r\nFixes #2292\r\n\r\n* Remove synchronous instruments list\r\n\r\n* Undo changes to _time.py\r\n\r\n* Make lint pass\r\n\r\n* Remove unnecesary docstring\r\n\r\n* Remove _create_instrument\r\n\r\n* Add missing callback\r\n\r\n* Remove instrument creating methods from MeterProvider\r\n\r\n* Remove views and other attributes\r\n\r\n* Removed dataclass dependency\r\n\r\n* Add warning\r\n\r\n* Add export directory\r\n\r\n* Add missing callbacks",
          "timestamp": "2021-12-08T15:09:07-06:00",
          "tree_id": "48c8c14a37999be37abbb4950edf2aa4a38c5c57",
          "url": "https://github.com/honeycombio/opentelemetry-python/commit/9ef6829b23a6bc59154ed0c644c72833d0a0e46f"
        },
        "date": 1639084263836,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 28345.23242341697,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011037382315182186",
            "extra": "mean: 35.279301473424006 usec\nrounds: 5158"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 20599.79899544044,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022110189654095546",
            "extra": "mean: 48.544162990199084 usec\nrounds: 2448"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.9 - propagator": [
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "9ef6829b23a6bc59154ed0c644c72833d0a0e46f",
          "message": "Refactor Meter and MeterProvider (#2296)\n\n* Refactor Meter and MeterProvider\r\n\r\nFixes #2292\r\n\r\n* Remove synchronous instruments list\r\n\r\n* Undo changes to _time.py\r\n\r\n* Make lint pass\r\n\r\n* Remove unnecesary docstring\r\n\r\n* Remove _create_instrument\r\n\r\n* Add missing callback\r\n\r\n* Remove instrument creating methods from MeterProvider\r\n\r\n* Remove views and other attributes\r\n\r\n* Removed dataclass dependency\r\n\r\n* Add warning\r\n\r\n* Add export directory\r\n\r\n* Add missing callbacks",
          "timestamp": "2021-12-08T15:09:07-06:00",
          "tree_id": "48c8c14a37999be37abbb4950edf2aa4a38c5c57",
          "url": "https://github.com/honeycombio/opentelemetry-python/commit/9ef6829b23a6bc59154ed0c644c72833d0a0e46f"
        },
        "date": 1639084286155,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 127568.99877971,
            "unit": "iter/sec",
            "range": "stddev: 5.337820335750635e-7",
            "extra": "mean: 7.838895104341377 usec\nrounds: 13175"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 229132.42039548064,
            "unit": "iter/sec",
            "range": "stddev: 0.000004606967343091352",
            "extra": "mean: 4.364288555386481 usec\nrounds: 62501"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.9 - sdk": [
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "9ef6829b23a6bc59154ed0c644c72833d0a0e46f",
          "message": "Refactor Meter and MeterProvider (#2296)\n\n* Refactor Meter and MeterProvider\r\n\r\nFixes #2292\r\n\r\n* Remove synchronous instruments list\r\n\r\n* Undo changes to _time.py\r\n\r\n* Make lint pass\r\n\r\n* Remove unnecesary docstring\r\n\r\n* Remove _create_instrument\r\n\r\n* Add missing callback\r\n\r\n* Remove instrument creating methods from MeterProvider\r\n\r\n* Remove views and other attributes\r\n\r\n* Removed dataclass dependency\r\n\r\n* Add warning\r\n\r\n* Add export directory\r\n\r\n* Add missing callbacks",
          "timestamp": "2021-12-08T15:09:07-06:00",
          "tree_id": "48c8c14a37999be37abbb4950edf2aa4a38c5c57",
          "url": "https://github.com/honeycombio/opentelemetry-python/commit/9ef6829b23a6bc59154ed0c644c72833d0a0e46f"
        },
        "date": 1639084317238,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 26307.563250316383,
            "unit": "iter/sec",
            "range": "stddev: 0.0000360367165536642",
            "extra": "mean: 38.01188238093369 usec\nrounds: 4183"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 19711.507818784077,
            "unit": "iter/sec",
            "range": "stddev: 0.00005243374542498508",
            "extra": "mean: 50.73178618264049 usec\nrounds: 8540"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python pypy-3.7 - propagator": [
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "9ef6829b23a6bc59154ed0c644c72833d0a0e46f",
          "message": "Refactor Meter and MeterProvider (#2296)\n\n* Refactor Meter and MeterProvider\r\n\r\nFixes #2292\r\n\r\n* Remove synchronous instruments list\r\n\r\n* Undo changes to _time.py\r\n\r\n* Make lint pass\r\n\r\n* Remove unnecesary docstring\r\n\r\n* Remove _create_instrument\r\n\r\n* Add missing callback\r\n\r\n* Remove instrument creating methods from MeterProvider\r\n\r\n* Remove views and other attributes\r\n\r\n* Removed dataclass dependency\r\n\r\n* Add warning\r\n\r\n* Add export directory\r\n\r\n* Add missing callbacks",
          "timestamp": "2021-12-08T15:09:07-06:00",
          "tree_id": "48c8c14a37999be37abbb4950edf2aa4a38c5c57",
          "url": "https://github.com/honeycombio/opentelemetry-python/commit/9ef6829b23a6bc59154ed0c644c72833d0a0e46f"
        },
        "date": 1639084355535,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 623672.7415202798,
            "unit": "iter/sec",
            "range": "stddev: 2.1330864467987817e-7",
            "extra": "mean: 1.603405012639182 usec\nrounds: 68028"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 1005850.9024966301,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016638984945742618",
            "extra": "mean: 994.183131434438 nsec\nrounds: 111112"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.8 - exporter": [
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "9ef6829b23a6bc59154ed0c644c72833d0a0e46f",
          "message": "Refactor Meter and MeterProvider (#2296)\n\n* Refactor Meter and MeterProvider\r\n\r\nFixes #2292\r\n\r\n* Remove synchronous instruments list\r\n\r\n* Undo changes to _time.py\r\n\r\n* Make lint pass\r\n\r\n* Remove unnecesary docstring\r\n\r\n* Remove _create_instrument\r\n\r\n* Add missing callback\r\n\r\n* Remove instrument creating methods from MeterProvider\r\n\r\n* Remove views and other attributes\r\n\r\n* Removed dataclass dependency\r\n\r\n* Add warning\r\n\r\n* Add export directory\r\n\r\n* Add missing callbacks",
          "timestamp": "2021-12-08T15:09:07-06:00",
          "tree_id": "48c8c14a37999be37abbb4950edf2aa4a38c5c57",
          "url": "https://github.com/honeycombio/opentelemetry-python/commit/9ef6829b23a6bc59154ed0c644c72833d0a0e46f"
        },
        "date": 1639084368198,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3370.1272349044784,
            "unit": "iter/sec",
            "range": "stddev: 0.00002581886355158867",
            "extra": "mean: 296.72470215455934 usec\nrounds: 1578"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 7361.200513043605,
            "unit": "iter/sec",
            "range": "stddev: 0.0007078934729426038",
            "extra": "mean: 135.84740671417117 usec\nrounds: 8340"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.10 - exporter": [
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "9ef6829b23a6bc59154ed0c644c72833d0a0e46f",
          "message": "Refactor Meter and MeterProvider (#2296)\n\n* Refactor Meter and MeterProvider\r\n\r\nFixes #2292\r\n\r\n* Remove synchronous instruments list\r\n\r\n* Undo changes to _time.py\r\n\r\n* Make lint pass\r\n\r\n* Remove unnecesary docstring\r\n\r\n* Remove _create_instrument\r\n\r\n* Add missing callback\r\n\r\n* Remove instrument creating methods from MeterProvider\r\n\r\n* Remove views and other attributes\r\n\r\n* Removed dataclass dependency\r\n\r\n* Add warning\r\n\r\n* Add export directory\r\n\r\n* Add missing callbacks",
          "timestamp": "2021-12-08T15:09:07-06:00",
          "tree_id": "48c8c14a37999be37abbb4950edf2aa4a38c5c57",
          "url": "https://github.com/honeycombio/opentelemetry-python/commit/9ef6829b23a6bc59154ed0c644c72833d0a0e46f"
        },
        "date": 1639084377401,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2699.125391705655,
            "unit": "iter/sec",
            "range": "stddev: 0.00003730490058209286",
            "extra": "mean: 370.4903829488526 usec\nrounds: 1431"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 6233.4800946413725,
            "unit": "iter/sec",
            "range": "stddev: 0.0007320486071594479",
            "extra": "mean: 160.42403036782818 usec\nrounds: 7969"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.7 - exporter": [
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "9ef6829b23a6bc59154ed0c644c72833d0a0e46f",
          "message": "Refactor Meter and MeterProvider (#2296)\n\n* Refactor Meter and MeterProvider\r\n\r\nFixes #2292\r\n\r\n* Remove synchronous instruments list\r\n\r\n* Undo changes to _time.py\r\n\r\n* Make lint pass\r\n\r\n* Remove unnecesary docstring\r\n\r\n* Remove _create_instrument\r\n\r\n* Add missing callback\r\n\r\n* Remove instrument creating methods from MeterProvider\r\n\r\n* Remove views and other attributes\r\n\r\n* Removed dataclass dependency\r\n\r\n* Add warning\r\n\r\n* Add export directory\r\n\r\n* Add missing callbacks",
          "timestamp": "2021-12-08T15:09:07-06:00",
          "tree_id": "48c8c14a37999be37abbb4950edf2aa4a38c5c57",
          "url": "https://github.com/honeycombio/opentelemetry-python/commit/9ef6829b23a6bc59154ed0c644c72833d0a0e46f"
        },
        "date": 1639084395094,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2322.3854213649756,
            "unit": "iter/sec",
            "range": "stddev: 0.0003165795115730874",
            "extra": "mean: 430.59174881155286 usec\nrounds: 1262"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4148.235145159496,
            "unit": "iter/sec",
            "range": "stddev: 0.0009978445184902723",
            "extra": "mean: 241.06637280841775 usec\nrounds: 6502"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.6 - exporter": [
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "9ef6829b23a6bc59154ed0c644c72833d0a0e46f",
          "message": "Refactor Meter and MeterProvider (#2296)\n\n* Refactor Meter and MeterProvider\r\n\r\nFixes #2292\r\n\r\n* Remove synchronous instruments list\r\n\r\n* Undo changes to _time.py\r\n\r\n* Make lint pass\r\n\r\n* Remove unnecesary docstring\r\n\r\n* Remove _create_instrument\r\n\r\n* Add missing callback\r\n\r\n* Remove instrument creating methods from MeterProvider\r\n\r\n* Remove views and other attributes\r\n\r\n* Removed dataclass dependency\r\n\r\n* Add warning\r\n\r\n* Add export directory\r\n\r\n* Add missing callbacks",
          "timestamp": "2021-12-08T15:09:07-06:00",
          "tree_id": "48c8c14a37999be37abbb4950edf2aa4a38c5c57",
          "url": "https://github.com/honeycombio/opentelemetry-python/commit/9ef6829b23a6bc59154ed0c644c72833d0a0e46f"
        },
        "date": 1639084400470,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2760.1047846346573,
            "unit": "iter/sec",
            "range": "stddev: 0.000018032161458162896",
            "extra": "mean: 362.3050855050655 usec\nrounds: 1228"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 5564.194839846007,
            "unit": "iter/sec",
            "range": "stddev: 0.0007527522467109294",
            "extra": "mean: 179.72052179748536 usec\nrounds: 6698"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python pypy-3.7 - sdk": [
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "9ef6829b23a6bc59154ed0c644c72833d0a0e46f",
          "message": "Refactor Meter and MeterProvider (#2296)\n\n* Refactor Meter and MeterProvider\r\n\r\nFixes #2292\r\n\r\n* Remove synchronous instruments list\r\n\r\n* Undo changes to _time.py\r\n\r\n* Make lint pass\r\n\r\n* Remove unnecesary docstring\r\n\r\n* Remove _create_instrument\r\n\r\n* Add missing callback\r\n\r\n* Remove instrument creating methods from MeterProvider\r\n\r\n* Remove views and other attributes\r\n\r\n* Removed dataclass dependency\r\n\r\n* Add warning\r\n\r\n* Add export directory\r\n\r\n* Add missing callbacks",
          "timestamp": "2021-12-08T15:09:07-06:00",
          "tree_id": "48c8c14a37999be37abbb4950edf2aa4a38c5c57",
          "url": "https://github.com/honeycombio/opentelemetry-python/commit/9ef6829b23a6bc59154ed0c644c72833d0a0e46f"
        },
        "date": 1639084411232,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 221178.97090936944,
            "unit": "iter/sec",
            "range": "stddev: 0.000012219261362786878",
            "extra": "mean: 4.521225484902727 usec\nrounds: 136987"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 133370.12731866373,
            "unit": "iter/sec",
            "range": "stddev: 0.00008525381051579053",
            "extra": "mean: 7.4979309093008615 usec\nrounds: 181819"
          }
        ]
      }
    ]
  }
}