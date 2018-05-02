# Part 10: N1QL QUERY OPTIMIZATION IN 5.5
  
## ANSI JOIN


Let's see an exmaple with ANSI JOIN on arrays and non-equi conditions.

<pre id="example">
SELECT    p1.productId,
          p1.unitPrice,
          count(DISTINCT p2.unitPrice) AS lowerpriceitem
FROM      product p1
LEFT JOIN product p2
ON        any cat2 IN p2.categories satisfies cat2 IN p1.categories END
AND       p1.productId <> p2.productId
AND       p1.unitPrice >= p2.unitPrice
WHERE     any cat1 IN p1.categories satisfies lower(cat1) IN [“golf”] END
GROUP BY  p1.productId,
          p1.unitPrice
LIMIT     1
</pre>
