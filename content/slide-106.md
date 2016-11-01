# Part 5 : Deep dive into Data modeling: Exploiting Arrays and Objects

## Arrays : UNNEST


UNNEST : If a document or object contains an array, UNNEST performs a join of the nested array with its parent document. Each resulting joined object becomes an input to the query. UNNEST, JOINs can be chained.


<pre>
SELECT r.author, COUNT(r.author) AS authcount
FROM `travel-sample` t UNNEST reviews r
WHERE t.type="hotel" 
GROUP BY r.author
ORDER BY COUNT(r.author) DESC
LIMIT 5;
</pre>

<pre id="example"> 
SELECT r.author, COUNT(r.author) AS authcount
FROM `travel-sample` t UNNEST reviews r
WHERE t.type="hotel" 
GROUP BY r.author
ORDER BY COUNT(r.author) DESC
LIMIT 5;
</pre>

