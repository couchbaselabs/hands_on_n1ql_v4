# Part 6 : Query Optimization And Query Tuning

## Example #1: Creating the right index for the query

### Using Secondary Index

Execute this query and look at the executionTime.

Now prefix EXPLAIN to this query. Execute the query and examine the index section of the query plan.


1. Query uses secondary index and pushes type predicate to indexer. This result in 187 items.

2. id, country predicates are not pushed to indexer and those are applied after fetching the items

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
