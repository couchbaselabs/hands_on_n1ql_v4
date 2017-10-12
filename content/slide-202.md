# Part 9 : N1QL Query Optimization IN 5.0


## COUNT (DISTINCT expr)


### Query Exploiting Index for COUNT (DISTINCT expr)


* If the expr matched with Index leading key, COUNT DISTINCT can be pushed to indexer
* Complete predicates needs to pushed to indexer exactly
* No false positives are possible
* No group or JOIN
* Only single projection
* When pushdown IndexCountDistinctScan2 will appear in EXPLAIN



Now, let's do EXPLAIN on the following query

<pre>
SELECT COUNT( DISTINCT country)
FROM `travel-sample`
WHERE type = "hotel" AND 
               country >= "United States";
</pre>

<pre id="example"> 
EXPLAIN 
SELECT COUNT( DISTINCT country)
FROM `travel-sample`
WHERE type = "hotel" AND 
               country >= "United States";
</pre>
