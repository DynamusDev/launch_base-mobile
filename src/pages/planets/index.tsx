import { Title } from "react-native-paper";
import {
  Card,
  Content,
  Header,
  Loading,
  Pagination,
  Screen,
} from "../../components";
import { Row, Text } from "./styles";
import { FlatList } from "react-native";
import { usePlanets } from "../../hooks";
import { useCallback, useState } from "react";

export function Planets() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = usePlanets(page);

  const goToPage = useCallback((page: number) => setPage(page), []);

  return (
    <Screen barStyle="light-content">
      <Header tx="planetsScreen" leftIcon="arrow-left" color="#DADADA" />
      <Content bgColor="#DADADA" style={{ padding: 16 }}>
        {isLoading ? (
          <Loading tx="loagingPlanets" />
        ) : (
          <FlatList
            data={data.planets}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => String(item.name)}
            renderItem={({ item }) => (
              <Card>
                <Title>{item.name}</Title>
                <Row>
                  <Text style={{ fontWeight: "bold" }}>Terreno: </Text>
                  <Text>{item.terrain}</Text>
                </Row>
                <Row>
                  <Text style={{ fontWeight: "bold" }}>Gravidade: </Text>
                  <Text>{item.gravity}</Text>
                </Row>
              </Card>
            )}
          />
        )}
        <Pagination
          numberOfPages={data?.numberOfPages}
          onPress={(page) => goToPage(page)}
          currentPage={page}
        />
      </Content>
    </Screen>
  );
}
