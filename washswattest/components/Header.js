import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}(0)</Text>
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
