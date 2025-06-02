import { create } from "zustand";
import { persist } from "zustand/middleware";

const chatStore = create((set) => ({
  currentChatId: null,
  setCurrentChatId: (newChatId) => set({ currentChatId: newChatId }),
  chatSingleId: null,
  setChatSingleId: (chatSingleId) => set({ chatSingleId: chatSingleId }),
  currentChatUserId: null,
  setCurrentChatUserId: (chatUserId) => set({ currentChatUserId: chatUserId }),
}));

export default chatStore;
