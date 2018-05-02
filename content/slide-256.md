# Part 10: N1QL QUERY OPTIMIZATION IN 5.5

## Prepared Statements in Cluster

There are fewer error types asking for actions in this new enhancement.

- 4040 - no such prepared: need prepare again.
  Eg. The executing node fails to retrieve the prepared statement anywhere else.
- 4001 - error repreparing: need to recreate/fix the required resources.
  Eg. Plan has to be reprepared when a needed resource changes -> When repreparing a needed resource couldn't be found-> Until the needed resource is recreated, executing the statement will keep on failing.
