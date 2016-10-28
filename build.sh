./recreate_buckets.sh password
./load_data.sh password
# To complete travel-sample installation
sleep 60
./drop_indexes.sh
./create_indexes.sh
./hands_on_n1ql &
