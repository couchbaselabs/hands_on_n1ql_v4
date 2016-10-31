# Part 6 : Query Optimization And Query Tuning

## Example #1: Creating the right index for the query

### Create covering partial secondary composite index

Now, let's create the covering partial secondary composite index with country, id and name.


<pre id="example"> 
CREATE INDEX ts_ix1 ON `travel-sample`(country, id, name) WHERE type = "airline";
</pre>
