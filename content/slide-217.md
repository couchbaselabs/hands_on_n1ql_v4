# Part 10: N1QL QUERY OPTIMIZATION IN 5.5
  
## ANSI JOIN

ANSI JOIN suppports join on arrays for both left and right sides in the following 3 scenarios:

- Right-hand side array uses array index
- Left-hand side uses IN clause or UNNEST operation
- Both sides combine the above

Let's firstly create an index for the right-hand array elements to be joined. 


<pre id="example">
CREATE INDEX purchase_ix ON purchases (DISTINCT ARRAY l.product FOR l IN lineItems END)
</pre>




