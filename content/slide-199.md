# Part 9 : N1QL Query Optimization IN 5.0


## DESC Index Collation


### DESC Index Collation


* Index can be created with ASC/DESC collation on each index key

* Query can utilize index collation



Now, let's Create index with DESC collation

<pre id="example"> 
CREATE INDEX ts_acc ON `travel-sample` (country DESC, city ASC) WHERE type = "airline";
</pre>
