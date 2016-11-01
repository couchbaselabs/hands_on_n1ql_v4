# Part 8 : INSERT, DELETE, UPDATE and MERGE Statements

## INSERT - Solution

Use an INSERT statement to copy the contacts who don’t have children into the “customer_profile” bucket. 

Use the UUID() function to create key values for the new records.


<pre id="example">
INSERT INTO customer_profile (KEY UUID(), VALUE contacts)
SELECT * FROM contacts WHERE children IS MISSING

</pre>
