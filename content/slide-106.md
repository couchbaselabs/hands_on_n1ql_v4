# Part 7 : INSERT, DELETE, UPDATE and MERGE Statements

## DELETE

Using the index previously created we can delete the document. 

<pre id="example">
DELETE FROM contacts
USE INDEX (deleteindex) where name="Helga Pataki"

</pre>
