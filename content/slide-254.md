# Part 10: N1QL QUERY OPTIMIZATION IN 5.5
  
## Prepared Statements in Cluster
Let's run the PREPARE statement in the query window and take a look at the output.

We can see the name of statement is reported in clustered format as shown below:
<pre>
"name": "[127.0.0.1:8091]44814c81-67ef-48de-ae45-2295317f0a81"
</pre>

When N1QL service sees the prepared names in clustered format, it firstly looks up locally. Once failed it will pull the statement from the prepared node.



<pre id="example">
PREPARE SELECT * FROM cars
</pre>
~           
