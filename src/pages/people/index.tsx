import { Title } from "react-native-paper";
import {
  Button,
  Content,
  Header,
  Loading,
  Modal,
  Pagination,
  Screen,
} from "../../components";
import { Text, Row } from "./styles";
import { Animated, FlatList } from "react-native";
import { translate } from "../../i18n";
import { usePeople } from "../../hooks";
import { useCallback, useRef, useState } from "react";

export function People() {
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<any>();
  const { data, isLoading } = usePeople(page);
  const offset = useRef(new Animated.Value(0)).current;

  const goToPage = useCallback((page: number) => setPage(page), []);

  const handleOpenModal = useCallback((item) => {
    setModalContent(item);
    setIsOpen(true);
  }, []);

  return (
    <Screen barStyle="light-content">
      <Header tx="peopleScreen" leftIcon="arrow-left" color="#DADADA" />
      <Content bgColor="#DADADA" style={{ padding: 16 }}>
        {isLoading ? (
          <Loading text="Buscando Personagens" />
        ) : (
          <FlatList
            data={data.people}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => String(item.name)}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: offset } } }],
              { useNativeDriver: false }
            )}
            contentContainerStyle={{ gap: 4 }}
            renderItem={({ item }) => (
              <Button
                bgColor="#FFF"
                align="left"
                onPress={() => handleOpenModal(item)}
              >
                <>
                  <Title>{item.name}</Title>
                  <Row>
                    <Text style={{ fontWeight: "bold" }}>Altura: </Text>
                    <Text>{item.height}</Text>
                  </Row>
                  <Row>
                    <Text style={{ fontWeight: "bold" }}>Sexo: </Text>
                    <Text>{translate(item.gender)}</Text>
                  </Row>
                </>
              </Button>
            )}
          />
        )}

        <Pagination
          numberOfPages={data?.numberOfPages}
          onPress={(page) => goToPage(page)}
          currentPage={page}
        />
      </Content>

      <Modal show={isOpen} close={(data) => setIsOpen(data)} height={250}>
        <>
          <Title>{modalContent?.name}</Title>
          <Row gap={32}>
            <Row>
              <Text style={{ fontWeight: "bold" }}>Altura: </Text>
              <Text>{modalContent?.height}cm</Text>
            </Row>
            <Row>
              <Text style={{ fontWeight: "bold" }}>Sexo: </Text>
              <Text>{translate(modalContent?.gender)}</Text>
            </Row>
          </Row>
          <Row gap={20}>
            <Row>
              <Text style={{ fontWeight: "bold" }}>Peso: </Text>
              <Text>{modalContent?.mass}kg</Text>
            </Row>
            <Row>
              <Text style={{ fontWeight: "bold" }}>Ano de nascimento: </Text>
              <Text>{modalContent?.birth_year}</Text>
            </Row>
          </Row>
          <Row gap={20}>
            <Row>
              <Text style={{ fontWeight: "bold" }}>Cor dos olhos: </Text>
              <Text>{modalContent?.eye_color}</Text>
            </Row>
            <Row>
              <Text style={{ fontWeight: "bold" }}>Cor do cabelo: </Text>
              <Text>{modalContent?.hair_color}</Text>
            </Row>
          </Row>
        </>
      </Modal>
    </Screen>
  );
}
