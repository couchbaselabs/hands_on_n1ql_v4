# Part 8 : INSERT, DELETE, UPDATE and MERGE Statements

## UPDATE - Using where clause

In addition to selecting objects by key, you can also select them by field values, with a WHERE CLAUSE. 
The following example uses UPDATE to add to documents. Harry does not currently have a children field, and it can be added as shown. 


<pre id="example">
UPDATE contacts 
 SET children = [ { "name": "Tim", "age": 7 } ]
 WHERE  email = "harry@yahoo.com"
 RETURNING contacts


</pre>
