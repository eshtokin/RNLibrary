import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Authors",
          tabBarLabelStyle: { fontSize: 14 },
          tabBarIcon: () => <Feather name="pen-tool" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="books"
        options={{
          title: "Books",
          tabBarLabelStyle: { fontSize: 14 },
          tabBarIcon: () => (
            <Feather name="book-open" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
