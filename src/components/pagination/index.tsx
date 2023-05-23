import React, { useCallback, useMemo, useRef } from "react";

import * as S from "./styles";
import { Icon } from "../icon";

interface PaginationProps {
  numberOfPages: number;
  onPress: (page: number) => void;
  currentPage: number;
  activeTextButtonColor?: string;
  inactiveTextButtonColor?: string;
}

const IS_ONE = 1;

export function Pagination({
  numberOfPages,
  onPress,
  currentPage,
  activeTextButtonColor,
  inactiveTextButtonColor,
}: PaginationProps) {
  const scrollRef = useRef() as any;
  const items = Array.from({ length: numberOfPages }, (_, i) => i + 1);
  const verifyActiveButton = useCallback(
    (page: number) => page === currentPage,
    [currentPage]
  );

  const goBackPage = useCallback(() => {
    const pageToBack = currentPage - 1;
    scrollRef.current?.scrollTo({
      x: -15,
      animated: true,
    });
    onPress(pageToBack);
  }, [currentPage]);

  const goNextPage = useCallback(() => {
    const pageToBack = currentPage + 1;
    scrollRef.current?.scrollTo({
      x: 15,
      animated: true,
    });
    onPress(pageToBack);
  }, [currentPage]);

  const verifyIfIsTheFirstPage = useMemo(
    () => currentPage === IS_ONE,
    [currentPage]
  );

  const verifyIfIsTheLastPage = useMemo(
    () => currentPage === items.slice(IS_ONE).pop(),
    [currentPage, items]
  );

  const onPressTouch = (index, item) => {
    const directionToScroll = item >= currentPage ? 15 + item : -10;
    scrollRef.current?.scrollTo({
      x: directionToScroll,
      animated: true,
    });

    onPress(item);
  };

  if (!items.length) return;

  return (
    <S.Container>
      <S.IconContainer>
        {!verifyIfIsTheFirstPage && (
          <Icon name="chevron-left" onPress={goBackPage} />
        )}
      </S.IconContainer>
      <S.ScrollBar ref={scrollRef}>
        {items.map((item, index) => (
          <S.Button key={index} onPress={() => onPressTouch(index, item)}>
            <S.Text
              isActive={verifyActiveButton(item)}
              activeTextButtonColor={activeTextButtonColor}
              inactiveTextButtonColor={inactiveTextButtonColor}
            >
              {item}
            </S.Text>
          </S.Button>
        ))}
      </S.ScrollBar>
      <S.IconContainer>
        {!verifyIfIsTheLastPage && (
          <Icon name="chevron-right" onPress={goNextPage} />
        )}
      </S.IconContainer>
    </S.Container>
  );
}
