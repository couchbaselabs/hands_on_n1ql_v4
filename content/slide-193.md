# Part 9 : N1QL Query Optimization IN 5.0

##  IntersectScan


### Query using IntersectScan

* IntersectScan is improved by terminating scans early when one of the scan completed or limit is reached. Also only completed scan results are considered as possible candidates.
* If query has ORDER BY and predicate on the order by clausesand when possible it uses OrderedIntersectScan.

Now, let's do EXPLAIN on the following query

<pre>
SELECT name, country, city 
FROM `travel-sample` 
WHERE type = "hotel" AND 
              country = "United States"  AND 
              city = "San Francisco" AND
              name >= "White Wolf"
ORDER BY name;
</pre>

<pre id="example"> 
EXPLAIN
SELECT name, country, city 
FROM `travel-sample` 
WHERE type = "hotel" AND 
              country = "United States"  AND 
              city = "San Francisco" AND
              name >= "White Wolf"
ORDER BY name;
</pre>
