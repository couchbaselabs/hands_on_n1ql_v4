# Part 6 : Query Optimization And Query Tuning

## Example #2: Creating the right index for the query

Execute this query and look at the results.

Now prefix EXPLAIN to this query. Execute the query and examine the query plan.

* Query has ANY on ARRAY, so we can use ARRAY indexinga key
* type has predicate, so we can use partail index
* stops, id as predicates, so we can use composite index
* Array index key can produce duplicate document keys, not able to push LIMIT and OFFSET to indexer.
* IN has multiple elements due to that it has multiple spans, so we can't use Index order.
* The variables in ARRAY index key and ANY clause in query needs to be matched.
* schedule needs to be in the index key to make it covered query due to while applying predicate we need the schedule.

<pre> 
CREATE INDEX ts_aix1 ON `travel-sample` (stops, 
         DISTINCT ARRAY v.day FOR v IN schedule END, id, airlineid, schedule)
         WHERE type = "route";
</pre>

<pre id="example"> 
SELECT stops, id, airlineid, schedule
FROM `travel-sample`
WHERE type = "route"
       AND stops = 0
       AND id BETWEEN 10 AND 1000
       AND ANY v IN schedule SATISFIES v.day IN [1,2] END
ORDER BY stops, id
OFFSET 5
LIMIT 10;
</pre>
