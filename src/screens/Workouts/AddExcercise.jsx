//React Native Imports
import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';

//constants
import { COLORS, SPACING } from '../../constants';
import excercise from '../../data/exercises.json';

// Components
import Header from '../../components/common/Header';
import MainCard from '../../components/MainCard';
import SearchComponent from '../../components/SearchComponent';

const AddExcercise = () => {
  const [searchText, setSearchText] = useState('');
  const [debouncedText, setSearchDebounedText] = useState('');

  // DebouncedSearch
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchDebounedText(searchText);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchText]);

  const filteredExcercise = excercise.filter(item =>
    item.name?.toLowerCase().includes(debouncedText.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <Header title={'Add Excercise'} middle={true} />
      <SearchComponent searchText={searchText} setSearchText={setSearchText} />
      <MainCard
        excercise={filteredExcercise}
        isbottomContainerRequired={false}
        isStar={true}
        isWorkout={false}
        isExcercise={true}
      />
    </View>
  );
};

export default AddExcercise;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SPACING.xl,
    backgroundColor: COLORS.background,
  },
  searchContainer: {},
});
