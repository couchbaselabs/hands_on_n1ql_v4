# Part 10: N1QL QUERY OPTIMIZATION IN 5.5

## Index Partitioning

Let's consider an example with predicates on the hash keys, in which hash-partitioning can help to identify the exact partition to be used for index scan and eliminate the non-matching partitions.

To benefit from this partition pruning, two conditions should be met:

- The predicate must be an exact match alphabetically on the partition keys. 

- Equality condition and IN clause in predicates.

<pre id="example">
SELECT * 
FROM customer 
WHERE type = "customer" 
AND postalCode IN ["87102", "22539", "93048"]
AND state = "CA"
</pre>
