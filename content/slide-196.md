# Part 9 : N1QL Query Optimization IN 5.0


## Stable Scans


### Query using Stable Scans


* Earlier versions IndexScan use to do single range scan (i.e single Span)
* If the query has multiple ranges (i.e. OR, IN, NOT clauses) N1QL use to do separate IndexScan for each range. 
* This causes Indexer can use different snapshot for each scan (make it unstable scan)
* Number of IndexScans  are higher, result in  increase in index connections.
* In 5.0.0  multiple ranges are passed into indexer and indexer uses same snapshot for all the ranges.
* If Explain shows operator IndexScan2, It uses stables Scans.


Now, let's do EXPLAIN on the following query

<pre>
SELECT name,  country,  city
FROM `travel-sample`
WHERE type = "hotel" AND 
               country IN ["United States" , "France"];
</pre>

<pre id="example"> 
EXPLAIN 
SELECT name,  country,  city
FROM `travel-sample`
WHERE type = "hotel" AND 
               country IN ["United States" , "France"];
</pre>
