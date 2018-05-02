## <b> Part 10: N1QL QUERY OPTIMIZATION IN 5.5 </b>
  
## Index Grouping and Aggregation

In Couchbase 5.5, N1QL optimizes the performance of GROUP BY and aggregations by pushing them down to the indexer for processing.

- It can utilize the covering index to perform GROUPING, COUNT(), SUM(), MIN(), MAX(), AVG() and related operations on-the-fly.
- Reduce the amount of data transfer and Disk I/O, achieve better performance .

We can get an idea of the new query plan through an example.

Firstly create an secondary index as shown.

<pre id="example">
CREATE INDEX idx_ts_type ON `travel-sample` (type);
</pre>
