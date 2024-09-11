import { AppProps } from '@/utils/aplicativo.type';
import Link from 'next/link';

interface DataProps {
    data: AppProps
}

export function Aplicativo({ data }: DataProps) {

    return (
        <>
            {
                data.objects.map((app) => (

                    <li key={app.slug} >
                        <Link href={`/aplicativo/${app.slug}`} className="dropdown-item">
                            {app.title}
                        </Link>
                    </li>
                ))
            }
        </>
    )
}