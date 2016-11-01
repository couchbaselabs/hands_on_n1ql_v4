# Part 7 : N1QL monitoring

## Exploring completed requests

Queries using primary scans

<pre id="example">
select *
  from system:completed_requests
  where PhaseCounts.`PrimaryScan` is not missing

</pre>

