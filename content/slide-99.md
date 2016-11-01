# Part 5 : Deep dive into Data modeling: Exploiting Arrays and Objects

## Arrays 

N1QL has large number of ARRAY expressions, functions and aggregates.

 * EXPRESSIONS
	 * ARRAY, ANY, EVERY, IN, WITHIN, Construct [elem], Slice  array[start:end], Selection array[#pos]
 * FUNCTIONS
	 * ISARRAY, TYPE, ARRAY_APPEND, ARRAY_CONCAT, ARRAY_CONTAINS, ARRAY_DISTINCT, ARRAY_IFNULL, ARRAY_FLATTEN, ARRAY_INSERT, ARRAY_INTERSECT, ARRAY_LENGTH, ARRAY_POSITION
	 * ARRAY_PREPEND, ARRAY_PUT, ARRAY_RANGE, ARRAY_REMOVE, ARRAY_REPEAT, ARRAY_REPLACE, ARRAY_REVERSE, ARRAY_SORT, ARRAY_STAR, ARRAY_SUM,
 * AGGREGATES
	 * ARRAY_AVG, ARRAY_COUNT, ARRAY_MIN, ARRAY_MAX

Let's look at some examples:

<pre>
SELECT public_likes, 
       ARRAY_COUNT(public_likes) public_likes_count,
       ARRAY_CONCAT(public_likes, ["Joe Smith", "Jane Smith"]) public_likes_concat,
       ARRAY_REVERSE(public_likes) public_likes_reverse
FROM  `travel-sample` 
WHERE type = 'hotel'
LIMIT 1;
</pre>

<pre id="example"> 
SELECT public_likes, 
       ARRAY_COUNT(public_likes) public_likes_count,
       ARRAY_CONCAT(public_likes, ["Joe Smith", "Jane Smith"]) public_likes_concat,
       ARRAY_REVERSE(public_likes) public_likes_reverse
FROM  `travel-sample` 
WHERE type = 'hotel'
LIMIT 1;
</pre>

