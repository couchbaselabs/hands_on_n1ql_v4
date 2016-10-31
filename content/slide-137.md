# Part 6 : Query Optimization And Query Tuning

## Example #3: Creating the right index for the query


What will be the  best covered secondary index for following query?
Can we rewrite the query to perform better?
<pre> 
SELECT META().id
FROM `travel-sample`
WHERE name IS MISSING OR name IS NULL OR name = "The Rock Store";
</pre>

<pre id="example"> 
SELECT META().id
FROM `travel-sample`
WHERE name IS MISSING OR name IS NULL OR name = "The Rock Store";
</pre>
