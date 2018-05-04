# Part 10: N1QL QUERY OPTIMIZATION IN 5.5
  
## ANSI JOIN


Let's try one query with ANSI JOIN on right-hand-side array.

<pre id="example">
SELECT 	p.name,
       	pur.purchasedAt
FROM   	product p
JOIN   	purchases pur
ON	ANY i IN pur.lineItems SATISFIES i.product = p.productId END
LIMIT 5
</pre>

