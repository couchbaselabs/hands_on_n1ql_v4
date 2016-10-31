# Part 6 : Query Optimization And Query Tuning

## Example #1: Creating the right index for the query

### Create partial secondary composite index

Now, let's create the partial secondary composite index with id and country.


1. Index condition is equal predicate. So, it is not required to include in the index keys.

2. This makes index LEAN and improve performs better (saves I/O, memory, CPU, Network).

<pre id="example"> 
CREATE INDEX ts_ix1 ON `travel-sample`(id, country) WHERE type = "airline";
</pre>
