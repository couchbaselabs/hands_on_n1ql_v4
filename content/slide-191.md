# Part 9 : N1QL Query Optimization IN 5.0

## Creating the index 

Now, let's create the partial secondary composite index with name.


<pre id="example"> 
CREATE INDEX ts_n  ON `travel-sample` (name) WHERE type = "hotel";
</pre>
