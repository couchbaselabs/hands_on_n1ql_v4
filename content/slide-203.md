# Part 9 : N1QL Query Optimization IN 5.0


## Index Projection


### Query Exploiting Index Projection


* The index can have many keys but query might be interested only subset of keys. 
* By only requesting required information from indexer can save lot of network transportation, memory, cpu, backfill etc. All this can help in performance and scaling the cluster.  
* The requested information can be found in "IndexScan2" Section of EXPLAIN as "index_projection"

<pre>
    "index_projection": {
             "entry_keys": [ xxx,....... ]
             "primary_key": true
            }

</pre>

Now, let's do EXPLAIN on the following query

<pre>
SELECT  country FROM `travel-sample`
                   WHERE type = "hotel" AND  country >= "United States";

SELECT  country,city FROM `travel-sample`
                   WHERE type = "hotel" AND  country >= "United States" ;

SELECT  country,city, META().id FROM `travel-sample`
                   WHERE type = "hotel" AND  country >= "United States" ;

SELECT  country,city, META().id, name
                   FROM `travel-sample`
                   WHERE type = "hotel" AND  country >= "United States" ;
</pre>

<pre id="example"> 
EXPLAIN 
SELECT  country FROM `travel-sample`
                   WHERE type = "hotel" AND  country >= "United States";

</pre>
