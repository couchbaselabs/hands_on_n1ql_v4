# Part 5 : Index using attributes within the fields.

## Create index on any of the fields within objects.
Any of the index key or fields used in the CREATE INDEX's WHERE clause can be an object or field within an object.


<pre>
CREATE INDEX idxgeo1 
    ON `travel-sample`
     (geo.accuracy, 
      geo.lat, 
      geo.lon) 
WHERE type = 'hotel';
</pre>

<pre id="example"> 
CREATE INDEX idxgeo1 
    ON `travel-sample`
     (geo.accuracy, 
      geo.lat, 
      geo.lon) 
WHERE type = 'hotel';
</pre>
