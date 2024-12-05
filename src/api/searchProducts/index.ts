import axios from "axios";

export default async function searchProducts(url: string) {
  const result = await axios.get(url);
  return result.data;
}
