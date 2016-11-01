# Part 7 : N1QL monitoring

## Exploring completed requests

Queries not using a covering index

<pre id="example">
select *
  from system:completed_requests
  where PhaseCounts.`IndexScan` is not missing and PhaseCounts.`Fetch` is not missing

</pre>

