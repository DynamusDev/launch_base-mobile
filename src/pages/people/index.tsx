import { Title } from "react-native-paper";
import { Card, Content, Header, Loading, Screen } from "../../components";
import { Row, Text } from "./styles";
import { FlatList } from "react-native";
import { translate } from "../../i18n";
import { usePeople } from "../../hooks";
import { useCallback, useState } from "react";

export function People() {
  const [page, setPage] = useState(1);
  const { data: people, isLoading } = usePeople(page);

  const nextPage = useCallback(() => setPage((page) => page + 1), [page]);

  return (
    <Screen barStyle="light-content">
      <Header tx="peopleScreen" leftIcon="arrow-left" color="#DADADA" />
      <Content bgColor="#DADADA" style={{ padding: 16 }}>
        {isLoading ? (
          <Loading text="Buscando Personagens" />
        ) : (
          <FlatList
            data={people}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => String(item.name)}
            onEndReached={nextPage}
            renderItem={({ item }) => (
              <Card>
                <Title>{item.name}</Title>
                <Row>
                  <Text style={{ fontWeight: "bold" }}>Altura: </Text>
                  <Text>{item.height}</Text>
                </Row>
                <Row>
                  <Text style={{ fontWeight: "bold" }}>Sexo: </Text>
                  <Text>{translate(item.gender)}</Text>
                </Row>
              </Card>
            )}
          />
        )}
      </Content>
    </Screen>
  );
}
