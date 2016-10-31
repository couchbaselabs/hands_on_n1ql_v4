# Part 6 : Query Optimization And Query Tuning

## Example #1: Creating the right index for the query

### LIMIT Pushdown to Indexer

* Query has equal predicate on country, if country is leading index key followed by id, indexer will not produce any false positives and allows LIMIT pushdown to indexer.
* But, The query order and index order different, this disallows LIMIT push down and requires sort.
* By closely looking the query, we have country as equal predicate. If we change to include ORDER BY country, id the query outcome will not change and we can use index order and push the LIMIT to indexer.

### Offset Pushdown to Indexer
* Currently we don’t offset to indexer separately. 
* In this case N1QL pushes limit  as limit + offset and applies limit and offset separately.


So, Clean-up the index;

<pre id="example"> 
DROP INDEX `travel-sample`.ts_ix1;
</pre>
