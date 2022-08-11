import React, { useCallback, useEffect, useRef } from 'react';
import {
  ImageContainer,
  MainValuesWrapper,
  ContentsContainer,
  Title,
  InnerContainer,
} from './style';
import HumanImage from 'assets/lottie/human-move.gif';
import Box from 'components/Box';
import { mainValuesData } from './mainValuesData';

const MainValues = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const box1Ref = useRef<HTMLDivElement | null>(null);

  const onIntersect = useCallback(([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting) {
      if (box1Ref.current) {
        box1Ref.current.style.animation = 'slideTop 1s forwards';
      }
    }
  }, []);

  useEffect(() => {
    const cachedRef = ref.current as HTMLDivElement;
    const observer = new IntersectionObserver(onIntersect, {
      threshold: 0.4,
    });

    observer.observe(cachedRef);
    return () => observer.unobserve(cachedRef);
  }, [onIntersect]);

  return (
    <MainValuesWrapper ref={ref}>
      <InnerContainer>
        <Title>
          지향하는 핵심 가치와 방향성을 통해 체계적이고 효율적으로 운영됩니다
        </Title>
        <ImageContainer>
          <img src={HumanImage} alt="애니메이션" />
        </ImageContainer>
        <ContentsContainer ref={box1Ref}>
          {mainValuesData.map((item) => (
            <Box key={item.id} title={item.title} desc={item.desc} />
          ))}
        </ContentsContainer>
      </InnerContainer>
    </MainValuesWrapper>
  );
};

export default MainValues;
