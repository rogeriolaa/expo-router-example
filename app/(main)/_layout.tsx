import { Stack } from "expo-router";
import { useAuth } from "../../contexts/AuthContext";

export default function MainLayout() {
  const { user } = useAuth();

  return (
    <Stack>
      {/* Guard for logged in users */}
      <Stack.Protected guard={!!user}>
        <Stack.Screen name="profile" />
        <Stack.Screen name="dashboard" />
        <Stack.Screen name="settings" />
      </Stack.Protected>

      {/* Guard for admin role */}
      <Stack.Protected guard={user?.role === "admin"}>
        <Stack.Screen name="admin" />
      </Stack.Protected>
    </Stack>
  );
}
