import React, { useState, useEffect, useCallback } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import CardItem from '../components/CardItem';
import styles from '../assets/styles';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {

    setIsLoading(true);
    reload().then(() => {
    });
  }, [])
  const reload = async () => {
    // console.log('Hung')
    const response = await fetch(
      `https://randomuser.me/api/0.4/?randomapi`,
      {
        method: 'GET'
      }
    );
    const resData = await response.json();
    // console.log(resData)
    // console.log(resData.results[0].user)
    const loadedinfos = [];
    for (const key in resData.results) {
      let data = resData.results[key];

      loadedinfos.push(
        data
      );
    }

    setData(loadedinfos);


  }
  useEffect(() => {
    if (data) {
      setIsLoading(false);
      console.log(data)
    }

  }, [data])

  if (isLoading) {
    return (
      <View style={{ flex: 1 }}>
        <ActivityIndicator size="large" color='#176B39' />
      </View>
    );
  }
  const reloading = () => {
    setIsLoading(true);
    reload().then(() => {
    });
  }


  return (
    <View
      style={styles.bg}
    >
      {data.length ? (<View style={styles.containerHome}>
        {/* {data.map((item, index) => (<View key={index}><Text>{item.name}</Text></View>))} */}
        <CardStack style={styles.content}
          //  loop={true}
          verticalSwipe={false}
          onSwipedLeft={reloading}
          onSwipedRight={reloading}
          renderNoMoreCards={() => null}
        //  ref={swiper => { this.swiper = swiper }}
        >
          {data.map((item, index) => (<Card key={index}>
            <CardItem
              image={item.user.picture}
              name={item.user.name}
              description={item.description}
              matches={item.match}
              actions
              data={item}
              onPressLeft={() => this.swiper.swipeLeft()}
              onPressRight={() => this.swiper.swipeRight()}
            /></Card>))}
        </CardStack>
      </View>) : (<View style={{ flex: 1 }}>
        <ActivityIndicator size="large" color='#176B39' />
      </View>)}

    </View>
  );
};

export default Home;
