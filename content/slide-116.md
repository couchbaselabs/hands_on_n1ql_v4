# Part 6 : Query Optimization And Query Tuning

## Example #1: Creating the right index for the query

### Create secondary index

Now, let's create the secondary index with type.

<pre id="example"> 
CREATE INDEX ts_ix1 ON `travel-sample`(type);
</pre>
