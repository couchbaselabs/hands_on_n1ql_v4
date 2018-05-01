# Part 10: N1QL QUERY OPTIMIZATION IN 5.5

## Index Partitioning

Let's consider an example without all partition keys in the predicates. 

<br>
In this situation, partition elimination is not applicable. 

However, index partitioning can still help to issue parallel scans on multiple indexer nodes simultaneously thus reduce the query latency.


<pre id="example">
SELECT * 
FROM customer 
WHERE type = "customer" 
AND ccInfo.cardType = "discover"
AND state = "CA"
</pre>
