This repo contains the setup scripts and content for hands on n1ql.

install_couchbase.sh - download and install Centos 7 version of Couchbase 

build.sh - a script to create, load and index buckets for hand_on_n1ql

### Instructions:

#### Download and install couchbase 
## centos 6 or 7 ; debian 7 or 8; debian 12.04 or 14.04

$./install_couchbase.sh 2845 <centos|debian|ubuntu> <6|7|12.04>

Note: install_couchbase.sh requires build number.

#### Create buckets, load buckets, create indexes and run hands_on_n1ql binary

$./build.sh

Note: build.sh assumes Couchbase Server admin credentials to be Administrator/password

To create, load and index buckets in separate steps, proceed as follows:

#### Create buckets 
$ ./recreate_buckets.sh password

#### Load buckets 
$ ./load_data.sh password

#### Drop default indexes on travel-sample
$ ./drop_indexes.sh

#### Create primary key indexes
$ ./create_indexes.sh

#### Run hands_on_n1ql (mac os). Assumes query engine is on localhost.
$ ./builds/mac_os/hands_on_n1ql 

#### Run hands_on_n1ql against query engine on a specific host.
$ ./builds/mac_os/hands_on_n1ql  -queryhost=myqueryhost

#### open localhost:8000

Note: recreate_buckets.sh and load_data.sh require the Couchbase Server's Administrator password

