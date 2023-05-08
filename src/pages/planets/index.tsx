import { useCallback, useEffect, useState } from "react";
import { Title } from "react-native-paper";
import { Card, Content, Header, Loading, Screen } from "../../components";
import { Row, Text } from "./styles";
import { api } from "../../services/api";
import reactotron from "reactotron-react-native";
import { FlatList } from "react-native";

export function Planets() {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPlanets = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`planets`);

      setIsLoading(false);
      setPlanets(response.data.results);
      return;
    } catch (error) {
      reactotron.error("error", error);
    }
  }, [api]);

  const getPeople = useCallback(
    async (id: string): Promise<string> => {
      try {
        const response = await api.get(`people/${id}`);

        return response.data.result.name;
      } catch (error) {
        reactotron.error("error", error);
      }
    },
    [api]
  );

  useEffect(() => {
    getPlanets();
  }, [getPlanets]);

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
