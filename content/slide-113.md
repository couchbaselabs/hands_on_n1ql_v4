# Part 7 : INSERT, DELETE, UPDATE and MERGE Statements

## MERGE

For the merge examples we will use buckets cars and car_changes.

The query to the right inserts documents into car_changes


<pre id="example">

INSERT INTO car_changes VALUES 
("101", { "car_id" : "1", "mileage": 1030}), 
("201", { "car_id" : "2", "mileage": 1040}),
("401", { "car_id" : "4", "mileage": 1050}) 


</pre>
