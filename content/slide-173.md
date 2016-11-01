# Part 8 : INSERT, DELETE, UPDATE and MERGE Statements

## INSERT - Multiple values

The query to the right inserts 2 documents with Key "helga" and "arnold".

<pre id="example">
INSERT INTO contacts (KEY, VALUE) 
 VALUES ("helga", {"name":"Helga Pataki", "type":"actor"}), 
      	 ("arnold", {"name":"The Governator (Emeritus)", "type":"actor"}),
 		 ("phoebe", {"name":"Phoebe Buffay", "type":"actor"})

</pre>
