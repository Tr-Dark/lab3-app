// src/navigation/types.ts
export type RootStackParamList = {
  Login: undefined;
  AppTabs: undefined;
  Profile: { userId: string };
};

// Закладки (нижня навігація)
export type AppTabsParamList = {
  Home: undefined;
  Settings: { section?: string } | undefined; // параметр НЕобов'язковий
};
