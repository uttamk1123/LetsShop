import { ProductCard } from "../components"
import { useFetch } from "../hooks/useFetch";
export const Products = () => {
    const { data: products } = useFetch("products");
    return (



        <main>
            <section className='max-w-7xl mx-auto py-24'>
                <div className='flex justify-start flex-wrap'>
                    {
                        products.map((product) => (

                            <ProductCard product={product} key={product.id} />
                        ))
                    }


                </div>
            </section>
        </main>

    )
}
