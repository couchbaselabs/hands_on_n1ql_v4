# Part 8 : INSERT, DELETE, UPDATE and MERGE Statements

## INSERT - Insert-select


The query on the right performs an insert-select. This allows you 
to create new documents from complex queries. 

<pre id="example">
INSERT INTO customer_profile 
(KEY contacts.fname || "-" || contacts.lname, VALUE contacts)
SELECT * from contacts where age > 40

</pre>
