import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { PageHeader } from "@/components/page-header";

const stats = [
  { label: "Buku selesai", value: 48 },
  { label: "Sedang dibaca", value: 6 },
  { label: "Wishlist", value: 23 },
];

const settings = [
  { icon: "person-outline", label: "Edit Profil" },
  { icon: "notifications-outline", label: "Notifikasi" },
  { icon: "color-palette-outline", label: "Tema aplikasi" },
];

const historyItems = [
  {
    title: "History Of Education",
    action: "Selesai dibaca",
    time: "10 Nov 2025 • 21:14",
  },
  {
    title: "Digital Mindset",
    action: "Berhenti di bab 3",
    time: "8 Nov 2025 • 10:37",
  },
  {
    title: "Habit Reset",
    action: "Menambahkan ke favorit",
    time: "5 Nov 2025 • 08:12",
  },
];

export default function ProfileScreen() {
  const router = useRouter();
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[styles.content, { paddingBottom: 140 }]}
    >
      <PageHeader title="Profil" subtitle="Kelola akunmu" />
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>V</Text>
        </View>
        <Text style={styles.name}>Veritas Library</Text>
        <Text style={styles.email}>veritas@perpustakaan.id</Text>
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Upgrade Premium</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statsCard}>
        {stats.map((stat, idx) => (
          <View
            key={stat.label}
            style={[
              styles.statItem,
              idx !== stats.length - 1 && styles.statDivider,
            ]}
          >
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </View>
        ))}
      </View>

      <View style={styles.settings}>
        <Text style={styles.sectionTitle}>Pengaturan</Text>
        {settings.map((item) => (
          <TouchableOpacity
            key={item.label}
            style={styles.settingRow}
            onPress={() => {
              if (item.label === "Edit Profil") {
                router.push("/edit-profile");
              } else if (item.label === "Notifikasi") {
                router.push("/notifications");
              } else if (item.label === "Tema aplikasi") {
                router.push("/theme-settings");
              }
            }}
          >
            <View style={styles.settingIcon}>
              <Ionicons name={item.icon as never} size={18} color="#7C3AED" />
            </View>
            <Text style={styles.settingLabel}>{item.label}</Text>
            <Ionicons name="chevron-forward" size={16} color="#CDC7E5" />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.historyCard}>
        <Text style={styles.sectionTitle}>Riwayat bacaan</Text>
        {historyItems.map((item) => (
          <View key={item.title} style={styles.historyRow}>
            <View style={styles.historyIcon}>
              <Ionicons name="book-outline" size={16} color="#7C3AED" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.historyTitle}>{item.title}</Text>
              <Text style={styles.historyMeta}>
                {item.action} • {item.time}
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={16} color="#CDC7E5" />
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.logoutBtn}>
        <Ionicons name="log-out-outline" size={18} color="#FFFFFF" />
        <Text style={styles.logoutText}>Keluar akun</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const cardShadow = Platform.select({
  ios: {
    shadowColor: "#6A4AF6",
    shadowOpacity: 0.14,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
  },
  android: {
    elevation: 8,
  },
}) as object;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F0FF",
  },
  content: {
    padding: 24,
  },
  header: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    padding: 24,
    marginBottom: 20,
    ...cardShadow,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 26,
    backgroundColor: "#7C3AED",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  avatarText: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "700",
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2E1F63",
  },
  email: {
    fontSize: 13,
    color: "#958DB7",
    marginTop: 4,
    marginBottom: 16,
  },
  primaryButton: {
    backgroundColor: "#7C3AED",
    borderRadius: 18,
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 13,
  },
  statsCard: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 26,
    marginBottom: 20,
    ...cardShadow,
  },
  statItem: {
    flex: 1,
    paddingVertical: 18,
    alignItems: "center",
  },
  statDivider: {
    borderRightWidth: StyleSheet.hairlineWidth,
    borderRightColor: "#E6E0FF",
  },
  statValue: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2E1F63",
  },
  statLabel: {
    fontSize: 12,
    color: "#958DB7",
    marginTop: 6,
  },
  settings: {
    backgroundColor: "#FFFFFF",
    borderRadius: 26,
    padding: 20,
    ...cardShadow,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#2E1F63",
    marginBottom: 10,
  },
  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#EFE9FF",
  },
  settingIcon: {
    width: 34,
    height: 34,
    borderRadius: 14,
    backgroundColor: "#F2EAFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  settingLabel: {
    flex: 1,
    fontSize: 13,
    color: "#463875",
    fontWeight: "600",
  },
  historyCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 26,
    padding: 20,
    marginTop: 20,
    ...cardShadow,
  },
  historyRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#EFE9FF",
  },
  historyIcon: {
    width: 34,
    height: 34,
    borderRadius: 14,
    backgroundColor: "#F2EAFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  historyTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: "#32265E",
  },
  historyMeta: {
    fontSize: 11,
    color: "#9C95C1",
    marginTop: 4,
  },
  logoutBtn: {
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: 18,
    backgroundColor: "#7C3AED",
    paddingVertical: 14,
  },
  logoutText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 13,
  },
});

