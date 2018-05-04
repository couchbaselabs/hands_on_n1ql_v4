# Part 10: N1QL QUERY OPTIMIZATION IN 5.5

## ANSI JOIN

Try the query with chained ANSI JOIN as shown, we can also see that the ON-clause is a complex expression.
<br>
Keep in mind that when ANSI JOINs are chained, a RIGHT OUTER JOIN can only be the first join specified.

<pre id="example">
SELECT 	airline.name,
        route.sourceairport,
        airline.id,
        route.destinationairport
FROM   `travel-sample` airport
       	INNER JOIN `travel-sample` route
               	ON airport.faa = route.sourceairport
                   AND route.type = "route"
       	INNER JOIN `travel-sample` airline
                ON route.airlineid = "airline_" || tostring(airline.id)
                   AND airline.type = "airline"
WHERE  airport.type = "airport"
LIMIT  2;
</pre>


