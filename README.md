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

- 구현한 내용
  recoil로 상태관리 <- 리액트 프로젝트 익숙해서
  navigation으로 이동관리
  Detail과 Edit은 하나의 컴포에서 관리
  List 관리는 FlatList -> render Item 관리가 편해서
  src 정리는 state -> atom 폴더 Icon -> assets 공통관리는 components , page -> screens

- 고민되었던 부분 및 개선하고 싶은 사항
  navigation Header부분을 사용하려고 했으나 오히려 상태관리가 더 는 기분 차라리 style을 두번 하고 Detail에 Header는 넣는 게 나았나??
  Detail 부분과 Edit 부분에 대한 Render함수 처리를 기존에 하는데 코드가 짧아서 한 번에 작성 근데 Render함수로 그리는 부분을 따로 빼는 게 효율적인가?
- 기타 사항 : typescript에 익숙지 않아 jsx로 구현했습니다. 코드 중앙화에 대한 관심은 높으나 경험의 부족인지 기술의 부족인지 서툽니다.
