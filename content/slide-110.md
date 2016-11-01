# Part 5 : Deep dive into Data modeling: Exploiting Arrays and Objects

## Arrays : Array Indexing

Index array elements, attributes within arrays of objects, attributes with objects of arrays, at any level.


<pre>
CREATE INDEX iflight_stops   ON `travel-sample` 
( stops, DISTINCT ARRAY v.flight FOR v IN schedule END )
WHERE type = "route" ;
</pre>

<pre id="example"> 
CREATE INDEX iflight_stops   ON `travel-sample` 
( stops, DISTINCT ARRAY v.flight FOR v IN schedule END )
WHERE type = "route" ;
</pre>