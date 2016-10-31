# Part 6 : Query Optimization And Query Tuning

## Example #4: Creating the right index for the query


Let's execute EXPLAIN and observer query plan.

* Now change the prrojection to *
* Execute EXPLAIN and observe the query plan.
* Indexer can produce many items and later can be eliminated by query predicate.
* Due to non-covered scan, we need to to Fetch the document before predicate is appiled.

<pre id="example"> 
EXPLAIN SELECT META().id
FROM `travel-sample`
WHERE "2016-11-07" BETWEEN startdate AND enddate;
</pre>
