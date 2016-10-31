# Part 6 : Query Optimization And Query Tuning

## Example #1: Creating the right index for the query

### Query Exploit Index Order

Execute the EXPLAIN of the query and look at the query plan.


1. Query order by expressions matches index keys from left to right.

2. Query doesn’t have any JOIN's, GROUP BY or Other clauses that can change the order produced by indexer.

3. Query exploit index order and avoid expensive sort and fetching lot of data unnecessarily in some cases.

4. The EXPLAIN  will not have order section.


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
