import { ProductProps } from '@/utils/product.type';
import Link from 'next/link';

export function Product({ objects }: ProductProps) {


    return (
        <>
            {
                objects.map((products) => (

                    <li key={products.slug} >
                        <Link href={`/product/${products.slug}`} className="dropdown-item">
                            {products.title}
                        </Link>
                    </li>
                ))
            }
        </>
    )
}