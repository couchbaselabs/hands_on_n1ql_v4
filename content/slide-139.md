# Part 6 : Query Optimization And Query Tuning

## Example #3: Creating the right index for the query

Execute this query and look at the results.

Now prefix EXPLAIN to this query. Execute the query and examine the query plan.

<pre id="example"> 
SELECT META().id
FROM `travel-sample` USE INDEX(ts_name)
WHERE META().id > ""
      AND ( name IS MISSING 
            OR name IS NULL
            OR name = "The Rock Store");
</pre>
