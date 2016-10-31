# Part 6 : Query Optimization And Query Tuning

## Example #5: Creating the right index for the query


Let's execute query and look at executionTime.

Now prefix EXPLAIN to this query. Execute the query and examine the query plan.

* Query not able to exploit index order due to DESC. 
* Not able to push limit to indexer.
* Scan all qualified items, sort and apply the limit. 
* Query time depends on number of qualified items.
* Now change projection to * and repat the above steps.
* It requires Fetch the items too.



<pre id="example"> 
SELECT id
FROM `travel-sample`
WHERE type = "airline" AND country = "United States" AND id BETWEEN 10 AND 1000
ORDER BY country, id  DESC
LIMIT 10;
</pre>
