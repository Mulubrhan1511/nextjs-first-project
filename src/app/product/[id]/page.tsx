export default async function Product({ params }: { params: { id: string } }) {
    const { id } = params; // No need to await
    return <h1>Product: {id}</h1>;
  }
  