import React from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {memosState} from '../atoms/memoState';
import {useRecoilState} from 'recoil';

const MemoListPage = () => {
  const [memos, setMemos] = useRecoilState(memosState);
  const memoRender = item => {
    return (
      <View style={styles.memoContainer}>
        <View style={styles.memoTextContainer}>
          <View style={styles.memoHeader}>
            <Text style={styles.memoTitle}>{item.title}</Text>
            <Text style={styles.memoDate}>{item.updatedAt}</Text>
          </View>
          <Text
            style={styles.memoDescription}
            numberOfLines={1}
            ellipsizeMode="tail">
            {item.description}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={memos}
        keyExtractor={item => item.id}
        renderItem={({item}) => memoRender(item)}
      />
    </View>
  );
};

export default MemoListPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  memoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  memoTextContainer: {
    flex: 1,
    marginRight: 8,
  },
  memoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  memoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  memoDate: {
    fontSize: 12,
    color: '#999',
    marginLeft: 8,
  },
  memoDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
