# Part 6 : Query Optimization And Query Tuning

## Example #1: Creating the right index for the query

### Using Primary Index

Execute this query and look at the executionTime.

Now prefix EXPLAIN to this query. Execute the query and examine the index section of the query plan.


1. Query uses primary scan

2. Get the item keys, Fetch the items and apllies predicates.

3. Bucket has 31591 items and it fetched all of them.


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
