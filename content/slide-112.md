# Part 7 : INSERT, DELETE, UPDATE and MERGE Statements

## MERGE

MERGE lets you update, insert, or delete (actions) in one bucket based on a match 
with the data in another. Multiple actions can be specified in the same query rather 
than separate independent statements both when a match is found and otherwise.

The MERGE statement contains a source bucket and a target bucket. It needs a join 
condition based on a common attribute.

For the merge examples we will use buckets cars and car_changes.

The query to the right inserts documents into cars


<pre id="example">

INSERT INTO cars VALUES 
("1", { "make" : "Toyota", "plate": "AAA-123", "mileage": 1000}), 
("2", { "make" : "Chevrolet", "plate": "BBB-456", "mileage": 1000}), 
("3", { "make" : "BMW", "plate": "CCC-456", "mileage": 1000})


</pre>
