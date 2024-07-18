/* ---- (1) Versi Server Component ---- */
// Paksa sebagai dynamic rendered
// export const dynamic = "force-dynamic";

// import { ProductCard } from "@/components/ProductCard";
// import axios from "axios";

// async function loadProduct() {
// 	const { data } = await axios.get("http://localhost:3000/api/products");
// 	console.log(data);
// 	return data;
// }

// async function ProductsPage() {
// 	const products = await loadProduct();

// 	if (products.length === 0) return <h1>No Products</h1>;

// 	return (
// 		<div className="grid gap-4 grid-cols-1 md:grid-cols-4">
// 			{products.map((product) => (
// 				<ProductCard key={product.id} product={product} />
// 			))}
// 		</div>
// 	);
// }

// export default ProductsPage;
/* ---- End of Versi Server Component */

/* ---- (2) Versi Client Component ---- */
// Dinyatakan sebagai Client Component
"use client";

import {ProductCard} from "@/components/ProductCard";
import axios from "axios";
import {useEffect, useState} from "react";

// Fungsi ini akan dimodif di bawah
// async function loadProduct() {
// 	const { data } = await axios.get("http://localhost:3000/api/products");
// 	console.log(data);
// 	return data;
// }

// Tidak bisa menggunakan async Functional Component, karena ini Client Component
async function ProductsPage() {
	// const products = await loadProduct();
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function loadProduct() {
			// const { data } = await axios.get("http://localhost:3000/api/products");
			const {data} = await axios.get(process.env.NUXT_HOST + "/api/products");
			console.log(data);

			setProducts(data);
		}

		loadProduct();
	}, []);

	if (products.length === 0) return <h1>No Products</h1>;

	return (
		<div className="grid gap-4 grid-cols-1 md:grid-cols-4">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
}

export default ProductsPage;
/* ---- End of Versi Client Component ---- */
