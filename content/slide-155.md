# Part 6 : Query Optimization And Query Tuning

## Example #5: Creating the right index for the query


Let's execute query and look at executionTime.

Now prefix EXPLAIN to this query. Execute the query and examine the query plan.

* The index uses negative numeric value.
* Predicate is modified to use negative value.
* ORDER BY changed to use negative value and removed DESC word.


<pre> 
CREATE INDEX ts_ix1 ON `travel-sample`(country, -id) WHERE type = "airline";
</pre>

<pre id="example"> 
SELECT -(-id)
FROM `travel-sample`
WHERE type = "airline" AND country = "United States" AND -id BETWEEN -1000 AND -10
ORDER BY country, -id
LIMIT 10;
</pre>
