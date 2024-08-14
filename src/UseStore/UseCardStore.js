import { create } from 'zustand'

export const useCardStore = create((set) => ({
  startIndex: 0,
  cardToShow: 3, // Number of cards to show at a time
  CardItems : [
    {id:1, title:"Wireless", para:"Enim nec rhoncus volutpat nullam eros sapien pharetra.",img:"profile"},
    {id:2, title:"Synergistic", para:"Neque ut integer nulla tellus semper amet id scelerisque eros.",img:"profile2"},
    {id:3, title:"Distributed", para:"Aliquet et cras nam sed mauris laoreet bibendum et.",img:"profile3"},
    {id:4, title:"Wireless", para:"Enim nec rhoncus volutpat nullam eros sapien pharetra.",img:"profile"},
    {id:5, title:"Synergistic", para:"Neque ut integer nulla tellus semper amet id scelerisque eros.",img:"profile2"},
    {id:6, title:"Distributed", para:"Aliquet et cras nam sed mauris laoreet bibendum et.",img:"profile3"},
    {id:7, title:"Wireless", para:"Enim nec rhoncus volutpat nullam eros sapien pharetra.",img:"profile"},
    {id:8, title:"Synergistic", para:"Neque ut integer nulla tellus semper amet id scelerisque eros.",img:"profile2"},
    {id:9, title:"Distributed", para:"Aliquet et cras nam sed mauris laoreet bibendum et.",img:"profile3"},
  ], // Array of cards (assume you populate this somewhere else)

  yourAction: () =>
    set((state) => {
      const newIndex = state.startIndex + state.cardToShow;
      // Reset to 0 if the new index exceeds the card length
      return {
        startIndex: newIndex >= state.cardItems.length ? 0 : newIndex,
      };
    }),

  // You might also want to include an action to initialize or update cardItems
  setCardItems: (items) => set(() => ({ cardItems: items })),
}));