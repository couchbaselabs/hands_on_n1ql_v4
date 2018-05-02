# Part 10: N1QL QUERY OPTIMIZATION IN 5.5
  
## Index Grouping and Aggregation

Let's take a look at the query scenario with GROUP BY and aggregation of UNNEST operation.

Firstly create an index as shown.

<pre id="example">
CREATE INDEX idxaa1 ON cars (ALL ARRAY v.id FOR v IN a1 END, c0, c1) WHERE type = "agg";
</pre>
