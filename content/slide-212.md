# Part 10: N1QL QUERY OPTIMIZATION IN 5.5

## ANSI JOIN

Create another secondary index on "route.sourceairport" as the second option for IndexScan.
<br>

<pre id="example">
CREATE INDEX route_sourceairport ON `travel-sample`(sourceairport) WHERE type = "route"
</pre>

