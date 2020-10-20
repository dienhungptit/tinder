import React, { useState, useEffect, useCallback } from 'react';
import styles from '../assets/styles';

import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';

const CardItem = ({
  data,
  image,
  name,
  variant
}) => {
  let fullname = "" + name.title + " " + name.last + " " + name.first;
  let location = "" + data.user.location.street + "\n" + data.user.location.city + "\n" + data.user.location.state;
  let phone = data.user.phone;

  const [dataa, setData] = useState();
  const [click, setClick] = useState(0);
  const [des, setDes] = useState("Full Name");
  const [inf, setInf] = useState(fullname);
  useEffect(() => {
    setData(data)
    console.log('[CardItem]:\n' + dataa)

  }, [])

  const authHandler = async (t) => {
    setClick(t)
    if (t === 0) {
      setDes("Full Name");
      setInf(fullname);
    } else
      if (t === 3) {
        setDes("Phone");
        setInf(phone);
      }
      else
        if (t === 2) {
          setDes("Location");
          setInf(location);
        }
  };


  // Custom styling
  const fullWidth = Dimensions.get('window').width;
  const imageStyle = [
    {
      borderRadius: 8,
      width: variant ? fullWidth / 2 - 30 : fullWidth - 80,
      height: variant ? 170 : 350,
      margin: variant ? 0 : 20
    }
  ];

  const nameStyle = [
    {
      paddingTop: variant ? 10 : 15,
      paddingBottom: variant ? 5 : 7,
      color: '#363636',
      fontSize: 20,
      alignItems: 'center'
    }
  ];


  return (
    <View style={styles.containerCardItem}>
      <Image source={{ uri: image }} style={imageStyle} />

      <Text style={styles.descriptionCardItem}>{des}</Text>
      <Text style={nameStyle}>{inf}</Text>


      <View style={styles.actionsCardItem}>
        <TouchableOpacity style={styles.miniButton}
          onPress={() => authHandler(0)}
        >
          {click === 0 ? (<Fontisto name="person" color='#009387' size={26} />) : (<Fontisto name="person" color='#736F6E' size={26} />)}

          <Text style={styles.star}>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
          onPress={() => authHandler(1)}
        >
          {click === 1 ? (<AntDesign name="calendar" color='#009387' size={26} />) : (<AntDesign name="calendar" color='#736F6E' size={26} />)}
          <Text style={styles.like}>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => authHandler(2)}
        >
          {click === 2 ? (<Entypo name="location" color='#009387' size={26} />) : (<Entypo name="location" color='#736F6E' size={26} />)}
          <Text style={styles.dislike}>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => authHandler(3)}
        >
          {click === 3 ? (<Feather name="phone-call" color='#009387' size={26} />) : (<Feather name="phone-call" color='#736F6E' size={26} />)}
          <Text style={styles.dislike}>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.miniButton}
          onPress={() => authHandler(4)}
        >
          {click === 4 ? (<Entypo name="lock" color='#009387' size={26} />) : (<Entypo name="lock" color='#736F6E' size={26} />)}
          <Text style={styles.flash}>
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default CardItem;
