# Part 10: N1QL QUERY OPTIMIZATION IN 5.5

## Index Grouping and Aggregation

Let's see an example with GROUP BY and aggregation with array index.
Create an index as shown in the query window and try the query below:
<br>
<pre>
SELECT   d.c0 AS c0, 
	         d.c1 AS c1, 
        	 SUM(d.c3) AS sumc3, 
        	 AVG(d.c4) AS avgc4, 
         	 COUNT(DISTINCT d.c2) AS dcountc2 
FROM     cars  AS d 
WHERE    d.c0 > 0 
AND      type = "agg" 
AND      d.c1 >= 10 
AND      any v IN d.a1 satisfies v.id = 3 END
GROUP BY d.c0, 
         	d.c1 
ORDER BY d.c0, 
         	d.c1 
OFFSET   1 
LIMIT    1
</pre>
<br>
In order for the query with array index to benefit from index grouping and aggregation, the following conditions should be met:

- The ANY clause can be covered by the array index. 
- The SATISFIES predicate has a single equality predicate.
- The array index key has DISTINCT modifier.



<pre id="example">
CREATE INDEX idxad1 ON cars(c0, c1, DISTINCT ARRAY v.id FOR v IN a1 END, c2, c3, c4) WHERE type="agg"
</pre>
