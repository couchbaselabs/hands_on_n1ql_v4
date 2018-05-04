#Load data
# This script requires 1 parameter, the Couchbase administrator password
# 
# This script assumes Couchbase bin directory is in path
#
. ./settings
os=`uname`
case $os in
     Linux)
        LOADER=/opt/couchbase/bin/cbdocloader
        ;;
     Darwin)
        PATH=$PATH:/Applications/Couchbase\ Server.app/Contents/Resources/couchbase-core/bin/
        LOADER=cbdocloader
        ;;
     *)
        LOADER=cbdocloader
        ;;
esac
tar zxf data.tar.gz
cd data
for b in contacts customer reviews product purchases user_profile customer_profile cars car_changes
do
    echo "Populating bucket $b"
    zip -r $b.zip $b 
    ${LOADER} -u Administrator -p ${pw} -c ${host}:${clusterport} -b $b -m 100 -d ${b}.zip
    rm -rf $b
    rm -f ${b}.zip
done
