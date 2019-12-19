import { asyncGetProducts } from "~/common/api";

export const state = () => []
export const mutations = {
  gotProducts(state, payload){
    state = payload
  }
}

export const actions = {
  //déclenche une fonction déclenche get date, et on commit sur notre etat
  async fetchProducts(context){
    const products = await asyncGetProducts()
    context.commit('gotProducts', products)
  }
}
