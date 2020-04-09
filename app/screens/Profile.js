import React from 'react';
import { View, Text } from 'react-native';

const Profile = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Empty View</Text>
    </View>
  );
};

Profile.options = {
  topBar: {
    title: {
      text: 'Empty',
      color: 'black',
      fontFamily: 'Lato-Bold',
      fontSize: 22,
      alignment: 'center',
    },
    elevation: 2,
  },
};

export default Profile;
