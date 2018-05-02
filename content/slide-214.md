# Part 10: N1QL QUERY OPTIMIZATION IN 5.5

## ANSI JOIN

ANSI JOIN supports chained multiple joins in one query clause.

Let's firstly create a secondary index on the third keyspace to be joined as shown in the query.



<pre id="example">
CREATE INDEX airline ON `travel-sample`(id) WHERE type = "airline"
</pre>

