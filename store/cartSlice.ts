import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type BookCartItem = {
  key: string
  title: string
  author: string
  cover?: string | null
  days: number
}

type CartState = {
  items: BookCartItem[]
}

const initialState: CartState = { items: [] }

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<BookCartItem>) => {
      const exists = state.items.find((i) => i.key === action.payload.key)
      if (!exists) state.items.push(action.payload)
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((i) => i.key !== action.payload)
    },
    updateDays: (
      state,
      action: PayloadAction<{ key: string; days: number }>,
    ) => {
      const item = state.items.find((i) => i.key === action.payload.key)
      if (item) item.days = action.payload.days
    },
    clearCart: (state) => {
      state.items = []
    },
  },
})

export const { addToCart, removeFromCart, updateDays, clearCart } = cartSlice.actions
export default cartSlice.reducer
