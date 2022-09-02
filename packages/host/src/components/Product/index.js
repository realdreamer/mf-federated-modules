import React, { Suspense } from "react";

const ProductMFE = React.lazy(() => import("product/App"));

export default function Product() {
    return (
        <Suspense fallback={"Product loading..."}>
          <ProductMFE />
        </Suspense>
    );
}