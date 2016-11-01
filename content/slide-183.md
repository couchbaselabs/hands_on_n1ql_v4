# Part 8 : INSERT, DELETE, UPDATE and MERGE Statements

## UPDATE

UPDATE replaces a document that already exists with updated values
This can be done using a SET or UNSET clause.

The UPDATE-FOR clause uses the FOR statement to iterate over a nested array and SET or UNSET the given attribute for every matching element in the array.

Exercise : Remove the type attribte for the "ian" document.

<pre id="example">
UPDATE contacts USE KEYS "harry" 
 SET type = "actor" 
 RETURNING contacts

</pre>
