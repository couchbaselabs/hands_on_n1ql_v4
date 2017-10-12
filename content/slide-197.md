# Part 9 : N1QL Query Optimization IN 5.0


## Efficiently Pushdown Composite Filters


### Query using Efficiently Pushdwon of Composite Filters


* Earlier versions composite Index the spans that pushed to indexer contains single range for all composite keys together. 
* Indexer will not applying range for each part of the key separately. This may result in lot of false positives.
* In 5.0.0 with IndexScan2 each index key range separately pushed and indexer will apply keys separately. 
* This results in no/less false positives and aides push more information to indexer.

Now, let's do EXPLAIN on the following query

<pre>
SELECT name,  country,  city
FROM `travel-sample`
WHERE type = "hotel" AND 
               country >= "United States" AND
               city = "San Francisco";
</pre>

<pre id="example"> 
EXPLAIN 
SELECT name,  country,  city
FROM `travel-sample`
WHERE type = "hotel" AND 
               country >= "United States" AND
               city = "San Francisco";
</pre>
