- 실행 방법
  git clone https://github.com/changraekang/washswat.git .
  cd washswattest
  yarn
  cd ios
  pod install
  cd ..
  yarn ios
  cd android
  ./gradlew clean
  cd ..
  yarn android

- 실행 환경(사용한 nodejs버전, ios or android 버전)
  node -v 18.19.0
  react-native -v 0.76.2
  agp 8.1.2
  jdk 11
  gradle 7.6.1

