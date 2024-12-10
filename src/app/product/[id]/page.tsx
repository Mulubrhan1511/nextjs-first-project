export default function Product({ params }: { params: { id: string } }) {
    const { id } = params; // params is a plain object, no need to await
    return <h1>Product: {id}</h1>;
  }
  