import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import ProductDetailsScreen from './ProductDetailsScreen';
import {subCategories} from '../Constants';
import Header from './Header';

const SubCategoriesScreen = ({route, navigation}) => {
  const {categoryId, categoryName} = route.params;
  const [shouldDisplayDetails, setShouldDisplayDetails] = useState(false);
  const [currentItemDetails, setCurrentItemDetails] = useState({});

  const filteredSubCategories = subCategories.filter(
    sub => sub.categoryId === categoryId,
  );

  const renderSubCategoryItem = ({item}) => (
    <TouchableOpacity
      style={styles.subCategoryItem}
      onPress={() => {
        setShouldDisplayDetails(true);
        setCurrentItemDetails(item);
      }}>
      <Image source={item.image} style={styles.subCategoryImage} />
      <Text style={styles.subCategoryName}>{item.name}</Text>
    </TouchableOpacity>
  );
  const back = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Header text={categoryName} back={back} />
      <FlatList
        data={filteredSubCategories}
        keyExtractor={item => item.id}
        renderItem={renderSubCategoryItem}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
      {shouldDisplayDetails && (
        <View
          style={{
            backgroundColor: '#fff',
            width: '98%',
            paddingVertical: 10,
            alignSelf: 'center',
            borderRadius: 10,
          }}>
          <ProductDetailsScreen currentItemDetails={currentItemDetails} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, backgroundColor: '#f8f8f8'},
  headerText: {fontSize: 18, fontWeight: 'bold', marginBottom: 16},
  subCategoryItem: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#f8f8f8',
  },
  subCategoryName: {marginTop: 8, fontSize: 16, color: '#333'},
  subCategoryImage: {width: 80, height: 80, resizeMode: 'contain'},
  row: {justifyContent: 'space-between'},
  button: {
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'green',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SubCategoriesScreen;
