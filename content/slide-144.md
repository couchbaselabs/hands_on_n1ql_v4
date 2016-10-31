# Part 6 : Query Optimization And Query Tuning

## Example #4: Creating the right index for the query


What will be the index for following query?
Can we rewrite the query to perform better?
<pre> 
SELECT META().id
FROM `travel-sample`
WHERE "2016-11-07" BETWEEN startdate AND enddate;

SELECT *
FROM `travel-sample`
WHERE "2016-11-07" BETWEEN startdate AND enddate;
</pre>

<pre id="example"> 
SELECT META().id
FROM `travel-sample`
WHERE "2016-11-07" BETWEEN startdate AND enddate;
</pre>
