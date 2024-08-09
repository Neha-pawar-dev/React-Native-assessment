import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = props => {
  console.log('props', props.navigation);
  return (
    <TouchableOpacity
      style={styles.header}
      onPress={() => props.navigation.navigate('SearchScreen')}>
      <TouchableOpacity onPress={() => props.back()}>
        <Icon name="chevron-back-outline" size={24} color="black" />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'column',
        }}>
        <Text style={{textAlign: 'left', fontSize: 18, fontWeight: 'bold'}}>
          {props.text}
        </Text>
        <Text style={styles.subHeaderText}>Select any product to add</Text>
      </View>
      <TouchableOpacity>
        <Icon name="search-outline" size={24} color="black" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f7f7f7',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    width: '95%',
    alignSelf: 'center',
    borderRadius: 15,
    elevation: 5,
  },
  subHeaderText: {
    paddingVertical: 8,
    fontSize: 14,
    color: '#888',
  },
});

export default Header;
