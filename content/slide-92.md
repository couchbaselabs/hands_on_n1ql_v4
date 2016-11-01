# Part 5 : Deep dive into Data modeling: Exploiting Arrays and Objects

## Querying Objects

You can not only access attributes (fields) within the object, you can use them in predicates.

<pre>
select name, city 
from `travel-sample` h 
where geo.accuracy = "ROOFTOP" 
      and geo.lat between 37.7 and 37.8
      and geo.lon between -122.4 and -122.3;
</pre>

<pre id="example"> 
select name, city 
from `travel-sample` h 
where geo.accuracy = "ROOFTOP" 
      and geo.lat between 37.7 and 37.8
      and geo.lon between -122.4 and -122.3;
</pre>
