# Part 6 : Query Optimization And Query Tuning

## Example #2: Creating the right index for the query

What will be the index for the following query?
<pre> 
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
