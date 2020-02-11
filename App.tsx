import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import Constants from "expo-constants";

export default function App() {
  const [newItemText, setNewItemText] = useState<string>("");
  const [item, setItem] = useState<Item>({
    id: 0,
    text: "Code this app",
    done: false
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/sun.png")}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center"
        }}
        imageStyle={{
          marginTop: "50%",
          width: "100%",
          height: "40%",
          resizeMode: "contain",
          justifyContent: "center",
          display: "flex",
          alignItems: "center"
        }}
      >
        <KeyboardAvoidingView enabled behavior="padding">
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
          >
            <Item
              item={item}
              onPress={status => {
                setItem({ ...item, done: status });
              }}
            />
            <Item
              item={{
                id: 0,
                text: "Update the item useState to hold a list of items",
                done: false
              }}
              onPress={status => {}}
            />
            <Item
              item={{
                id: 1,
                text: "Render the list of items held in the state",
                done: false
              }}
              onPress={status => {}}
            />
            <Item
              item={{
                id: 2,
                text:
                  "use the useEffect hook to make the background change based on the number of tasks. 0 => blue with sun, 1-5 ?> blue without sun 5-... red with skull",
                done: false
              }}
              onPress={status => {}}
            />
            <Item
              item={{
                id: 2,
                text:
                  "replace style of one (or more) components with a styled-component, you'll have to install it. yarn add styled-components",
                done: false
              }}
              onPress={status => {}}
            />
            <Item
              item={{
                id: 2,
                text:
                  "Only show those todos which .includes() the text in the search bar",
                done: false
              }}
              onPress={status => {}}
            />
            <Item
              item={{
                id: 2,
                text:
                  "create the useDebounce hook (copy from slides, or find it online)",
                done: false
              }}
              onPress={status => {}}
            />
            <Item
              item={{
                id: 2,
                text: "Apply a search 1 second after the user stops writing",
                done: false
              }}
              onPress={status => {}}
            />
          </ScrollView>

          <View
            style={{
              marginBottom: 10,
              borderBottomWidth: 5,
              borderRadius: 5
            }}
          />

          <View style={styles.newTaskField}>
            <TextInput
              style={{ width: "80%", borderBottomWidth: 1 }}
              onChangeText={setNewItemText}
              value={newItemText}
            />
            <TouchableOpacity
              style={{
                borderWidth: 3,
                borderRadius: 5
              }}
            >
              <Image source={require("./assets/tick.png")} />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}

interface Item {
  id: number;
  text: string;
  done: boolean;
}

interface ItemProps {
  item: Item;
  onPress: (status) => void;
}

const Item = (props: ItemProps) => {
  return (
    <TouchableWithoutFeedback onPress={() => props.onPress(!props.item.done)}>
      <View style={styles.item}>
        <Text style={{ width: "85%", fontSize: 20, fontWeight: "bold" }}>
          {props.item.text}
        </Text>
        <View>
          <Image
            source={
              props.item.done
                ? require("./assets/tick.png")
                : require("./assets/frame.png")
            }
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#11A8F0", //"#F00521" <- a good red color
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%"
  },
  item: {
    opacity: 0.95,
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#e9e9e9",
    borderRadius: 5,
    marginLeft: "5%",
    marginRight: "5%",
    padding: 15
  },
  newTaskField: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 5,
    fontSize: 20,
    padding: 15,
    marginRight: "5%",
    marginLeft: "5%",
    backgroundColor: "#e9e9e9"
  }
});
