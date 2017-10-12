# Part 9 : N1QL Query Optimization IN 5.0


## Pagination (ORDER, OFFSET, LIMIT)


### Query using Pagination (ORDER, OFFSET, LIMIT)


* Pagination queries can contain any combination of ORDER, LIMIT, OFFSET clauses.
* Predicates are completely and exactly pushed to indexer, by pushing offset, limit to indexer can improve query performance significantly.  If that happened IndexScan2 section of EXPLAIN will have limit, offset.
* If query ORDER BY matches index key order query can exploit index order and avoid sort. If that happened order operator is not present in the EXPLAIN.


Now, let's do EXPLAIN on the following query

<pre>
SELECT country,  city
FROM `travel-sample`
WHERE type = "hotel" AND 
               country >= "United States"
ORDER BY country, city
OFFSET 1
LIMIT 10;
</pre>

<pre id="example"> 
EXPLAIN 
SELECT country,  city
FROM `travel-sample`
WHERE type = "hotel" AND 
               country >= "United States"
ORDER BY country, city
OFFSET 1 
LIMIT 10;
</pre>
