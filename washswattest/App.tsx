import React from 'react';
import {RecoilRoot} from 'recoil';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Header from './src/components/Header';
import MemoListPage from './src/screens/MemoListPage';
import MemoDetailPage from './src/screens/MemoDetailPage';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <RecoilRoot>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="MemoList"
            screenOptions={({route}) => ({
              header: () => (
                <Header
                  title={route?.params?.title || ''}
                  memoCnt={route?.params?.title ? true : false}
                />
              ),
            })}>
            <Stack.Screen
              name="MemoList"
              component={MemoListPage}
              initialParams={{title: '메모 리스트'}} // 기본 제목 설정
            />
            <Stack.Screen name="MemoDetail" component={MemoDetailPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </RecoilRoot>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
