## <b> Part 10: N1QL QUERY OPTIMIZATION IN 5.5 </b>

## Index Partitioning

Couchbase 5.5 introduces automatic hash partitioning of the index to provide us increased capacity, better queriability and higher performance.

Hash-partitioning assigns the index keys into multiple nodes by hashing on the partition keys. 
To enable this feature, simply add a "PARTITION BY" clause into the CREAGE INDEX defination as shown in the query window. 

The "HASH(index keys)" is the basis on which the index is divided into a number of physical partitions with each one stored on one of the index nodes on the cluster. 

The default number of index partitions is 16, and the optional "WITH{"number_partiion":8}" expression can help to customerize this value.


To get more details of this hash-partitioned index, run the below query to extract the meta data from system:indexes. 
<br>

<pre>
SELECT * 
FROM system:indexes 
WHERE keyspace_id = "customer" and name = "ih";
</pre>



<pre id="example">
CREATE INDEX ih ON customer(ccInfo.cardType, state, postalCode, lastName) 
PARTITION BY HASH(state, postalCode) 
WHERE type = "customer" WITH {"num_partition":8}
</pre>

