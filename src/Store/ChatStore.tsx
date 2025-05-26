import { create } from "zustand";
import { persist } from "zustand/middleware";

const chatStore = create((set) => ({
  currentChatId: null,
  setCurrentChatId: (newChatId) => set({ currentChatId: newChatId }),
}));

export default chatStore;
