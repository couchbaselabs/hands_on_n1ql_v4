# Part 5 : Deep dive into Data modeling: Exploiting Arrays and Objects

## Arrays 

N1QL has large number of ARRAY expressions, functions and aggregates.

ARRAY: The ARRAY operator lets you map and filter the elements or attributes of a collection, object, or objects. It evaluates to an array of the operand expression, that satisfies the WHEN clause, if provided

<pre>
SELECT ARRAY [name, r.ratings.`Value`] 
            FOR r IN reviews 
                WHEN r.ratings.`Value` <= 4        
       END 
FROM `travel-sample` 
WHERE type = 'hotel';
</pre>

<pre id="example"> 
SELECT ARRAY [name, r.ratings.`Value`]
            FOR r IN reviews
                WHEN r.ratings.`Value` <= 4
       END
FROM `travel-sample`
WHERE type = 'hotel';
</pre>

