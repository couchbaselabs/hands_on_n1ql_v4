# Part 6 : Query Optimization And Query Tuning

## Example #5: Creating the right index for the query


What will be the index for following query?
Can we rewrite the query to perform better?
<pre> 
SELECT id
FROM `travel-sample`
WHERE type = "airline" AND country = "United States" AND id BETWEEN 10 AND 1000
ORDER BY country, id  DESC
LIMIT 10;

SELECT *
FROM `travel-sample`
WHERE type = "airline" AND country = "United States" AND id BETWEEN 10 AND 1000
ORDER BY country, id  DESC
LIMIT 10;
</pre>

<pre id="example"> 
SELECT id
FROM `travel-sample`
WHERE type = "airline" AND country = "United States" AND id BETWEEN 10 AND 1000
ORDER BY country, id  DESC
LIMIT 10;
</pre>
