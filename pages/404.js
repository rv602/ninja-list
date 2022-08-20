import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const Error = () => {

    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            // router.go(1)
            router.push('/')
        }, 3000)
    }, [])

    return (
        <>
            <Head>
                <title>Error</title>
            </Head>
            <div className="not-found">
                <h1>Ooooooopsie</h1>
                <h2>That page cannot be found</h2>
                <p>Go back to the <Link href='/'><a>Homepage</a></Link> </p>
            </div>
        </>
    );
}

export default Error;