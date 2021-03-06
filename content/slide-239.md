# Part 10: N1QL QUERY OPTIMIZATION IN 5.5
  
## Index Grouping and Aggregation

Let's consider the example in the query window.

For UNNEST to use array index thus benefit from index grouping and aggregation, two conditions should be met:

- The array index must be leading key.
- The array variable in the index must match with UNNEST alias.


<pre id="example">
SELECT 	v.id AS id,
        d.c0 AS c0,
        SUM(v.id) AS sumid,
        AVG(d.c1) AS avgc1
FROM  	cars  AS d UNNEST d.a1 AS v
WHERE 	v.id > 0
        AND d.type = "agg"
GROUP BY	v.id,
         	d.c0
</pre>

