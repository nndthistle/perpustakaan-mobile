import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <ScrollView className="flex-1 bg-[#E8E1FC]">
      <View className="flex-1 justify-center items-center px-6 py-20">
        {/* Logo Section */}
        <View className="items-center mb-12">
          <View className="w-24 h-24 bg-[#7C3AED] rounded-full items-center justify-center mb-6">
            <Text className="text-white text-4xl font-bold">V</Text>
          </View>
          <Text className="text-[#7C3AED] font-bold text-2xl mb-2">
            Veritas Library
          </Text>
          <Text className="text-gray-700 text-center text-base">
            Selamat datang di perpustakaan digital
          </Text>
        </View>

        {/* Action Buttons */}
        <View className="w-full">
          <Link href="/login" asChild>
            <TouchableOpacity className="w-full mb-4">
              <LinearGradient
                colors={["#3B82F6", "#7C3AED"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                className="rounded-lg py-4"
              >
                <Text className="text-white font-semibold text-center text-base">
                  Login
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </Link>

          <Link href="/register" asChild>
            <TouchableOpacity className="w-full">
              <View className="bg-white border-2 border-[#7C3AED] rounded-lg py-4">
                <Text className="text-[#7C3AED] font-semibold text-center text-base">
                  Register
                </Text>
              </View>
            </TouchableOpacity>
          </Link>
        </View>

        {/* Footer */}
        <Text className="text-center text-gray-400 text-xs mt-12">
          © 2025 Veritas Library. All rights reserved.
        </Text>
      </View>
    </ScrollView>
  );
}

