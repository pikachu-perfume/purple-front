import { create } from "zustand";

interface NoticeInfo {
  id: number;
  title: string;
  description: string;
}

type NoticeStore = {
  noticeArr: NoticeInfo[];
  add: (newData: NoticeInfo) => void;
  remove: () => void;
  removeAll: () => void;
};

export const useNoticeStore = create<NoticeStore>(set => ({
  noticeArr: [],
  add: (newData: NoticeInfo) =>
    set(({ noticeArr }) => ({
      noticeArr: noticeArr.concat([newData]),
    })),
  remove: () =>
    set(({ noticeArr }) => ({
      noticeArr: noticeArr.length > 1 ? noticeArr.slice(0, -1) : [],
    })),
  removeAll: () => set({ noticeArr: [] }),
}));
