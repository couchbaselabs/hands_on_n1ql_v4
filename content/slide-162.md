# Part 7 : N1QL monitoring

## Prepared statements continued

As a variation of the previous query, we can find the most used statements

<pre id="example">
select sum(uses) usecount, statement
  from system:prepareds 
  where uses is not missing 
  group by statement 
  order by usecount

</pre>

