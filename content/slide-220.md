# Part 10: N1QL QUERY OPTIMIZATION IN 5.5
  
## ANSI JOIN

We firstly run an ANSI JOIN query using UNNEST to flatten the left-hand-side array.

<pre id="example">
SELECT	p.name, 
	pur.purchasedAt
FROM 	purchases pur
UNNEST 	pur.lineItems AS pl 
JOIN 	product p
ON 	pl.product = p.productId
LIMIT 5
</pre>

