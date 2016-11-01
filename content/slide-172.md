# Part 8 : INSERT, DELETE, UPDATE and MERGE Statements

## INSERT

Insert lets you enter new documents into buckets.
There are 2 methods :  
 
 * Insert documents directly  
    * Multiple documents can be inserted simultaneously.   
 * Insert with select statement  


The query on the right performs a simple single value insert operation. 

Exercise : Try inserting multiple documents.


<pre id="example">
INSERT INTO contacts (KEY, VALUE) 
VALUES ("baldwin", {"name":"Alex Baldwin", "type":"contact"})
RETURNING contacts

</pre>
