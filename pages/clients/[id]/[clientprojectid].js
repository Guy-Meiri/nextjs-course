import {useRouter} from 'next/router';

export default function SelectedClientProjectPage() {

    const router = useRouter();

    return(
        <div>
            {JSON.stringify(router.query)}
            <h1>The project page for a specific project for a specific client</h1>
        </div>
    )
}