# Part 9 : N1QL Query Optimization IN 5.0


## MAX Pushdown 


### Query Exploiting Index Collation for MAX


* If the MAX arguments matched with Index leading key exploit index order for MAX. 
* MAX can only  be use DESC on leading index key. 
* MIN can only  be use ASC on leading index key. 
* If pushdown happens "limit: 1 will appear in IndexScan2 section of the EXPLAIN.


Now, let's do EXPLAIN on the following query

<pre>
SELECT MAX(country)
FROM `travel-sample`
WHERE type = "airline" AND 
               country >= "United States";
</pre>

<pre id="example"> 
EXPLAIN 
SELECT MAX(country)
FROM `travel-sample`
WHERE type = "airline" AND 
               country >= "United States";
</pre>
