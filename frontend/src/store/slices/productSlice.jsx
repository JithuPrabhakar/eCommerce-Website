import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: 'productList',
  initialState: [],
  reducers: {
    productListRequest(state, action) {},
    productListSuccess(state, action) {},
    productListFail(state, action) {},
  },
})

export { productSlice }
