# Part 6 : Query Optimization And Query Tuning

## Example #1: Creating the right index for the query

### Using Partial Secondary Composite Index

Execute this query and look at the executionTime.

Now prefix EXPLAIN to this query. Execute the query and examine the index section of the query plan.


1. Query uses partial secondary index and pushes all the predicates to indexer. This result in 18+ items.

2. This index has only "airline" items present in the bucket.

3. type in not part of the index keys. N1QL can derive the type value from the index condition and answer the query.

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
