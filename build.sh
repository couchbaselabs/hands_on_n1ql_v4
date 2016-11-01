./recreate_buckets.sh password
./load_data.sh password
# To complete travel-sample installation
sleep 60
./drop_indexes.sh
./create_indexes.sh
case `uname` in
     Linux)
       ./builds/centos7/hands_on_n1ql &
        ;;
     Darwin)
       ./builds/mac_os/hands_on_n1ql &
        ;;
     *)
       ./hands_on_n1ql &
        ;;
esac
