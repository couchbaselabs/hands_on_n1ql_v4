# Part 6 : Query Optimization And Query Tuning

## Example #5: Creating the right index for the query


Now, let's create the covering partial secondary composite index

* Query can use any one of the above index.

<pre id="example"> 
CREATE INDEX ts_ix1 ON `travel-sample`(country, id) WHERE type = "airline";
</pre>
