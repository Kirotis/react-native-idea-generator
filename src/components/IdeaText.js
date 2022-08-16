import { Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export function IdeaText() {
    const loading = useSelector((state) => state.idea.loading);
    const ideaString = useSelector((state) => state.idea.ideaString);

    return <Text style={styles.textStyle}>{loading ? "Загрузка..." : ideaString}</Text>;
}

const styles = StyleSheet.create({
    textStyle: { textAlign: "center", marginBottom: 25 },
});
