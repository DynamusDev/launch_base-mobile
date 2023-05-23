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
import { translate } from "../../i18n";
import { usePeople } from "../../hooks";
import { useCallback, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

export function People() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = usePeople(page);

  const goToPage = useCallback((page: number) => setPage(page), []);

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
        <Pagination
          numberOfPages={data?.numberOfPages}
          onPress={(page) => goToPage(page)}
          currentPage={page}
        />
      </Content>
    </Screen>
  );
}
