# Part 5 : Arrays : Array Indexing

Index array elements, attributes within arrays of objects, attributes with objects of arrays, at any level.


<pre>
SELECT * FROM `travel-sample`
WHERE type = "route" 
AND ANY v IN schedule SATISFIES v.flight = 'AA566' END 
AND stops = 0;
</pre>

<pre id="example"> 
SELECT * FROM `travel-sample`
WHERE type = "route" 
AND ANY v IN schedule SATISFIES v.flight = 'AA566' END 
AND stops = 0;
</pre>

