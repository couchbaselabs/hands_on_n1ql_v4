# Part 6 : Query Optimization And Query Tuning

## Example #3: Creating the right index for the query

Execute this query and look at the results.

Now prefix EXPLAIN to this query. Execute the query and examine the query plan.

Query plan shows it only doing index scan on the the values that we are interested.


<pre> 
CREATE INDEX ts_name ON `travel-sample` (IFMISSINGORNULL(name,999));
</pre>

<pre id="example"> 
SELECT META().id
FROM `travel-sample`
WHERE IFMISSINGORNULL(name,999) IN ["The Rock Store", 999];
</pre>
