# Part 6 : Query Optimization And Query Tuning

## Example #1: Creating the right index for the query

### Create covering partial secondary composite index

Now, let's create the covering partial secondary composite index with id, country and name.


* Query uses type, id, country and name.

* The type is part of the index condition, id and country are index keys. 

* Only missing is name. Let's add it as trailing index key.

<pre id="example"> 
CREATE INDEX ts_ix1 ON `travel-sample`(id, country, name) WHERE type = "airline";
</pre>
