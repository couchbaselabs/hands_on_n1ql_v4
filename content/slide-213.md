# Part 10: N1QL QUERY OPTIMIZATION IN 5.5

## ANSI JOIN

There are two ways to handle the join scenario with left-hand array:

- Utilize UNNEST to flatten the left-hand-side array into individual fields before performing the regular ANSI JOIN:
We firstly run the query to create an index on the right-hand-side document and try the following join clause:

<pre>
SELECT p.name, pur.purchasedAt
    FROM purchases pur 
      UNNEST pur.lineItems AS pl JOIN product p
          ON pl.product = p.productId
LIMIT 5
</pre>


- Utilize IN-clause with the left-hand array and find the existence of any element matches the right-hand field.

<pre>
SELECT p.name, pur.purchasedAt
    FROM purchases pur JOIN product p 
      ON p.productId IN ARRAY l.product FOR l IN pur.lineItems END
LIMIT 5
</pre>

<br>

We should also notice the differences between UNNEST and IN-clause:
UNEST make copies of all document thus allows for duplicate results.
IN-clase preserves the original document and no duplicate generated.


<pre id="example">
CREATE INDEX product_price ON product(productId, unitPrice)
</pre>
