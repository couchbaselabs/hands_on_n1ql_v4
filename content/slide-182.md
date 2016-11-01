# Part 8 : INSERT, DELETE, UPDATE and MERGE Statements

## DELETE - Solution

Use a DELETE statement to remove all contacts who have more than one hobby.

The array functions are documented here:
http://developer.couchbase.com/documentation/server/current/n1ql/n1ql-language-reference/arrayfun.html


<pre id="example">
DELETE FROM contacts 
WHERE ARRAY_LENGTH(hobbies) > 1
returning *
</pre>
