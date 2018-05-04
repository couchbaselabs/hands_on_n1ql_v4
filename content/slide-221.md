# Part 10: N1QL QUERY OPTIMIZATION IN 5.5
  
## ANSI JOIN


Let's try the second option using In-clause on the left-hand array.


We should also notice the differences between UNNEST and IN-clause:

- UNEST make copies of all document thus allows for duplicate results.
- IN-clase preserves the original document and no duplicate generated.

<pre id="example">
SELECT  p.name, 
	pur.purchasedAt
FROM 	purchases pur JOIN product p
ON 	p.productId IN ARRAY l.product FOR l IN pur.lineItems END
LIMIT 5
</pre>




