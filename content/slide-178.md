# Part 7 : INSERT, DELETE, UPDATE and MERGE Statements

## UPDATE

Challenge : 

Create an UPDATE statement that uses the ARRAY_APPEND function to add another child to Ian.

Array functions are explained here: 
http://developer.couchbase.com/documentation/server/current/n1ql/n1ql-language-reference/arrayfun.html


<pre id="example">
UPDATE contacts 
USE KEYS "harry" 
SET children = ARRAY_APPEND(children, { "name": "Julie", "age": 3 } )
RETURNING contacts

</pre>
