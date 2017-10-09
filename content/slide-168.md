# Part 7 : N1QL monitoring

## Exploring completed requests

Queries using a poorly selective index

<pre id="example">
select *
  from system:completed_requests
   where phaseCounts.`indexScan` is not missing
     and phaseCounts.`fetch`/resultCount> 10
</pre>
