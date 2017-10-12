# Part 9 : N1QL Query Optimization IN 5.0


## Index cas and expiration


### Query usinf Index cas and expiration

* META().cas, META().expiration can be indexed and used in queries.
* Note: META().expiration will work in covered queries. For non covered queries it gives 0


Now, let's do EXPLAIN on the following query

<pre>
SELECT  country, META().cas, META().expiration
        FROM `travel-sample`
                   WHERE type = "airport" AND  country = "United States";

</pre>

<pre id="example"> 
EXPLAIN 
SELECT  country, META().cas, META().expiration
        FROM `travel-sample`
                   WHERE type = "airport" AND  country = "United States";
</pre>
