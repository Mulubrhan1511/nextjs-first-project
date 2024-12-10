import { use } from "react";

export default function Product({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params); // Resolves the promise using `use`
  return <h1>Product: {id}</h1>;
}
