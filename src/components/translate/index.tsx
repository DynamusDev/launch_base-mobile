import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { List } from "react-native-paper";
import { useTranslateContext } from "../../hooks/useTranslate";
import { translate } from "../../i18n";
import { Container, Text } from "./styles";

interface TranslateProps {
  bgColor?: string;
}

export function Translate(props: TranslateProps) {
  const languages = [
    {
      id: 1,
      language: translate("portuguese"),
      sigla: "pt",
    },
    {
      id: 2,
      language: translate("english"),
      sigla: "en",
    },
  ];

  function handleChangeLanguage(sigla: string) {}

  return (
    <Container>
      <List.Accordion
        title={
          <>
            <FontAwesome
              name="language"
              size={25}
              color={props.bgColor === "#fff" ? "#1e111d" : "#fff"}
            />
            <Text> {translate("translate")} </Text>
          </>
        }
        style={{
          height: 45,
          width: 250,
          padding: 0,
          backgroundColor: props.bgColor || "#1e111d",
          alignItems: "center",
        }}
        titleStyle={{
          color: "#fff",
          fontSize: 18,
          textAlign: "center",
        }}
      >
        {languages?.map(
          (item: { language: string; id: number; sigla: string }) => (
            <List.Item
              key={item.id}
              title={item.language}
              titleStyle={{
                color: props.bgColor === "#fff" ? "#1e111d" : "#fff",
                textAlign: "center",
                fontSize: 18,
              }}
              style={{
                backgroundColor: props.bgColor || "#1e111d",
                width: 250,
                alignItems: "center",
                padding: 0,
              }}
              onPress={() => {
                handleChangeLanguage(item.sigla);
              }}
            />
          )
        )}
      </List.Accordion>
    </Container>
    // <Container style={{ backgroundColor: props.bgColor || '#1e111d' }}>
    //   <FontAwesome name='language' size={25} color={props.bgColor === '#fff' ? '#1e111d' : '#fff'} />
    //   <Text> {translate('translate')} </Text>
    // </Container>
  );
}
