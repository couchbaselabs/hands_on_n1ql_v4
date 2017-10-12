## <b> Part 9 : N1QL Query Optimization IN 5.0 </b>

Now, let's create the partial secondary composite index with country and city.


<pre id="example"> 
CREATE INDEX ts_cc ON `travel-sample` (country, city) WHERE type = "hotel";
</pre>
