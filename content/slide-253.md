## <b> Part 10: N1QL QUERY OPTIMIZATION IN 5.5 </b>
  
## Prepared Statements in Cluster


In Couchbase 5.5, we can expect some key improvements on the prepared statements as described below.

N1QL service introduces two processes to handle the propagation of prepared statements in cluster:

-  PUSH: At prepare time, an asynchronous thread will distribute the new prepared statement to all known (and up) N1QL nodes in the cluster.
- PULL: At execution time, if the prepared statement is not found locally, the executing node will retrieve the prepared statement from the node on which it had been prepared.

Along with this automatic propogation, supplying the encoded plan via encoded_plan REST API parameter still works as usual.
