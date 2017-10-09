# Part 7 : N1QL monitoring

## Exploring completed requests

Queries not using a covering index

<pre id="example">
select *
  from system:completed_requests
  where phaseCounts.`indexScan` is not missing and phaseCounts.`fetch` is not missing

</pre>

