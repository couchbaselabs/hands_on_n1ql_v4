# Part 10: N1QL QUERY OPTIMIZATION IN 5.5

## ANSI JOIN

Use the new created index in the hints of previous query, we can see the IndexScan will change accordingly.


<pre id="example">
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
