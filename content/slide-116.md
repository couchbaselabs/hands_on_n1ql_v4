# Part 7 : INSERT, DELETE, UPDATE and MERGE Statements

## MERGE

The example here updates/merges documents into cars to update the mileage
using car_changes.

<pre id="example">

MERGE INTO cars c 
USING car_changes cc 
ON KEY cc.car_id
WHEN MATCHED THEN UPDATE SET c.mileage = cc.mileage
RETURNING *

</pre>
