# Part 6 : Query Optimization And Query Tuning

## Example #3: Creating the right index for the query


Now, let's create the covering secondary composite index


* META().id is document key which is unique, string and always present
* This does complete secondary index scan and this not optimized.

<pre id="example"> 
CREATE INDEX ts_name ON `travel-sample`(META().id, name);
</pre>
