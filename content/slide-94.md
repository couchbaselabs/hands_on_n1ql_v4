# Part 5 : Deep dive into Data modeling: Exploiting Arrays and Objects

## Verify the usage of index with appropriate query.

EXPLAIN the query the appropriate object. 

<pre>
EXPLAIN select name, city from `travel-sample` h 
WHERE type = 'hotel' 
      and geo.accuracy = 'ROOFTOP' 
      and geo.lat between 37.7 and 37.8
      and geo.lon between -122.4 
                             and -122.3;
</pre>

<pre id="example"> 
EXPLAIN select name, city from `travel-sample` h 
WHERE type = 'hotel' 
      and geo.accuracy = 'ROOFTOP' 
      and geo.lat between 37.7 and 37.8
      and geo.lon between -122.4 
                             and -122.3;
</pre>
