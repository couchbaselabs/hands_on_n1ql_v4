# Part 7 : N1QL monitoring

## Prepared statements with highest total execution time

Now that we have prepared and executed some statements, let's find
their execution time:

<pre id="example">
select sum(str_to_duration(avgServiceTime)*uses/1000000000) ttime, statement
  from system:prepareds
  where avgServiceTime is not missing
  group by statement
  order by ttime;

</pre>