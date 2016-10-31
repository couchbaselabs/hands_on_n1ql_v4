# Part 6 : Query Optimization And Query Tuning

## Example #4: Creating the right index for the query


Now, let's create the covering secondary composite index

<pre>
CREATE INDEX ts_sdate ON `travel-sample` (startdate, enddate);

CREATE INDEX ts_edate ON `travel-sample` (enddate, startdate);
</pre>

* Query can use any one of the above index.

<pre id="example"> 
CREATE INDEX ts_sdate ON `travel-sample` (startdate, enddate);
</pre>
