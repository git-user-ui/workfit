import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import CustomTextInput from './common/CustomInput';
import { COLORS, SPACING } from '../constants';

import SearchIcon from '../assets/icons/search-outline.svg';

const filterList = [
  { id: 1, name: 'All' },
  { id: 2, name: 'Chest' },
  { id: 3, name: 'Backs' },
  { id: 4, name: 'Legs' },
  { id: 5, name: 'Shoulders' },
  { id: 6, name: 'Arms' },
];

const SearchComponent = ({ searchText, setSearchText }) => {
  const [selected, setSelected] = useState('All');
  return (
    <View>
      <View style={styles.container}>
        <SearchIcon height={20} width={20} fill={'#fff'} />
        <CustomTextInput
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Search..."
          placeholderColor="#fff"
          style={styles.inputContainer}
        />
      </View>
      <ScrollView
        style={styles.horizontalScroll}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {filterList.map(item => (
          <TouchableOpacity
            onPress={() => setSelected(item.name)}
            key={item.id}
            style={[
              styles.filterContainer,
              selected ? styles.selectedFiltertext : styles.filterContainer,
            ]}
          >
            <Text style={[styles.filterText]}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default SearchComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: COLORS.white,
    borderRadius: SPACING.md,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
    backgroundColor: COLORS.card,
    marginBottom: SPACING.lg,
    gap: SPACING.sm,
  },
  inputContainer: {
    flex: 1,
  },
  horizontalScroll: {
    paddingVertical: SPACING.xs,
    marginBottom: SPACING.md,
  },
  filterContainer: {
    flexDirection: 'row',
    paddingVertical: SPACING.sm,
    marginRight: SPACING.lg,
    paddingHorizontal: SPACING.xl,
    backgroundColor: COLORS.card,
    borderRadius: SPACING.md,
  },
  // selectedFiltertext: {
  //   backgroundColor: COLORS.primary,
  // },

  filterText: {
    color: COLORS.white,
  },
  filterText: {
    color: COLORS.white,
  },
});
