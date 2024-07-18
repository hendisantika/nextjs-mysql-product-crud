import {ProductForm} from "@/components/ProductForm";

function NewPage() {
    return (
        <div className="h-5/6 grid place-items-center">
            <ProductForm/>
        </div>
    );
}

export default NewPage;

// export const getServerSideProps = async (context) => {
//     const res = await axios.get("http://localhost:3000/api/products");
//
//     return {
//         props: {
//             products: res.data,
//         },
//     };
// };

async function getServerSideProps() {
    // const res = await fetch('"http://localhost:3000/api/products')
    const res = await fetch(process.env.NUXT_HOST + '/api/products')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return {
        props: {
            products: res.data,
        },
    };
}
