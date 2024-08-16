import { create } from 'zustand'

export const UseNavButton = create((set)=>({
  isActive : true,
  handlerOnChange : () => set( (state) => ({ isActive:!state.isActive }) )
}))
