# drop_indexes.sh
# This script requires 1 parameter, the Couchbase administrator password
#

. ./settings

# drop travel-sample indexes
for i in def_primary def_airportname def_city def_faa def_icao def_name_type def_route_src_dst_day def_schedule_utc def_sourceairport def_type
do
        qry='statement=DROP INDEX `travel-sample`.'
        qry+=$i
        echo "$qry"
        curl ${queryservice} -u Administrator:${pw} -XPOST -d "$qry"
done

echo "$0 - Done"

