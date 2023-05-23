import React, { useCallback, useMemo, useRef, useState } from "react";

import * as S from "./styles";
import { Icon } from "../icon";
import { ScrollView } from "react-native-gesture-handler";

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
  const ref = useRef() as any;
  const items = Array.from({ length: numberOfPages }, (_, i) => i + 1);
  const verifyActiveButton = useCallback(
    (page: number) => page === currentPage,
    [currentPage]
  );

  const goBackPage = useCallback(() => {
    const pageToBack = currentPage - 1;
    onPress(pageToBack);
  }, [currentPage]);

  const goNextPage = useCallback(() => {
    const pageToBack = currentPage + 1;
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

  return (
    <S.Container>
      <S.IconContainer>
        {!verifyIfIsTheFirstPage && (
          <Icon name="chevron-left" onPress={goBackPage} />
        )}
      </S.IconContainer>
      <S.ScrollBar>
        {items.map((item, index) => (
          <S.Button key={index} onPress={() => onPress(item)}>
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
