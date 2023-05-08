import { useCallback, useEffect, useState } from "react";
import { Title } from "react-native-paper";
import { Card, Content, Header, Loading, Screen } from "../../components";
import { Row, Text } from "./styles";
import { api } from "../../services/api";
import reactotron from "reactotron-react-native";
import { FlatList } from "react-native";
import { translate } from "../../i18n";

export function People() {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPeople = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`people`);

      setIsLoading(false);
      setPeople(response.data.results);
      return;
    } catch (error) {
      reactotron.error("error", error);
    }
  }, [api]);

  useEffect(() => {
    getPeople();
  }, [getPeople]);

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
