# Part 10: N1QL QUERY OPTIMIZATION IN 5.5

## ANSI JOIN

Try the ANSI LEFT JOIN clause to query the airport and its departing airlines.

<br>

<pre id="example">
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

