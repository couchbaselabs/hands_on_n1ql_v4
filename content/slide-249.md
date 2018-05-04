## <b> Part 10: N1QL QUERY OPTIMIZATION IN 5.5 </b>
  
## Auditing Couchbase N1QL Statements

Couchbase 5.5 provides the auditing functionality by logging all N1QL-related user activities, such as:

- Authenticating
- Starting and stopping query services
- executing N1QL statements
- non-query API requests

N1QL auditing is at the level of request without extending to the subsidiary operations.

Firstly refer to [<span style="color:blue"> *Audit UI* </span>][url1] section to configure audit.

There are two general types of autiding:

- Events corresponding to N1QL statements.
- Events corresponding to APIs exposed by the query engine.

Let's consider an example of auditing the EXPLAIN statement as shown below, make sure the "EXPLAIN statement" option in the audit configuration has been enabled.

<pre>
EXPLAIN 
SELECT DISTINCT (type)
FROM product
</pre>

<br>
After running the query, we can check the corresponding audit record in the audit log unnder the "Target Log Directory" set up in the configuration.

Each record is a one line JSON text, copy one record and use SELECT clause to reformat it as shown in the query window.
<br>

<pre id="example">
SELECT
{"timestamp":"2018-04-29T22:51:45.806-07:00","real_userid":{"domain":"builtin","user":"Administrator"},"requestId":"e570876b-de4d-4826-9860-6f786301bd02","statement":"explain select DISTINCT (type) from product","clientContextId":"f3758acd-38f1-4a67-82a8-ec965988abdd","isAdHoc":true,"userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36 (Couchbase Query Workbench (5.5.0-2469-enterprise))","node":"127.0.0.1:8091","status":"success","metrics":{"elapsedTime":"1.698ms","executionTime":"1.672ms","resultCount":1,"resultSize":548},"id":28673,"name":"EXPLAIN statement","description":"A N1QL EXPLAIN statement was executed"}
</pre>


[url1]: https://developer.couchbase.com/documentation/server/5.5/security/n1ql-auditing.html
