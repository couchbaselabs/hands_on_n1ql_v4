# Part 5 : Deep dive into Data modeling: Exploiting Arrays and Objects

## Arrays 
 
 * Arrays can be simple: made up of scalar values.
  
 * Arrays can be complex: Made up of objects
  
 * Arrays can be anything: Made up mixture of scalar values, objects, arrays, objects containain arrays!


<pre>
SELECT reivews 
FROM  `travel-sample` 
WHERE type = 'hotel'
LIMIT 1;
</pre>

<pre id="example"> 
/* Simple Array of nested objects & arrays */
SELECT reviews 
FROM  `travel-sample` 
WHERE type = 'hotel'
LIMIT 1;
</pre>

