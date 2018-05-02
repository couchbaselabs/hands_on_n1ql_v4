# Part 10: N1QL QUERY OPTIMIZATION IN 5.5
  
## Index Grouping and Aggregation


Let's take a look at the query scenario with GROUP BY and aggregation with array index.

Firstly create a secondary index for the query.


<pre id="example">
CREATE INDEX idxad1 ON cars(c0, c1, DISTINCT ARRAY v.id FOR v IN a1 END, c2, c3, c4) WHERE type="agg"
</pre>

