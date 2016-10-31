# Part 6 : Query Optimization And Query Tuning

## Example #3: Creating the right index for the query


Now, let's create the covering secondary functional index


* IFMISSINGORNULL() returns first non missing, non null value
* Required choose different value that not exist in your data set. In this case name is string so we choose the 999 number is that value.

<pre id="example"> 
CREATE INDEX ts_name ON `travel-sample` (IFMISSINGORNULL(name,999));
</pre>
