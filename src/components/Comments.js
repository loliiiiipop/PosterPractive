
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


const Comments = ({whenPress}) =>{
    return (
        <TouchableOpacity
        onPress={whenPress }
        >
          <View style={styles.commentStyle}>
            <Text> Hide Comments </Text>
            <Image style={styles.imageStyle}
            source={require('./../image/download.png')}
            />
          </View>
        </TouchableOpacity>
    );
};



const styles = StyleSheet.create({
  commentStyle: {
    flexDirection: 'row',
  },
  imageStyle:{
    height:15,
    width:15,
  },
});

export default Comments;
