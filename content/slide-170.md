# Part 7 : N1QL monitoring

## Cancelling a requests

As soon as the first is running, on the other run

<pre id="example">
delete from system:active_requests
  where statement like "%travel%";

</pre>
