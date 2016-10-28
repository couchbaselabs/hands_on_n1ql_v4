# create_indexes.sh
. ./settings

for b in contacts customer reviews product purchases user_profile customer_profile travel-sample
do
	qry='statement=CREATE PRIMARY INDEX ON '
	qry+=$b
	qry+=' USING GSI'
        curl ${queryservice} -u Administrator:${pw} -XPOST -d "$qry"
done
