## <b> Part 10: N1QL QUERY OPTIMIZATION IN 5.5 </b>

## ANSI JOIN

ANSI JOIN is a standardized join syntax widely used in relational databases.

N1QL supports it to join on arbitrary conditions with any expressions involving any fields of the documents being joined.

ANSI JOIN syntax:
        lhs-expression [ join-type ] JOIN rhs-expression ON [ join-clause ]
        
Join-type: INNER, LEFT OUTER and RIGHT OUTER. Keywords "INNER/OUTER" are optional.

Join-clause: equi/non-equi join, multipe conditions, complex N1QL expressions.
 
We start with an example converting a lookup join into ANSI JOIN as shown in the qurey. 


The previous join clause is as below, the ANSI JOIN syntax for this query changes the "ON KEYS route.airlineid" syntax to "route.airlineid = META(airline).id".

<pre>
SELECT Count(*) AS num_airline 
FROM   `travel-sample` route 
       JOIN `travel-sample` airline 
               ON KEYS route.airlineid 
WHERE  route.type = "route" 
       AND route.destinationairport = "SFO"
</pre>


<br>
Switch to LEFT JOIN to see a slightly larger result which also counts the left-side documents that do not join with the right-hand side.



<pre id="example">
SELECT Count(*) AS num_airline 
FROM   `travel-sample` route 
        JOIN `travel-sample` airline 
               ON route.airlineid = Meta(airline).id 
WHERE  route.type = "route" 
       AND route.destinationairport = "SFO" 
</pre>


