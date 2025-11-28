import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";

import { PageHeader } from "@/components/page-header";

export default function NotificationsScreen() {
  const router = useRouter();
  const [general, setGeneral] = useState(true);
  const [reminder, setReminder] = useState(true);
  const [updates, setUpdates] = useState(false);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <PageHeader title="Notifikasi" showBack />

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Pengaturan notifikasi</Text>
        <View style={styles.row}>
          <View>
            <Text style={styles.rowTitle}>Umum</Text>
            <Text style={styles.rowSubtitle}>Info penting dan promo</Text>
          </View>
          <Switch value={general} onValueChange={setGeneral} />
        </View>
        <View style={styles.row}>
          <View>
            <Text style={styles.rowTitle}>Pengingat baca</Text>
            <Text style={styles.rowSubtitle}>Notifikasi rutin untuk membaca</Text>
          </View>
          <Switch value={reminder} onValueChange={setReminder} />
        </View>
        <View style={styles.row}>
          <View>
            <Text style={styles.rowTitle}>Update aplikasi</Text>
            <Text style={styles.rowSubtitle}>Kabar fitur dan versi terbaru</Text>
          </View>
          <Switch value={updates} onValueChange={setUpdates} />
        </View>
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
    marginBottom: 14,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#EFE9FF",
  },
  rowTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2E1F63",
  },
  rowSubtitle: {
    fontSize: 12,
    color: "#9C95C1",
    marginTop: 4,
  },
});

