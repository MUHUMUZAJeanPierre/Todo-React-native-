import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;
export default function App() {
  return (
    <ScrollView>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        {/* <View style={{height: 40}}></View> */}
        <View
          style={{
            height: 120,
            width: width,
            backgroundColor: "#FB955B",
            display: "flex",
            // paddingTop: Platform.OS === 'android' ? 30 :30
            justifyContent: "center",
            alignItems: "flex-end",
            paddingRight: 30,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 40 }}>
            Todo
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            // backgroundColor: "blue",
            flex: 3,
            paddingTop: 50,
            gap: 10,
          }}
        >
          <Text style={{ margin: 10, fontSize: 25 }}>Todo list items</Text>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "black",
              borderStyle: "dashed",
              padding: 23,
              borderRadius: 10,
              margin: 10,
              flexDirection: "row",
              gap: 20,
              fontWeight: "normal",
            }}
          >
            <Text style={{ fontSize: 20 }}>1 </Text>
            <Text style={{ fontSize: 20 }}> cleaning</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "black",
              borderStyle: "dashed",
              padding: 23,
              borderRadius: 10,
              margin: 10,
              flexDirection: "row",
              gap: 20,
              fontWeight: "normal",
            }}
          >
            <Text style={{ fontSize: 20 }}>1</Text>
            <Text style={{ fontSize: 20 }}>cleaning</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "black",
              borderStyle: "dashed",
              padding: 23,
              borderRadius: 10,
              margin: 10,
              flexDirection: "row",
              gap: 20,
              fontWeight: "normal",
            }}
          >
            <Text style={{ fontSize: 20 }}>1</Text>
            <Text style={{ fontSize: 20 }}>cleaning</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "black",
              borderStyle: "dashed",
              padding: 23,
              borderRadius: 10,
              margin: 10,
              flexDirection: "row",
              gap: 20,
              fontWeight: "normal",
            }}
          >
            <Text style={{ fontSize: 20 }}>1 </Text>
            <Text style={{ fontSize: 20 }}>cleaning</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            // backgroundColor: "red",
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 60,
            padding: 20,
            gap:10
          }}
        >
          <TextInput
            theme={{ colors: { primary: "black" } }}
            placeholder="Enter new todo item"
            style={{
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              borderBottomColor: "black",
              borderBottomWidth: 2, // Set the border width only for the bottom
              borderTopWidth: 0, // Set the border width to 0 for the top
              borderLeftWidth: 0, // Set the border width to 0 for the left
              borderRightWidth: 0, // Set the border width to 0 for the right
              width: 250,
              height: 40,
              paddingLeft: 20, 
              marginTop: 18,
            }}
          />
          <Pressable style={{height: 60, backgroundColor:'#FF6A17', width: 90, borderRadius: 10, alignItems:'center', justifyContent:'center', marginBottom: 10}}>
            <Text style={{ color: "white", textAlign: 'center' }}>Add todo</Text>
          </Pressable>
        </View>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "blue",
  },
});
