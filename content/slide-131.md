# Part 6 : Query Optimization And Query Tuning

## Example #1: Creating the right index for the query

### Using Covering Partial Secondary Composite Index

Execute this query and look at the executionTime.

Now prefix EXPLAIN to this query. Execute the query and examine the index section of the query plan.

### Final Index & Query
<pre>
    CREATE INDEX ts_ix1 ON `travel-sample`
        (country, id, name) WHERE type = "airline";

    SELECT country, id, name
         FROM `travel-sample`
         WHERE type = "airline"
               AND country = "United States"
               AND id BETWEEN 10 AND 1000
         ORDER BY country, id
         OFFSET 5
         LIMIT 10;
</pre>


<pre id="example"> 
SELECT country, id, name
FROM `travel-sample`
WHERE type = "airline"
      AND country = "United States"
      AND id BETWEEN 10 AND 1000
ORDER BY country, id
OFFSET 5
LIMIT 10;
</pre>
