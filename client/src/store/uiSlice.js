import { createSlice } from '@reduxjs/toolkit';

export const applyTheme = (theme) => {
  if (typeof document === 'undefined') return;

  // Support 'dark', 'light', and 'glass' themes
  const normalizedTheme = theme === 'light' || theme === 'glass' ? theme : 'dark';
  document.documentElement.dataset.theme = normalizedTheme;
  // Manage helper classes for legacy styling
  document.documentElement.classList.toggle('dark', normalizedTheme === 'dark');
  document.documentElement.classList.toggle('light', normalizedTheme === 'light');
};

const getStoredTheme = () => {
  if (typeof localStorage === 'undefined') return 'dark';
  return localStorage.getItem('theme') || 'dark';
};

const initialState = {
  isOffline: !navigator.onLine,
  sidebarOpen: false,
  theme: getStoredTheme(),
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setOfflineStatus: (state, action) => {
      state.isOffline = action.payload;
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setSidebarOpen: (state, action) => {
      state.sidebarOpen = action.payload;
    },
    toggleTheme: (state) => {
      // Cycle through dark -> light -> glass -> dark
      let nextTheme;
      if (state.theme === 'dark') nextTheme = 'light';
      else if (state.theme === 'light') nextTheme = 'glass';
      else nextTheme = 'dark';

      state.theme = nextTheme;
      localStorage.setItem('theme', nextTheme);
      applyTheme(nextTheme);
    },
  },
});

export const { setOfflineStatus, toggleSidebar, setSidebarOpen, toggleTheme } = uiSlice.actions;
export default uiSlice.reducer;
