# Part 6 : N1QL monitoring

## Exploring completed requests

Queries using a poorly selective index

<pre id="example">
select *
  from system:completed_requests
   where PhaseCounts.`Scan` is not missing
     and PhaseCounts.`Fetch`/ResultCount>10
</pre>
