import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import * as FileSystem from "expo-file-system";
import {
  Alert,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { BOOKS } from "@/constants/books";
import { PageHeader } from "@/components/page-header";

export default function BookDetailScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ id?: string }>();
  const book = BOOKS.find((b) => b.id === params.id) ?? BOOKS[0];
  const [shareVisible, setShareVisible] = React.useState(false);
  const [downloading, setDownloading] = React.useState(false);
  const infoItems = [
    { label: "Halaman", value: book.pages, icon: "document-text-outline" },
    { label: "Tahun Terbit", value: book.year, icon: "calendar-outline" },
    { label: "Ukuran File", value: book.size, icon: "cloud-download-outline" },
    { label: "Format", value: book.format, icon: "reader-outline" },
  ];
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <PageHeader title="Detail Buku" showBack />

      <View style={styles.card}>
        <View style={styles.coverWrapper}>
          <View style={styles.coverShadow} />
          <View style={styles.coverImage} />
          <Text style={styles.bookTitle}>{book.title}</Text>
          <Text style={styles.bookAuthor}>{book.author}</Text>
          <View style={styles.tagRow}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>{book.category}</Text>
            </View>
            <View style={[styles.tag, { backgroundColor: "#FEE7EF" }]}>
              <Text style={[styles.tagText, { color: "#DD3173" }]}>{book.format}</Text>
            </View>
          </View>
        </View>
        <View style={styles.ratingRow}>
          <View style={{ flexDirection: "row", gap: 4 }}>
            {[...Array(5)].map((_, idx) => (
              <Ionicons key={idx} name="star" size={16} color="#F6C343" />
            ))}
          </View>
          <Text style={styles.ratingText}>
            <Text style={{ fontWeight: "700" }}>{book.rating.toFixed(1)}</Text> /{" "}
            {book.ratingScale}
          </Text>
        </View>

        <View style={styles.infoGrid}>
          {infoItems.map((item) => (
            <View key={item.label} style={styles.infoCard}>
              <Ionicons name={item.icon as never} size={16} color="#7C3AED" />
              <Text style={styles.infoLabel}>{item.label}</Text>
              <Text style={styles.infoValue}>{item.value}</Text>
            </View>
          ))}
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.primaryBtn, { flex: 1 }]}
            onPress={() =>
              router.push({ pathname: "/book-reader", params: { id: book.id } })
            }
          >
            <Text style={styles.primaryBtnText}>Baca Sekarang</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.secondaryBtn, { flex: 1 }]}
            onPress={() =>
              router.push({ pathname: "/book-audio", params: { id: book.id } })
            }
          >
            <Text style={styles.secondaryBtnText}>Audiobook</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.secondaryBtn}
          onPress={async () => {
            if (downloading) return;
            try {
              setDownloading(true);
              const extension =
                book.format.toLowerCase() === "audio" ? ".mp3" : ".pdf";
              const destination =
                FileSystem.documentDirectory + `${book.id}${extension}`;
              await FileSystem.downloadAsync(book.downloadUrl, destination);
              Alert.alert(
                "Unduhan selesai",
                `Buku tersimpan di ${destination}`
              );
            } catch (error) {
              Alert.alert("Gagal", "Tidak dapat mengunduh buku saat ini.");
            } finally {
              setDownloading(false);
            }
          }}
        >
          <Text style={styles.secondaryBtnText}>
            {downloading ? "Mengunduh..." : "Download buku"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryBtn}
          onPress={() => setShareVisible(true)}
        >
          <Text style={styles.secondaryBtnText}>Bagikan</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={styles.sectionHeading}>Deskripsi</Text>
        <Text style={styles.description}>{book.description}</Text>
      </View>

      <Modal visible={shareVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Bagikan Buku</Text>
            <Text style={styles.modalSubtitle}>
              Bagikan "{book.title}" dengan teman anda
            </Text>

            {["WhatsApp", "Instagram", "X", "Facebook", "Email"].map((channel) => (
              <TouchableOpacity key={channel} style={styles.modalButton}>
                <Text style={styles.modalButtonLabel}>{channel}</Text>
              </TouchableOpacity>
            ))}

            <View style={styles.linkBox}>
              <View>
                <Text style={styles.linkLabel}>Link buku</Text>
                <Text style={styles.linkValue}>https://veritaslib/{book.id}/</Text>
              </View>
              <TouchableOpacity style={styles.copyBtn}>
                <Text style={styles.copyText}>Salin</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.closeBtn} onPress={() => setShareVisible(false)}>
              <Text style={styles.closeText}>Tutup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const shadow = Platform.select({
  ios: {
    shadowColor: "#6B50E5",
    shadowOpacity: 0.15,
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
    backgroundColor: "#F5F2FF",
  },
  content: {
    padding: 24,
    paddingBottom: 120,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 32,
    padding: 20,
    ...shadow,
  },
  coverWrapper: {
    alignItems: "center",
    marginBottom: 16,
  },
  coverShadow: {
    width: "100%",
    height: 8,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.05)",
  },
  coverImage: {
    width: 170,
    height: 230,
    borderRadius: 24,
    backgroundColor: "#EDE8FF",
    marginVertical: 10,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2A1F55",
    textAlign: "center",
  },
  bookAuthor: {
    fontSize: 13,
    color: "#8F88B9",
    marginTop: 4,
  },
  tagRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 12,
  },
  tag: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: "#E9E1FF",
  },
  tagText: {
    fontSize: 11,
    color: "#6B52D9",
    fontWeight: "600",
  },
  ratingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  ratingText: {
    fontSize: 13,
    color: "#8F88B9",
  },
  infoGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    marginBottom: 16,
  },
  infoCard: {
    flexBasis: "48%",
    backgroundColor: "#F6F2FF",
    borderRadius: 20,
    padding: 14,
  },
  infoLabel: {
    fontSize: 11,
    color: "#8F88B9",
    marginTop: 6,
  },
  infoValue: {
    fontSize: 13,
    fontWeight: "600",
    color: "#2A1F55",
    marginTop: 2,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 12,
  },
  primaryBtn: {
    backgroundColor: "#7C3AED",
    borderRadius: 20,
    paddingVertical: 14,
  },
  primaryBtnText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "600",
  },
  secondaryBtn: {
    borderWidth: 1,
    borderColor: "#E3DDF7",
    borderRadius: 20,
    paddingVertical: 12,
    marginBottom: 10,
  },
  secondaryBtnText: {
    textAlign: "center",
    color: "#2A1F55",
    fontWeight: "600",
  },
  sectionHeading: {
    fontSize: 15,
    fontWeight: "700",
    color: "#2A1F55",
    marginBottom: 8,
  },
  description: {
    fontSize: 13,
    color: "#7C739F",
    lineHeight: 20,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  modalCard: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    padding: 24,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2A1F55",
  },
  modalSubtitle: {
    fontSize: 12,
    color: "#8F88B9",
    marginVertical: 12,
  },
  modalButton: {
    borderWidth: 1,
    borderColor: "#EFE9FF",
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 10,
  },
  modalButtonLabel: {
    color: "#2A1F55",
    fontWeight: "600",
    fontSize: 13,
  },
  linkBox: {
    borderWidth: 1,
    borderColor: "#EFE9FF",
    borderRadius: 18,
    padding: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 6,
  },
  linkLabel: {
    fontSize: 11,
    color: "#8F88B9",
  },
  linkValue: {
    fontSize: 12,
    color: "#2A1F55",
    marginTop: 4,
  },
  copyBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
    backgroundColor: "#F0E7FF",
  },
  copyText: {
    color: "#7C3AED",
    fontWeight: "600",
    fontSize: 12,
  },
  closeBtn: {
    marginTop: 18,
    borderRadius: 16,
    backgroundColor: "#7C3AED",
    paddingVertical: 12,
  },
  closeText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "600",
  },
});

