#Load data
# This script requires 1 parameter, the Couchbase administrator password
# 
# This script assumes Couchbase bin directory is in path
#
os=`uname`
case os in
     Linux)
     LOADER=/opt/couchbase/bin/cbdocloader
     ;;
     Darwin)
     LOADER=/Applications/Couchbase\ Server.app/Contents/Resources/couchbase-core/bin/cbdocloader
     ;;
     *)
      LOADER=cbdocloader
     ;;
esac
tar zxf data.tar.gz
for b in contacts customer reviews product purchases user_profile customer_profile
do
    echo "Populating bucket $b"
    zip -r $b $b
    ${LOADER} -u Administrator -p $1 -n 127.0.0.1:8091 -b $b -s 100 ${b}.zip
    rm -rf $b
    rm -f ${b}.zip
done
