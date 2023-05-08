import { Title } from "react-native-paper";
import { Card, Content, Header, Loading, Screen } from "../../components";
import { Row, Text } from "./styles";
import { FlatList } from "react-native";
import { usePlanets } from "../../hooks";

export function Planets() {
  const { data: planets, isLoading } = usePlanets();

  return (
    <Screen barStyle="light-content">
      <Header tx="planetsScreen" leftIcon="arrow-left" color="#DADADA" />
      <Content bgColor="#DADADA" style={{ padding: 16 }}>
        {isLoading ? (
          <Loading tx="loagingPlanets" />
        ) : (
          <FlatList
            data={planets}
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
      </Content>
    </Screen>
  );
}
