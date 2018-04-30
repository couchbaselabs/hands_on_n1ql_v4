# Part 10: N1QL QUERY OPTIMIZATION IN 5.5

## ANSI JOIN

Delete all the secondary indexes we created in ANSI JOIN section with the following statements.

<pre>
DROP INDEX `travel-sample`.route_airports;
</pre>
<br>
<pre>
DROP INDEX `travel-sample`.route_sourceairport;
</pre>
<br>
<pre>
DROP INDEX `travel-sample`.airline;
</pre>
<br>
<pre>
DROP INDEX purchases.purchase_ix;
</pre>
<br>
<pre>
DROP INDEX product.product_price;
</pre>
<br>
<pre>
DROP INDEX product.product_category_unitPrice_productId;
</pre>


 
