# Part 10: N1QL QUERY OPTIMIZATION IN 5.5

## Index Grouping and Aggregation



Delete all the secondary indexes we created in this section with the following statements.

<pre>
DROP INDEX `travel-sample`.idx_ts_type_country_city;
</pre>
<br>
<pre>
DROP INDEX cars.idx1;
</pre>
<br>
<pre>
DROP INDEX cars.idxad1;
</pre>
