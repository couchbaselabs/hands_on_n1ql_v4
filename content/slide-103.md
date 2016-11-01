# Part 5 : Deep dive into Data modeling: Exploiting Arrays and Objects

## Arrays 


  Arrays and Objects: Arrays are compared element-wise. Objects are first compared by length; objects of equal length are compared pairwise, with the pairs sorted by name.

 * IN clause: Use this when you want to evaluate based on specific field.
 * WITHIN clause: Use this when you don’t know which field contains the value you’re looking for. The WITHIN operator evaluates to TRUE if the right-side value contains the left-side value as a child or descendant. The NOT WITHIN operator evaluates to TRUE if the right-side value does not contain the left-side value as a child or descendant.
 * EVERY: EVERY is a range predicate that tests a Boolean condition over the elements or attributes of a collection, object, or objects. It uses the IN and WITHIN operators to range through the collection.



<pre>
SELECT *
FROM `travel-sample`
WHERE type = 'hotel'
AND ANY r IN reviews
         SATISFIES r.ratings.`Value` >= 3
    END;
</pre>

<pre id="example"> 
SELECT *
FROM `travel-sample`
WHERE type = 'hotel'
AND ANY r IN reviews
         SATISFIES r.ratings.`Value` >= 3
    END;
</pre>

