# Part 10: N1QL QUERY OPTIMIZATION IN 5.5
## ANSI JOIN
ANSI JOIN allows hints to be specified on keyspaces on both left and right sides of ANSI JOIN.

Add USE INDEX hint to the previous query and check the execution plan.

Create another secondary index on "route.sourceairport" and use it in the query, the indexScan will change accordingly.
<br>
<pre>
CREATE INDEX route_sourceairport ON `travel-sample`(sourceairport) WHERE type = "route" 
</pre>

<br>
<pre>
EXPLAIN SELECT airport.airportname, 
       	       route.airlineid 
FROM   `travel-sample` airport 
       LEFT JOIN `travel-sample` route USE INDEX(route_sourceairport) 
              ON airport.faa = route.sourceairport 
                 AND route.type = "route" 
WHERE  airport.type = "airport" 
       AND airport.city = "San Francisco" 
       AND airport.country = "United States"; 
</pre>



<pre id="example">
EXPLAIN SELECT airport.airportname, 
	       route.airlineid 
FROM   `travel-sample` airport 
       LEFT JOIN `travel-sample` route USE INDEX(route_airports) 
              ON airport.faa = route.sourceairport 
                 AND route.type = "route" 
WHERE  airport.type = "airport" 
       AND airport.city = "San Francisco" 
       AND airport.country = "United States"; 
</pre>

