# Part 6 : Query Optimization And Query Tuning

## Example #4: Creating the right index for the query

Let's execute EXPLAIN and observer query plan.

* The inner subquery uses coveredscan and produces qualified document keys.
* The outer query does Fecth of the qualified documents only

<pre>
CREATE INDEX ts_sdate ON `travel-sample` (startdate, enddate);
CREATE INDEX ts_edate ON `travel-sample` (enddate, startdate);
</pre>

<pre id="example"> 
EXPLAIN 
SELECT ts
FROM (SELECT RAW META().id
      FROM `travel-sample`
      WHERE "2016-11-07" BETWEEN startdate AND enddate
     ) q1
INNER JOIN
`travel-sample` ts ON KEYS q1
WHERE "2016-11-07" BETWEEN ts.startdate AND ts.enddate;
</pre>
