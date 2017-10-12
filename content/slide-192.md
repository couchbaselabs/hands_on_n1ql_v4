# Part 9 : N1QL Query Optimization IN 5.0

## UnionScan


### Query using UnionScan


* OR predicate can use multiple indexes.
* Each Index perform IndexScan and results are merged using UnionScan.
* Each IndexScan can push variable length of index keys.
* All IndexScan under UnionScan are covered the UnionScan is covered.

Now, let's do EXPLAIN on the following query

<pre>
SELECT name, country, city 
FROM `travel-sample` 
WHERE type = "hotel" AND 
           ((country = "United States" AND city = "San Francisco") 
            OR (name = "White Wolf"));
</pre>

<pre id="example"> 
EXPLAIN 
SELECT name, country, city 
FROM `travel-sample` 
WHERE type = "hotel" AND 
           ((country = "United States" AND city = "San Francisco") 
            OR (name = "White Wolf"));
</pre>
