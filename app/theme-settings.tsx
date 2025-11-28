import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { PageHeader } from "@/components/page-header";

const themes = [
  { id: "light", label: "Terang" },
  { id: "dark", label: "Gelap" },
  { id: "system", label: "Ikuti sistem" },
];

export default function ThemeSettingsScreen() {
  const router = useRouter();
  const [selected, setSelected] = useState("light");

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <PageHeader title="Tema aplikasi" showBack />

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Pilih tema</Text>
        {themes.map((theme) => (
          <TouchableOpacity
            key={theme.id}
            style={[
              styles.themeRow,
              selected === theme.id && styles.themeRowActive,
            ]}
            onPress={() => setSelected(theme.id)}
          >
            <Text
              style={[
                styles.themeLabel,
                selected === theme.id && styles.themeLabelActive,
              ]}
            >
              {theme.label}
            </Text>
            {selected === theme.id && (
              <Ionicons name="checkmark-circle" size={18} color="#7C3AED" />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4F0FF" },
  content: { padding: 24, paddingTop: 56 },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 26,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#2E1F63",
    marginBottom: 12,
  },
  themeRow: {
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#EFE9FF",
  },
  themeRowActive: {
    borderBottomColor: "#D8CFFD",
  },
  themeLabel: {
    fontSize: 14,
    color: "#4F447D",
  },
  themeLabelActive: {
    fontWeight: "700",
    color: "#2E1F63",
  },
});

