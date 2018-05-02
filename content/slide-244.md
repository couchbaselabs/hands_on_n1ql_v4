# Part 10: N1QL QUERY OPTIMIZATION IN 5.5
  
## Index Partitioning

To get more details of this hash-partitioned index, run the below query to extract the meta data from system:indexes.

<pre id="example">
SELECT *
FROM system:indexes
WHERE keyspace_id = "customer"
      AND name = "ih";
</pre>
