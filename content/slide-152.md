# Part 6 : Query Optimization And Query Tuning

## Example #5: Creating the right index for the query


Let's execute query and examine query plan.

* Subquery uses covered index and produces only qualified items.
* Outer query Fetch the qualified documents only


<pre id="example"> 
EXPLAIN SELECT ts
FROM (SELECT RAW META().id
      FROM `travel-sample`
      WHERE type = "airline" AND country = "United States" AND id BETWEEN 10 AND 1000
      ORDER BY country, id DESC
      LIMIT 10
     ) AS q1
INNER JOIN
`travel-sample` ts ON KEYS q1
WHERE ts.type = "airline" AND ts.country = "United States" AND ts.id BETWEEN 10 AND 1000
ORDER BY ts.country, ts.id DESC
LIMIT 10;

</pre>
