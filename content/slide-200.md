# Part 9 : N1QL Query Optimization IN 5.0


## DESC Index Collation


### DESC Index Collation


* Index can be created with ASC/DESC collation on each index key
* Query can utilize index collation


Now, let's do EXPLAIN on the following query

<pre>
EXPLAIN 
EXPLAIN SELECT country,  city
FROM `travel-sample`
WHERE type = "airline" AND 
               country >= "United States"
ORDER BY country DESC , city
OFFSET 1 
LIMIT 10;
</pre>

<pre id="example"> 
EXPLAIN 
SELECT country,  city
FROM `travel-sample`
WHERE type = "airline" AND 
               country >= "United States"
ORDER BY country DESC , city
OFFSET 1 
LIMIT 10;
</pre>
