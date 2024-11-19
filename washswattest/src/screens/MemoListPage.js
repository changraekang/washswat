import React, {useRef} from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {memosState} from '../atoms/memoState';
import {useRecoilState} from 'recoil';
import {CancelIcon} from '../assets/Icon';

const MemoListPage = () => {
  const [memos, setMemos] = useRecoilState(memosState);
  const flatListRef = useRef(null);
  const existingIds = useRef(new Set(memos.map(memo => memo.id)));
  const generateId = () => {
    let newId = Math.random().toString(36).substring(2);
    while (existingIds.current.has(newId)) {
      newId = Math.random().toString(36).substring(2);
    }
    existingIds.current.add(newId); // 새 ID를 Set에 추가
    return newId;
  };

  const addMemo = () => {
    const newMemo = {
      id: generateId(),
      title: '제목없음',
      description: '내용없음',
      createdAt: new Date().toISOString().slice(0, 10),
      updatedAt: new Date().toISOString().slice(0, 10),
    };
    setMemos(prevMemos => [...prevMemos, newMemo]);
  };
  const MemoItem = ({item}) => (
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
      <CancelIcon width={24} height={24} fill="#666" />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={memos}
        keyExtractor={item => item.id}
        renderItem={({item}) => <MemoItem item={item} />}
        onContentSizeChange={() => {
          flatListRef.current?.scrollToEnd({animated: true});
        }}
      />
      <TouchableOpacity style={styles.addButton} onPress={addMemo}>
        <Text style={styles.addButtonText}>추가</Text>
      </TouchableOpacity>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 4,
  },
  memoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
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
  addButton: {
    backgroundColor: '#000',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
