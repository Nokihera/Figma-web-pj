import { create } from 'zustand'

export const UseNavButton = create((set)=>({
  isActive : false,
  handlerOnChange : () => set( (state) => ({ isActive:!state.isActive }) )
}))
