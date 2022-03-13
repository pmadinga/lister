import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


const NotFound = () => {
    const router = useRouter();

    useEffect(() =>{
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [router])

    return (
        <div className='not-found'>
            <h1>404</h1>
            <h2>Oooops :&#40;</h2>
            <p>That page cannot be found</p>
            <Link href={'/'}><a>Go to home</a></Link>
        </div>
    );
}

export default NotFound;
