# Part 8 : INSERT, DELETE, UPDATE and MERGE Statements

## MERGE - Solution

Modify the MERGE statement to introduce a dummy record in cars when no corresponding car record is found.

Refer to :
http://developer.couchbase.com/documentation/server/4.5/n1ql/n1ql-language-reference/merge.html

Add a RETURNING clause in order to see the changes made. 

<pre id="example">
MERGE INTO cars c USING car_changes cc ON KEY cc.car_id
WHEN MATCHED THEN
	UPDATE SET c.mileage = cc.mileage
WHEN NOT MATCHED THEN
	INSERT {"make" : "UNKNOWN", "plate" : "UNKNOWN", "mileage": cc.mileage }

</pre>
