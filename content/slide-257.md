# Part 10: N1QL QUERY OPTIMIZATION IN 5.5

## Prepared Statements in Cluster

We should still be aware of some gotchars for prepared statements:

- If a change occurs when the statement has been validated but not yet been instantiated, an error may happen. In this case, executing again will kick re-prepare in and work well (No other special action required).
- Statements can disappear in individual nodes because of prepared cache churn, users actively deleting the prepared statements or nodes simply going down and restarting.
