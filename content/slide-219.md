# Part 10: N1QL QUERY OPTIMIZATION IN 5.5
  

## ANSI JOIN


There are two ways to handle the join scenario with left-hand array:


- Utilize UNNEST to flatten the left-hand-side array into individual fields before performing the regular ANSI JOIN:

- Utilize IN-clause with the left-hand array and find the existence of any element matches the right-hand field.


Let's firstly run the query to create an index on the right-hand-side document and take a look at these two options one by one.



<pre id="example">
CREATE INDEX product_price ON product(productId, unitPrice)
</pre>
~                                                                       
