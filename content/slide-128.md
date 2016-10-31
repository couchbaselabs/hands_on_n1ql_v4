# Part 6 : Query Optimization And Query Tuning

## Example #1: Creating the right index for the query

### LIMIT Pushdown to Indexer

* Pushing down the limit to indexer, allows to hint to indexer how many documents it can produce and reduce unnecessary work.
* This allows scale up the cluster.
* LIMIT can be pushed down to indexer:
    * When query does not have ORDER BY
    * Query uses index order
    * Exact predicates are pushed down to indexer and N1QL will not eliminate any documents (i.e. no false positives from indexer)
* N1QL scans are Range scan, Indexer produces range scan on complete composite key. Document contains  {“id”: 11, “country”: “United Kingdom”}  will produced by indexer and N1QL will apply individual predicates and eliminate it.
* For this query LIMIT can’t be pushed to indexer.


<pre id="example"> 
EXPLAIN SELECT country, id, name
FROM `travel-sample`
WHERE type = "airline"
      AND country = "United States"
      AND id BETWEEN 10 AND 1000
ORDER BY id
OFFSET 5
LIMIT 10;
</pre>
