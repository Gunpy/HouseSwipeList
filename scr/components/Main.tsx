import React, {useRef, useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  //Dimensions,
  TouchableOpacity,
} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import styles from '../assets/styles/MainStyles';
import swipeListData from '../assets/data/swipeListData';

const Main = () => {
  const ref = useRef(null);
  const [index, setIndex] = useState(0);
  const headleNext = () => {
    if (index + 1 <= 3) {
      ref.current.scrollToIndex({index: index + 1});
      setIndex(index + 1);
    }
  };
  const headlePreff = () => {
    if (index - 1 >= 0) {
      ref.current.scrollToIndex({index: index - 1});
      setIndex(index - 1);
    }
  };
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Image
          source={require('../assets/icon/logo.png')}
          style={styles.logo}
        />
        <SwiperFlatList
          ref={ref}
          data={swipeListData}
          index={0}
          showPagination
          renderItem={({item}) => (
            <View style={styles.child}>
              <Text style={styles.headText}>{item.headText}</Text>
              <Image source={item.image} style={styles.imageStyle} />
              <Text style={styles.footerText}>{item.footerText}</Text>
            </View>
          )}
        />
      </View>
      <View>
        <View style={styles.buttonContainer}>
          {index === 0 ? (
            <TouchableOpacity
              onPress={() => {
                headleNext();
              }}
              style={styles.customBtnBG}>
              <Text style={styles.customBtnBGText}>אתה רוצה לראות?</Text>
            </TouchableOpacity>
          ) : (
            <>
              <View style={styles.nexContainerButton}>
                <TouchableOpacity
                  onPress={() => {
                    headlePreff();
                  }}
                  style={styles.customBtnBack}>
                  <Text style={styles.customBtnBackText}>קשה</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.customBtnNext}
                  onPress={() => {
                    headleNext();
                  }}>
                  <Text style={styles.customBtnNextText}>נוח</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

export default Main;
