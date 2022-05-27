import {useRouter} from 'next/router';

export default function PortofolioProjectPage(){

    const router = useRouter();

    
    return (
        <div>
            <div>{"hey " + router.query["projectid"]}</div>
        </div>
    )
}