# create_indexes_password.sh
. ./settings

for b in contacts customer reviews user_profile
do
	qry='statement=CREATE PRIMARY INDEX ON '
	qry+=$b
        curl ${queryservice} -u Administrator:${pw} -XPOST -d "$qry"
done

curl ${queryservice} -u purchases:Prch3s3s -XPOST -d 'statement=CREATE PRIMARY INDEX ON purchases'
curl ${queryservice} -u product:Pr0dct -XPOST -d 'statement=CREATE PRIMARY INDEX ON product'

