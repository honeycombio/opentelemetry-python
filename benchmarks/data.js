window.BENCHMARK_DATA = {
  "lastUpdate": 1639084236957,
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
    ]
  }
}