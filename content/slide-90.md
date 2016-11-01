# Part 5 : Deep dive into Data modeling: Exploiting Arrays and Objects

## Querying Objects : Referencing objects within arrays

<pre>
select reviews[*].ratings 
from `travel-sample` h 
where type = 'hotel' 
      and city = 'San Francisco' 
      and meta().id = "hotel_25390" ;

</pre>

<pre id="example"> 
select reviews[*].ratings 
from `travel-sample` h 
where type = 'hotel' 
      and city = 'San Francisco' 
      and meta().id = "hotel_25390" ;
</pre>

