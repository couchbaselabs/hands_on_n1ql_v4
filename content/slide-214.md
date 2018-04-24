# Part 10: N1QL QUERY OPTIMIZATION IN 5.5

## ANSI JOIN

We can also use ANSI JOIN to join on multiple non-equi conditions as shown in the query.

<pre id="example">
SELECT p1.productid, 
       p1.unitprice, 
       Count(DISTINCT p2.unitprice) AS LowerPriceItem 
FROM   product p1 
       LEFT JOIN product p2 
              ON p1.productid <> p2.productid 
                 AND p1.unitprice >= p2.unitprice 
WHERE ANY cat IN p1.categories SATISFIES lower(cat) IN [ "cycling", "golf" ] END
GROUP  BY p1.productid, 
          p1.unitprice 
LIMIT  2 
</pre>
