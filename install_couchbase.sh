cbver=${1:-2845}
os=${2:-centos}
osver=${3:-7} 
downloadpath=http://172.23.120.24/builds/latestbuilds/couchbase-server/watson/${cbver}
case ${os} in
     centos)
         cbpkg=couchbase-server-enterprise-4.5.1-${cbver}-${os}${osver}.x86_64.rpm
         wget ${downloadpath}/${cbpkg}
         sudo /etc/init.d/couchbase-server status
         sudo rpm --erase couchbase-server
         sudo rpm -i ${cbpkg}
         sleep 30
         /opt/couchbase/bin/couchbase-cli cluster-init --cluster-username=Administrator --cluster-password=password --cluster-ramsize=2000 --cluster-index-ramsize=1000 --services=data,index,query --cluster=localhost:8091
         sudo /etc/init.d/couchbase-server status
         rm ${cbpkg}
         ;;
     debin|ubuntu)
         cbpkg=couchbase-server-enterprise-4.5.1-${cbver}-${os}${osver}.amd64.deb
         wget ${downloadpath}/${cbpkg}
         sudo /etc/init.d/couchbase-server status
         sudo dpkg -r couchbase-server
         sudo dpkg -i ${cbpkg}
         sleep 30
         /opt/couchbase/bin/couchbase-cli cluster-init --cluster-username=Administrator --cluster-password=password --cluster-ramsize=2000 --cluster-index-ramsize=1000 --services=data,index,query --cluster=localhost:8091
         sudo /etc/init.d/couchbase-server status
         rm ${cbpkg}
         ;;
     *)
         echo "Installation is not supported"
         exit 1
         ;;
esac

