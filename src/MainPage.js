import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button } from "react-native";
import { IdeaText } from "./components/IdeaText";
import { fetchIdeaDataThunkFunction } from "./redux-store/idea/idea-sotre";
import { useDispatch } from "react-redux";

export function MainPage() {
    const dispatch = useDispatch();
    const fetchIdeaData = () => dispatch(fetchIdeaDataThunkFunction);

    return (
        <View style={styles.container}>
            <IdeaText />
            <Button title="Generate idea" onPress={fetchIdeaData}></Button>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#d2d2d2",
        color: "#ffffff",
        alignItems: "center",
        justifyContent: "center",
    },
});
