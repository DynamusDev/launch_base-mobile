import React, { useCallback } from "react";
import { ActivityIndicator, Vibration } from "react-native";
import { Feather } from "@expo/vector-icons";

import { Container, Text, MenuContainer, MenuText } from "./styles";
import { translate } from "../../i18n";

interface Props {
  text?: string;
  bgColor?: string;
  color?: string;
  actColor?: string;
  onPress?: any;
  onLongPress?: any;
  loading?: boolean;
  vibration?: boolean;
  align?: "left" | "right" | "center";
  tx?: string;
  children?: React.ReactNode;
  type?: "common" | "iconButton" | "menuButton";
  vibrate?: boolean;
  icon?:
    | "link"
    | "search"
    | "image"
    | "menu"
    | "radio"
    | "key"
    | "code"
    | "map"
    | "video"
    | "circle"
    | "filter"
    | "minus"
    | "plus"
    | "info"
    | "check"
    | "book"
    | "pause"
    | "frown"
    | "mail"
    | "home"
    | "star"
    | "meh"
    | "save"
    | "user"
    | "phone"
    | "paperclip"
    | "inbox"
    | "lock"
    | "cloud"
    | "eye"
    | "camera"
    | "delete"
    | "heart"
    | "chrome"
    | "github"
    | "upload"
    | "download"
    | "unlock"
    | "play"
    | "tag"
    | "calendar"
    | "database"
    | "flag"
    | "layout"
    | "printer"
    | "tool"
    | "gift"
    | "wifi"
    | "edit"
    | "codepen"
    | "gitlab"
    | "youtube"
    | "twitter"
    | "dribbble"
    | "instagram"
    | "slack"
    | "align-left"
    | "align-right"
    | "archive"
    | "arrow-down"
    | "arrow-left"
    | "arrow-right"
    | "arrow-up"
    | "battery"
    | "bell"
    | "bookmark"
    | "box"
    | "briefcase"
    | "chevron-down"
    | "chevron-left"
    | "chevron-right"
    | "chevron-up"
    | "clipboard"
    | "clock"
    | "compass"
    | "copy"
    | "credit-card"
    | "crop"
    | "facebook"
    | "feather"
    | "folder"
    | "globe"
    | "grid"
    | "layers"
    | "linkedin"
    | "list"
    | "log-out"
    | "mic"
    | "moon"
    | "mouse-pointer"
    | "music"
    | "pie-chart"
    | "rss"
    | "scissors"
    | "share"
    | "shield"
    | "shopping-bag"
    | "shopping-cart"
    | "shuffle"
    | "tablet"
    | "thermometer"
    | "thumbs-down"
    | "thumbs-up"
    | "trash"
    | "tv"
    | "users"
    | "voicemail"
    | "external-link"
    | "activity"
    | "airplay"
    | "alert-circle"
    | "alert-octagon"
    | "alert-triangle"
    | "align-center"
    | "align-justify"
    | "anchor"
    | "aperture"
    | "arrow-down-circle"
    | "arrow-down-left"
    | "arrow-down-right"
    | "arrow-left-circle"
    | "arrow-right-circle"
    | "arrow-up-circle"
    | "arrow-up-left"
    | "arrow-up-right"
    | "at-sign"
    | "award"
    | "bar-chart"
    | "bar-chart-2"
    | "battery-charging"
    | "bell-off"
    | "bluetooth"
    | "bold"
    | "book-open"
    | "camera-off"
    | "cast"
    | "check-circle"
    | "check-square"
    | "chevrons-down"
    | "chevrons-left"
    | "chevrons-right"
    | "chevrons-up"
    | "cloud-drizzle"
    | "cloud-lightning"
    | "cloud-off"
    | "cloud-rain"
    | "cloud-snow"
    | "codesandbox"
    | "coffee"
    | "columns"
    | "command"
    | "corner-down-left"
    | "corner-down-right"
    | "corner-left-down"
    | "corner-left-up"
    | "corner-right-down"
    | "corner-right-up"
    | "corner-up-left"
    | "corner-up-right"
    | "cpu"
    | "crosshair"
    | "disc"
    | "divide"
    | "divide-circle"
    | "divide-square"
    | "dollar-sign"
    | "download-cloud"
    | "droplet"
    | "edit-2"
    | "edit-3"
    | "eye-off"
    | "fast-forward"
    | "figma"
    | "file"
    | "file-minus"
    | "file-plus"
    | "file-text"
    | "film"
    | "folder-minus"
    | "folder-plus"
    | "framer"
    | "git-branch"
    | "git-commit"
    | "git-merge"
    | "git-pull-request"
    | "hard-drive"
    | "hash"
    | "headphones"
    | "help-circle"
    | "hexagon"
    | "italic"
    | "life-buoy"
    | "link-2"
    | "loader"
    | "log-in"
    | "map-pin"
    | "maximize"
    | "maximize-2"
    | "message-circle"
    | "message-square"
    | "mic-off"
    | "minimize"
    | "minimize-2"
    | "minus-circle"
    | "minus-square"
    | "monitor"
    | "more-horizontal"
    | "more-vertical"
    | "move"
    | "navigation"
    | "navigation-2"
    | "octagon"
    | "package"
    | "pause-circle"
    | "pen-tool"
    | "percent"
    | "phone-call"
    | "phone-forwarded"
    | "phone-incoming"
    | "phone-missed"
    | "phone-off"
    | "phone-outgoing"
    | "play-circle"
    | "plus-circle"
    | "plus-square"
    | "pocket"
    | "power"
    | "refresh-ccw"
    | "refresh-cw"
    | "repeat"
    | "rewind"
    | "rotate-ccw"
    | "rotate-cw"
    | "send"
    | "server"
    | "settings"
    | "share-2"
    | "shield-off"
    | "sidebar"
    | "skip-back"
    | "skip-forward"
    | "slash"
    | "sliders"
    | "smartphone"
    | "smile"
    | "speaker"
    | "square"
    | "stop-circle"
    | "sun"
    | "sunrise"
    | "sunset"
    | "target"
    | "terminal"
    | "toggle-left"
    | "toggle-right"
    | "trash-2"
    | "trello"
    | "trending-down"
    | "trending-up"
    | "triangle"
    | "truck"
    | "twitch"
    | "type"
    | "umbrella"
    | "underline"
    | "upload-cloud"
    | "user-check"
    | "user-minus"
    | "user-plus"
    | "user-x"
    | "video-off"
    | "volume"
    | "volume-1"
    | "volume-2"
    | "volume-x"
    | "watch"
    | "wifi-off"
    | "wind"
    | "x"
    | "x-circle"
    | "x-octagon"
    | "x-square"
    | "zap"
    | "zap-off"
    | "zoom-in"
    | "zoom-out";
}

export function Button(props: Props) {
  const onPress = useCallback(() => {
    props.vibrate && Vibration.vibrate(20);
    props.onPress();
  }, []);

  const onLongPress = useCallback(() => {
    props.vibrate && Vibration.vibrate(20);
    props.onLongPress();
  }, []);
  return (
    <>
      {props.type === "menuButton" ? (
        <MenuContainer
          onPress={onPress}
          onLongPress={onLongPress}
          style={{
            backgroundColor: props.bgColor || "#333",
          }}
        >
          <MenuText
            style={{
              color: props.color || "#FFF",
            }}
          >
            {translate(props.tx) || props.text}
          </MenuText>
          <Feather
            name={props.icon || "home"}
            size={35}
            color={props.color || "#FFF"}
          />
        </MenuContainer>
      ) : (
        <Container
          onPress={onPress}
          onLongPress={onLongPress}
          disabled={props.loading}
          style={{
            backgroundColor: props.bgColor || "#333",
            alignItems:
              props.align === "left"
                ? "flex-start"
                : props.align === "right"
                ? "flex-end"
                : "center",
          }}
        >
          {props.loading ? (
            <ActivityIndicator color={props.actColor} />
          ) : (
            props.children ?? (
              <Text
                style={{
                  color: props.color || "#FFF",
                }}
              >
                {translate(props.tx) || props.text}
              </Text>
            )
          )}
        </Container>
      )}
    </>
  );
}
