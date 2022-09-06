import React, { Suspense } from "react";

const StarShips = React.lazy(() => import("ProductMFE/StarShips"));

export default function Product() {
    return (
        <Suspense fallback={"Product loading..."}>
          <StarShips />
        </Suspense>
    );
}