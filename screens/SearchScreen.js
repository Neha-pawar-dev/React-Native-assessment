import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, TextInput, FlatList, StyleSheet, Image} from 'react-native';
import {categories, products} from '../Constants';
import _ from 'lodash';
import ProductDetailsScreen from './ProductDetailsScreen';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products);
  }, []);

  // Debounced search function
  const debouncedSearch = useCallback(
    _.debounce(query => {
      if (query === '') {
        setFilteredProducts([]);
      } else {
        const results = [];
        categories.forEach(category => {
          category.data.forEach(product => {
            if (product.name.toLowerCase().includes(query.toLowerCase())) {
              results.push(product);
            }
          });
        });
        setFilteredProducts(results);
      }
    }, 300),
    [],
  );

  // Updating the search query and trigger the debounced search function
  const handleSearch = query => {
    setSearchQuery(query);
    debouncedSearch(query);
  };

  // Rendering each search result item
  const renderSearchItem = ({item}) => (
    <View style={styles.searchItems}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.searchItemTextContainer}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={{marginLeft: 10}}>{item.quantity}</Text>
      </View>
    </View>
  );

  // Rendering each latest product item
  const renderLatestProductItem = ({item}) => (
    <View style={styles.productItem}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search to add products"
        value={searchQuery}
        onChangeText={handleSearch}
      />

      {filteredProducts.length > 0 ? (
        <FlatList
          data={filteredProducts}
          keyExtractor={item => item.id}
          renderItem={renderSearchItem}
          style={styles.resultsList}
        />
      ) : (
        <View style={styles.latestProductsContainer}>
          <FlatList
            data={latestProducts}
            numColumns={3}
            keyExtractor={item => item.id}
            renderItem={renderLatestProductItem}
          />
        </View>
      )}
      {filteredProducts.length > 0 && (
        <ProductDetailsScreen currentItemDetails={filteredProducts[0]} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, backgroundColor: '#fff'},
  searchBar: {
    marginTop: 40,
    padding: 10,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 10,
    marginBottom: 16,
  },
  resultsList: {marginTop: 16},
  latestProductsContainer: {marginTop: 16},
  productItem: {
    alignItems: 'center',
    marginRight: 16,
    flexDirection: 'row',
    height: 60,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 5,
    justifyContent: 'center',
    marginBottom: 15,
    paddingHorizontal: 5,
  },
  searchItems: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginHorizontal: 10,
    paddingHorizontal: 5,
  },
  searchItemTextContainer: {
    marginLeft: 10,
    flexDirection: 'row',
  },
  productImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 14,
    color: '#333',
  },
});

export default SearchScreen;
