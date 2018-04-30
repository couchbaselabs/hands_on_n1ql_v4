# Part 10: N1QL QUERY OPTIMIZATION IN 5.5

## ANSI JOIN

ANSI JOIN suppports join on arrays for both left and right sides in the following 3 scenarios:

- Right-hand side array uses array index
- Left-hand side uses IN clause or UNNEST operation
- Both sides combine the above

We firstly take a look at join on right-hand-side array:

Create an index on right-hand array elements to be joined and try the query clause below:

<pre>
SELECT p.name, 
       pur.purchasedAt 
FROM   product p 
       JOIN purchases pur
         ON ANY i IN pur.lineItems SATISFIES i.product = p.productId END
LIMIT 5
</pre>

<pre id="example">
CREATE INDEX purchase_ix ON purchases (DISTINCT ARRAY l.product FOR l IN lineItems END) 
</pre>





