# Part 7 : N1QL monitoring

## Prepared statements continued

As a variation of the previous query, we can find the statements prepared by the most clients

<pre id="example">
  select count(*) prepcount, statement 
  from system:prepareds 
  group by statement 
  order by prepcount;

</pre>
