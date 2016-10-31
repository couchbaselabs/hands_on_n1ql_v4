# Part 6 : Query Optimization And Query Tuning

## Example #1: Creating the right index for the query

### Create secondary composite index

Now, let's create the secondary composite index with type, id and country.

<pre id="example"> 
CREATE INDEX ts_ix1 ON `travel-sample`(type, id, country);
</pre>
