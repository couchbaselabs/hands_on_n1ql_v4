# Part 5 : Deep dive into Data modeling: Exploiting Arrays and Objects

## Arrays 

 * Arrays can be simple: made up of scalar values.
  
 * Arrays can be complex: Made up of objects
  
 * Arrays can be anything: Made up mixture of scalar values, objects, arrays, objects containain arrays!


<pre>
SELECT public_likes 
FROM  `travel-sample` 
WHERE type = 'hotel'
LIMIT 10;
</pre>

<pre id="example"> 
/* Simple Array of Scalars */
SELECT public_likes 
FROM  `travel-sample` 
WHERE type = 'hotel'
LIMIT 10;
</pre>

