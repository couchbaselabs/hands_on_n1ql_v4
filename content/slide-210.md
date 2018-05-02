# Part 10: N1QL QUERY OPTIMIZATION IN 5.5

## ANSI JOIN


Modify the previous query clause to ANSI RIGHT OUTER JOIN by switching the left and right hand side keyspaces.

<pre id="example">
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

