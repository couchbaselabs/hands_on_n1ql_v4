# Part 10: N1QL QUERY OPTIMIZATION IN 5.5

## Index Partitioning

Let's see how GROUP BY and aggregation work together with hash-partitioned index.

Create a partitioned index as shown in the query window and take a look at the following examples.

Example a:
<br>
<pre>
SELECT postalCode, 
		COUNT(*) cnt
FROM customer 
WHERE type = "customer" 
AND ccInfo.cardType is not missing
GROUP BY ccInfo.cardType, 
		state, 
		postalCode
</pre>
<br>
In this query, the GROUP BY is on the leading index keys with partition ones included. Thus an IndexScan can generate the results.

<br>

Example b:
<br>
<pre>
SELECT postalCode, COUNT(*) cnt
FROM customer 
WHERE type = "customer" 
AND ccInfo.cardType = "mastercard"
GROUP BY state, 
		postalCode
</pre>
<br>
This query can also be satisfied with an IndexScan:

- The GROUP BY contains all the partition.
- The WHERE clause is an equality prediction on the leading index key.

<br>


Example c:
<br>
<pre>
SELECT postalCode, 
	COUNT(*) cnt
FROM customer 
WHERE type = "customer" 
AND ccInfo.cardType in ["mastercard", "discover", "visa"]
GROUP BY state, 
		postalCode
</pre>
<br>

This query contains a range predicate on the leading index key. Thus a scatter-gather method will apply with a partial aggregation in the index scan and a group merge phase afterwards.


