import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserInfoStore = create(
  persist(
    (set) => ({
      // user_role:JSON.parse(localStorage.getItem("userInfo"))?.user?.role_id
      User: null,
      isAuthenticated:false,
      setUserInfo: (newuserinfo) => set({ User: newuserinfo,isAuthenticated:true }),
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: "user-info-storage",
    }
  )
);

export default useUserInfoStore;
