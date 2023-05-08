import React from "react";

import { Container, Text, Background, Title, Wrapper } from "./styles";
import { Screen, Content, Card, Button } from "../../components";

export function Home({ navigation }) {
  return (
    <Screen barStyle="light-content">
      <Content>
        <Background>
          <Container>
            <Card>
              <Title>Bem vindo ao launchbase boilerplate</Title>

              <Text>
                Para editar este arquivo basta acessar
                `src/pages/home/index.tsx`
              </Text>
            </Card>

            <Wrapper>
              <Button
                type="menuButton"
                text="Ver Mapa"
                bgColor="#4d003599"
                icon="map"
                onPress={() => navigation.navigate("map")}
              />
              <Button
                type="menuButton"
                text="Ver Componentes"
                bgColor="#27046d8e"
                icon="arrow-right"
                onPress={() => navigation.navigate("demo")}
              />
            </Wrapper>
            <Wrapper>
              <Button
                type="menuButton"
                text="Buscar Planetas SWApi"
                bgColor="#004d1287"
                icon="globe"
                onPress={() => navigation.navigate("planets")}
              />
              <Button
                type="menuButton"
                text="Buscar Personagens SWApi"
                bgColor="#27046d8e"
                icon="globe"
                onPress={() => navigation.navigate("people")}
              />
            </Wrapper>
          </Container>
        </Background>
      </Content>
    </Screen>
  );
}
