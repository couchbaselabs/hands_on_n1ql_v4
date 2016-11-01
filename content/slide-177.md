# Part 8 : INSERT, DELETE, UPDATE and MERGE Statements

## DELETE

DELETE lets you remove documents from buckets.

There are 2 methods :

* Use Clause
     * Using USE KEYS expr
* Using USE INDEX (index-ref)
* Use where clause to constrain which documents to delete.

The example deletes 2 documents with Keys "baldwin" and "arnold"


<pre id="example">
DELETE FROM contacts
USE KEYS ["baldwin", "arnold"]

</pre>
