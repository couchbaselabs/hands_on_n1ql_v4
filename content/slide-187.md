# Part 8 : INSERT, DELETE, UPDATE and MERGE Statements

## MERGE

MERGE lets you update, insert, or delete (actions) in one bucket based on a match 
with the data in another. Multiple actions can be specified in the same query rather 
than separate independent statements both when a match is found and otherwise.

The MERGE statement contains a source bucket and a target bucket. It needs a join 
condition based on a common attribute.

For the merge examples we will use buckets cars and car_changes.

The example here updates/merges documents into cars to update the mileage
using car_changes.


<pre id="example">

MERGE INTO cars c 
USING car_changes cc 
ON KEY cc.car_id
WHEN MATCHED THEN UPDATE SET c.mileage = cc.mileage
RETURNING *


</pre>
