# Part 10: N1QL QUERY OPTIMIZATION IN 5.5
  
## Auditing Couchbase N1QL Statements

Let's take a look at auditing the query engine APIs.

Enable the "/admin/ping API request" option in Audit Configuration and send a ping request as follows:

<br>
<pre>
curl -v http://localhost:8093/admin/ping
</pre>

Reformat the auditing record with SELECT statement as shown in the query window.

<pre id="example">
SELECT {"timestamp":"2018-04-29T22:59:57.940-07:00","real_userid":{"domain":"internal","user":"unknown"},"httpMethod":"GET","httpResultCode":200,"id":28697,"name":"/admin/ping API request","description":"An HTTP request was made to the API at /admin/ping."}
</pre>
