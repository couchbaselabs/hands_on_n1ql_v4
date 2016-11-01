# Part 5 : Deep dive into Data modeling: Exploiting Arrays and Objects

## Sample documents from travel-sample.

### Let's look at Sample document from airline, airport, route, landmark and hotel.

airline has a simple flat structure.
airport, landmark, has geo objects.
route has array of objects in its schedule field.
hotel has array of reviews; each review can have individual attributes & ratings objects within it.


 
(SELECT * FROM `travel-sample` airline where type = 'airline' limit 1)
UNION ALL  
(SELECT * FROM `travel-sample` airport where type = 'airport' limit 1)
UNION ALL  
(SELECT * FROM `travel-sample` route where type = 'route' limit 1)
UNION ALL  
(SELECT * FROM `travel-sample` landmark where type = 'landmark' limit 1)
UNION ALL  
(SELECT * FROM `travel-sample` hotel where type = 'hotel' limit 1);

<pre id="example"> 
(SELECT * FROM `travel-sample` airline where type = 'airline' limit 1)
UNION ALL  
(SELECT * FROM `travel-sample` airport where type = 'airport' limit 1)
UNION ALL  
(SELECT * FROM `travel-sample` route where type = 'route' limit 1)
UNION ALL  
(SELECT * FROM `travel-sample` landmark where type = 'landmark' limit 1)
UNION ALL  
(SELECT * FROM `travel-sample` hotel where type = 'hotel' limit 1);
</pre>
