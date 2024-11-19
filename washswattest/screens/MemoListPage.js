import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {memosState} from '../atoms/memoState';
import {useRecoilState} from 'recoil';

const MemoListPage = () => {
  const [memos, setMemos] = useRecoilState(memosState);

  return (
    <View>
      <FlatList
        data={memos}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>{item.updatedAt}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default MemoListPage;

const styles = StyleSheet.create({});
