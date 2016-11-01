# Part 5 : Deep dive into Data modeling: Exploiting Arrays and Objects

## Arrays : NEST

**REVIEW**

  NEST is the inverse of UNNEST.

  Nesting is conceptually the inverse of unnesting. Nesting performs a join across two keyspaces. But instead of producing a cross-product of the left and right inputs, a single result is produced for each left input, while the corresponding right inputs are collected into an array and nested as a single array-valued field in the result object.

<pre>
SELECT * 
FROM `travel-sample` route
NEST `travel-sample` airline  
     ON KEYS route.airlineid 
WHERE route.type = ‘airline' LIMIT 1;
</pre>

<pre id="example"> 
SELECT * 
FROM `travel-sample` route
NEST `travel-sample` airline  
     ON KEYS route.airlineid 
WHERE route.type = ‘airline' LIMIT 1;
</pre>

