import { create } from "zustand";

const useConversation = create((set) => ({
	selectedConversation: null,
	message: [],
	setSelectedConversation: (selectedConversation) =>
		set({ selectedConversation }),
	setMessages: (messages) => set({ messages }),
}));

export default useConversation;
