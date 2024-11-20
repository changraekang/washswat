import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useRecoilState, useSetRecoilState} from 'recoil';
import {memoTitleState, memosState} from '../atoms/memoState';

const MemoDetailPage = ({route, navigation}) => {
  const {id} = route.params;
  const [memos, setMemos] = useRecoilState(memosState);
  const setMemoTitle = useSetRecoilState(memoTitleState);

  const memo = memos.find(m => m.id === id);

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(memo?.title || '');
  const [editedDescription, setEditedDescription] = useState(
    memo?.description || '',
  );

  useEffect(() => {
    if (memo) {
      setMemoTitle(memo.title); // 제목 상태 업데이트
      setEditedTitle(memo.title);
      setEditedDescription(memo.description);
    }
  }, [memo, setMemoTitle]);

  const deleteMemo = () => {
    setMemos(prevMemos => prevMemos.filter(m => m.id !== id));
    navigation.goBack();
  };

  const saveMemo = () => {
    setMemos(prevMemos =>
      prevMemos.map(m =>
        m.id === id
          ? {
              ...m,
              title: editedTitle,
              description: editedDescription,
              updatedAt: new Date().toISOString().slice(0, 10),
            }
          : m,
      ),
    );
    setIsEditing(false);
  };

  if (!memo) {
    return (
      <View style={styles.container}>
        <Text>메모를 찾을 수 없습니다.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* 상단 제목 */}
      <View style={styles.header}>
        {isEditing ? (
          <TextInput
            style={styles.title}
            value={editedTitle}
            onChangeText={setEditedTitle}
          />
        ) : (
          <Text style={styles.title}>{memo.title}</Text>
        )}
        <View style={styles.actionButtons}>
          {isEditing ? (
            <>
              <TouchableOpacity onPress={saveMemo}>
                <Text style={styles.actionButton}>수정</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setIsEditing(false)}>
                <Text style={styles.actionButton}>취소</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TouchableOpacity onPress={() => setIsEditing(true)}>
                <Text style={styles.actionButton}>편집</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={deleteMemo}>
                <Text style={styles.actionButton}>삭제</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>

      {/* 날짜 표시 */}
      <Text style={styles.date}>{memo.updatedAt}</Text>

      {/* 내용 표시 */}
      {isEditing ? (
        <TextInput
          style={styles.description}
          value={editedDescription}
          onChangeText={setEditedDescription}
          multiline
        />
      ) : (
        <Text style={styles.description}>{memo.description}</Text>
      )}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 16,
  },
  actionButton: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
  },
  date: {
    fontSize: 14,
    color: '#999',
    textAlign: 'right',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
});
