import {atom} from 'recoil';

export const memosState = atom({
  key: 'memosState', // 고유 키
  default: [
    {
      // unique string 값
      id: 'AMIFE-6AEM-EFIAM-MEIFE',
      title: '첫번째 메모',
      description:
        'Memo가 화면에 표시할 수 있는 개수를 넘는 경우에 사용자가 스크롤 하면 마지막 memo가 “추가” 버튼 바로 위에 표시될 때까지 스크롤 되어야 합니다. 즉, memo와 추가 버튼 사이에 공간이 생기면 안 됩니다. “추가” 버튼과 memo 스크롤 영역의 배치는 사용자의 클릭 실수가 가장 적도록 배치해 주세요.',
      // memo의 생성날짜
      createdAt: '2024-06-06',
      // memo의 업데이트 날짜
      updatedAt: '2024-07-01',
    },
  ],
});
