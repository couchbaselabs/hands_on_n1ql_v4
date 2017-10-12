# Part 20 : N1QL Query Optimization IN 5.0

##  Creating the index 

Now, let's create the Array index on schedule.


<pre id="example"> 
CREATE INDEX ts_r_simple ON `travel-sample` ( DISTINCT ARRAY v.flight FOR v IN schedule END) WHERE type = "route";
</pre>
