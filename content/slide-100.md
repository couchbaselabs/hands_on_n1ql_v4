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
(SELECT name,
       reviews[*].ratings[*].Overall AS ratings,
       ARRAY_AVG(reviews[*].ratings[*].Overall) AS avghotelrating
FROM `travel-sample`
WHERE type = 'hotel' AND reviews[*].ratings[*].Overall IS NOT MISSING
ORDER BY avghotelrating desc
LIMIT 3)
UNION ALL
(SELECT name,
       reviews[*].ratings[*].Overall AS ratings,
       ARRAY_AVG(reviews[*].ratings[*].Overall) AS avghotelrating
FROM `travel-sample`
WHERE type = 'hotel' AND reviews[*].ratings[*].Overall IS NOT MISSING
ORDER BY avghotelrating asc
LIMIT 3)
</pre>

<pre id="example"> 
(SELECT name, 
       reviews[*].ratings[*].Overall AS ratings,
       ARRAY_AVG(reviews[*].ratings[*].Overall) AS avghotelrating 
FROM `travel-sample` 
WHERE type = 'hotel' AND reviews[*].ratings[*].Overall IS NOT MISSING 
ORDER BY avghotelrating desc
LIMIT 3)
UNION ALL
(SELECT name, 
       reviews[*].ratings[*].Overall AS ratings,
       ARRAY_AVG(reviews[*].ratings[*].Overall) AS avghotelrating 
FROM `travel-sample` 
WHERE type = 'hotel' AND reviews[*].ratings[*].Overall IS NOT MISSING 
ORDER BY avghotelrating asc
LIMIT 3)
</pre>

