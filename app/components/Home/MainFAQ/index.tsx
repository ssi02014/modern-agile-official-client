import Accordion from 'components/Accordion';
import React from 'react';
import { InnerContainer, MainFAQWrapper } from './style';

const MainFAQ = () => {
  const mainFAQData = [
    {
      id: 1,
      title: 'Q. 지원 기간이 언제인가요?',
      content:
        'A. 5기 모집은 10월 21일부터 11월 4일까지 약 2주간 진행되며 1차 면접, 2차 코딩 센스 테스트(난이도 하) 진행 후 최종 합격이 발표됩니다. 부담 가지 실 필요 없이 개발에 대한 열정과 모던 애자일과의 FIT이 잘 맞는지를 최우선적으로 판단 할 예정입니다.',
    },
    {
      id: 2,
      title: 'Q. 멘토링 기간은 얼마인가요?',
      content:
        'A. 3개월 동안 선배기수에게 멘토링을 받게되며, 선배기수 수료 이후에도 역대 수료한 선배님들께 얼마든지 도움을 요청할 수 있는 시스템이 마련되어 있습니다.',
    },
    {
      id: 3,
      title: 'Q. 회비는 얼마이며, 어떻게 관리되나요?',
      content:
        'A. 회비는 월 별 1만 5천원입니다. 선배 기수는 관여하지 않으며, 각 기수별 선발된 회장이 집중적으로 관리합니다.카카오 오픈 통장을 활용하여 내역이 투명하게 공개됩니다.',
    },
    {
      id: 4,
      title: 'Q. 애자일 방법론이 무엇인가요?',
      content:
        'A. 애자일은 날렵한, 민첩한이라는 사전적 의미를 가졌으며, 소프트웨어 개발론에서 애자일은 짧은 주기의 개발 단위를 반복해 하나의 큰 프로젝트를 완성해 나가는 방식입니다. 애자일의 핵심은 협력과 피드백이고 일을 진행할 때 유연하고 변화에 빠르게 대응하는 것이 핵심입니다.',
    },
    {
      id: 5,
      title: 'Q. 알바와 같은 다른 활동을 하고 있어도 지원할 수 있나요?',
      content:
        'A. 모던 애자일 활동만으로도 굉장히 타이트 할 것이라 예상됩니다. 지원자가 많은데 타 동아리 및 알바를 하고 계신다면 가입 우선 순위에서 밀리실 수 있습니다.',
    },
    {
      id: 6,
      title: 'Q. 졸업생, 휴학생도 가입 신청이 가능한가요?',
      content:
        'A. 네! 모던 애자일은 인덕대학교 출신이라면 재학생 뿐만아니라 졸업생, 휴학생까지 모두 지원하실 수 있습니다.',
    },
  ];
  return (
    <MainFAQWrapper>
      <InnerContainer>
        <h1>자주 묻는 질문</h1>
        {mainFAQData.map((item) => (
          <Accordion key={item.id} title={item.title} content={item.content} />
        ))}
      </InnerContainer>
    </MainFAQWrapper>
  );
};

export default MainFAQ;
