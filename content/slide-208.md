# Part 10: N1QL QUERY OPTIMIZATION IN 5.5

## ANSI JOIN

ANSI JOIN requires the right-hand side to be a keyspace and an appropriate secondary index on the joining fields of it.

We start with creating the required secondary index as shown in the query.




<pre id="example">
CREATE INDEX route_airports ON `travel-sample` (sourceairport, destinationairport) WHERE type = "route"; 
</pre>
