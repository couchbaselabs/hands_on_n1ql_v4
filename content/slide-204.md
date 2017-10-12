# Part 9 : N1QL Query Optimization IN 5.0


## Index cas and expiration


### Create Index on cas and expiration


Now, let's Create index with cas and expiration

<pre id="example"> 
CREATE INDEX ts_cas ON `travel-sample` (country, META().cas, META().expiration) WHERE type = "airport";
</pre>
