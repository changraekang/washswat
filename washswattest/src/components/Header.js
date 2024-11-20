import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {memoTitleState, memosState} from '../atoms/memoState';

import {useRecoilValue} from 'recoil';
import {useNavigation} from '@react-navigation/native';
import {LeftArrowIcon} from '../assets/Icon';

const Header = ({title, memoCnt}) => {
  const memoTitle = useRecoilValue(memoTitleState); // 제목 상태 읽기
  const memos = useRecoilValue(memosState); // 전체 메모 상태 읽기
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      {!!!title && (
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.goBack()}>
          <LeftArrowIcon width={24} height={24} fill="#fff" />
        </TouchableOpacity>
      )}
      <Text style={styles.headerText}>
        {title ? title : memoTitle}
        {memoCnt ? `(${memos.length})` : null}
      </Text>
      {!!!title && <View style={styles.rightSpacer} />}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    position: 'absolute',
    left: 15,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rightSpacer: {
    width: 24, // 오른쪽 공간 확보용
  },
});
