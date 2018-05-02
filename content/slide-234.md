# Part 10: N1QL QUERY OPTIMIZATION IN 5.5

## Prepared Statements in Cluster

Let's learn some details of the N1QL Auto-Prepare function:

- N1QL nodes will validate the plans before instantiating execution trees.
- The statement will be silently prepared from scratch if the plan is stale.
- New plan will be propagated to all other nodes.
- Optimizations in place to avoid checking plans in their entirety if no schema change across the cluster.

