import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {memoTitleState, memosState} from '../atoms/memoState';

import {useRecoilValue} from 'recoil';
const Header = ({title, memoCnt}) => {
  const memoTitle = useRecoilValue(memoTitleState); // 제목 상태 읽기
  const memos = useRecoilValue(memosState); // 전체 메모 상태 읽기
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>
        {title ? title : memoTitle}
        {memoCnt ? `(${memos.length})` : null}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000', // 배경 검은색
    padding: 15, // 패딩 추가
    alignItems: 'center', // 텍스트를 수평 가운데 정렬
  },
  headerText: {
    color: '#fff', // 글자 흰색
    fontSize: 18, // 글자 크기
    fontWeight: 'bold', // 글자 굵게
  },
});
