# Part 10: N1QL QUERY OPTIMIZATION IN 5.5
  
## Index Grouping and Aggregation

To benifit from this optimization, a good design of index to cover the query and order the index keys is essential. 
We will go through some examples to help understanding the right patterns.

Create a GSI index as shown in the query window.

<pre id="example">
CREATE INDEX idx1 ON cars(c0, c1, c2, c3, c4) WHERE type="agg"
</pre>


