import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {categories} from '../Constants';
import Header from './Header';

const ProductCategoriesScreen = ({navigation}) => {
  const renderCategoryItem = ({item}) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() =>
        navigation.navigate('SubCategories', {
          categoryId: item.id,
          categoryName: item.name,
        })
      }>
      <Image source={item.image} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header text="Product Category" navigation={navigation} />
      <FlatList
        data={categories}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>{item.title}</Text>
              <View style={styles.sectionLine} />
            </View>
            <FlatList
              data={item.data}
              numColumns={4}
              keyExtractor={item => item.id}
              renderItem={renderCategoryItem}
            />
          </View>
        )}
        contentContainerStyle={styles.categoryList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
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
  searchInput: {
    flex: 1,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    fontSize: 14,
  },
  subHeaderText: {
    paddingVertical: 8,
    fontSize: 14,
    color: '#888',
  },
  section: {paddingHorizontal: 16, paddingVertical: 8, marginTop: 20},
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#444',
  },
  sectionLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#e0e0e0',
    marginLeft: 8,
  },
  categoryList: {paddingBottom: 80},
  categoryItem: {flex: 1, alignItems: 'center', margin: 8},
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  categoryName: {
    marginTop: 4,
    fontSize: 12,
    textAlign: 'center',
    color: '#333',
  },
});

export default ProductCategoriesScreen;
