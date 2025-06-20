import { Link, useParams } from "react-router";

function ProductDetailsPage() {
  const params = useParams();
  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.productId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}

export default ProductDetailsPage;
