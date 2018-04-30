# Part 10: N1QL QUERY OPTIMIZATION IN 5.5

## ANSI JOIN

ANSI JOIN requires the right-hand side to be a keyspace and an appropriate secondary index on the joining fields of it.

We start with creating the required secondary index as shown in the query.


Try the ANSI LEFT JOIN clause below to query the airport and its departing airlines.

<br>

<pre>
SELECT airport.airportname, 
       route.airlineid 
FROM   `travel-sample` airport 
       LEFT JOIN `travel-sample` route 
              ON airport.faa = route.sourceairport 
                 AND route.type = "route" 
WHERE  airport.type = "airport" 
       AND airport.city = "San Francisco" 
       AND airport.country = "United States"; 
</pre>

<br>

This query can be modified to ANSI RIGHT OUTER JOIN by switching the left and right side keyspaces:

<pre>
SELECT airport.airportname, 
       route.airlineid 
FROM   `travel-sample` route 
       RIGHT JOIN `travel-sample` airport 
               ON airport.faa = route.sourceairport 
                  AND route.type = "route" 
WHERE  airport.type = "airport" 
       AND airport.city = "San Francisco" 
       AND airport.country = "United States"; 
</pre>




<pre id="example">
CREATE INDEX route_airports ON `travel-sample` (sourceairport, destinationairport) WHERE type = "route"; 
</pre>
