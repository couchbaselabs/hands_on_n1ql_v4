# Part 7 : N1QL monitoring

## Load on N1QL node

Now that we have prepared and executed some statements, let's find
the cost of scheduling them:

<pre id="example">
select avg(100*(str_to_duration(ElapsedTime) -
                str_to_duration(ExecutionTime))/str_to_duration(ElapsedTime))
   from system:active_requests;

</pre>