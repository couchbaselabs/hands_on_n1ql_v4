# Part 7 : N1QL monitoring

## Exploring completed requests

Queries using a poorly selective index

<pre id="example">
select *
  from system:completed_requests
   where PhaseCounts.`IndexScan` is not missing
     and PhaseCounts.`Fetch`/ResultCount> 10
</pre>
