import create from 'zustand';
import { devtools } from "zustand/middleware";

export const useSearchStore = create(devtools(set => ({
  searchGoods: null,
  setSearchGoods: (res) => set({ searchGoods: res })
})));