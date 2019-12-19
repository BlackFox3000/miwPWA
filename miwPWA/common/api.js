import axios from "~/.nuxt/axios";

export async function asyncGetProducts() {
  try{
    const response = axios.get('http://localhost:3001/get')
  }catch (err) {
    console.error('o no')
    return []
  }
}
