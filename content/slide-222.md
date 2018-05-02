# Part 10: N1QL QUERY OPTIMIZATION IN 5.5
  
## ANSI JOIN

The ON clause of an ANSI JOIN can contain different types of multiple join conditions.

Let's create an secondary index for the example we are going to see.

<pre id="example">
CREATE INDEX product_category_unitPrice_productId ON product(DISTINCT categories, unitPrice, productid);
</pre>


