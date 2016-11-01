# Part 7 : N1QL monitoring

## Prepared statements continued

Use index type.


<pre id="example">
select id from `travel-sample` where type="route" and any s in schedule satisfies s.flight="AZ917" end;

</pre>
