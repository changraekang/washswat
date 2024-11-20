import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {memoTitleState, memosState} from '../atoms/memoState';

const MemoDetailPage = ({route, navigation}) => {
  const {id} = route.params;
  const memos = useRecoilValue(memosState);
  const setMemoTitle = useSetRecoilState(memoTitleState);

  const memo = memos.find(m => m.id === id);

  useEffect(() => {
    if (memo) {
      setMemoTitle(memo.title); // 제목 상태 업데이트
    }
  }, [memo, setMemoTitle]);

  if (!memo) {
    return (
      <View style={styles.container}>
        <Text>메모를 찾을 수 없습니다.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{memo.title}</Text>
      <Text style={styles.description}>{memo.description}</Text>
      <Text style={styles.date}>작성일: {memo.createdAt}</Text>
      <Text style={styles.date}>수정일: {memo.updatedAt}</Text>
    </View>
  );
};

export default MemoDetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 12,
  },
  date: {
    fontSize: 14,
    color: '#999',
  },
});
