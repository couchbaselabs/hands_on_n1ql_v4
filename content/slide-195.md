# Part 9 : N1QL Query Optimization IN 5.0

##  Implicit Covering Array Index


### Query using Implicit Covering Array Index

* N1QL supports simplified Implicit Covering Array Index syntax in certain cases where the mandatory array index-key requirement is relaxed to create a covering array-index. 
* The predicates that can be exactly and completely pushed to the indexer during the array index scan.
* No false positives


Now, let's do EXPLAIN on the following query

<pre>
SELECT meta().id 
FROM `travel-sample` 
WHERE type = "route" AND 
               ANY v IN schedule SATISFIES v.flight LIKE 'UA%' END;
</pre>

<pre id="example"> 
EXPLAIN 
SELECT meta().id 
FROM `travel-sample` 
WHERE type = "route" AND 
               ANY v IN schedule SATISFIES v.flight LIKE 'UA%' END;
</pre>
