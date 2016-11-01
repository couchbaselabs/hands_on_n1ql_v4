# Part 5 : Deep dive into Data modeling: Exploiting Arrays and Objects

## Querying Objects : Object references

Objects are references via dotted expression.
keyspace.object.object.attribute
keyspace.object.array[0].object.attribute

<pre>
select h.geo.lat, h.geo.lon from `travel-sample` h 
where type = 'hotel' 
      and city = 'San Francisco' 
      and meta().id = "hotel_25390" 
</pre>

<pre id="example"> 
select h.geo.lat, h.geo.lon 
from `travel-sample` h 
where type = 'hotel' 
      and city = 'San Francisco' 
      and meta().id = "hotel_25390" 
</pre>

