# Part 6 : Query Optimization And Query Tuning

## Example #1: Creating the right index for the query

### Using Secondary Composite Index

Execute this query and look at the executionTime.

Now prefix EXPLAIN to this query. Execute the query and examine the index section of the query plan.


1. Query uses secondary index and pushes all the predicates to indexer. This result in 18+ items.

2. This index has all other non-related items that present in the bucket.


<pre id="example"> 
SELECT country, id, name
FROM `travel-sample`
WHERE type = "airline"
      AND country = "United States"
      AND id BETWEEN 10 AND 1000
ORDER BY id
OFFSET 5
LIMIT 10;
</pre>
