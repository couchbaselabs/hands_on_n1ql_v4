# Part 10: N1QL QUERY OPTIMIZATION IN 5.5
## ANSI JOIN
ANSI JOIN supports chained multiple joins in one query clause.

Create a secondary index on the third keyspace to be joined as shown in the query.

Try the query below, in which the ON-clause is a complex expression.
<br>
<pre>
SELECT airline.name, 
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

<br>
Keep in mind that when ANSI JOINs are chained, a RIGHT OUTER JOIN can only be the first join specified.



<pre id="example">
CREATE INDEX airline ON `travel-sample`(id) WHERE type = "airline"
</pre>
