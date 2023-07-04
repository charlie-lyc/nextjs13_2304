import Link from 'next/link'
import { Suspense } from 'react'

import Repo from '@/app/components/Repo'
import RepoDirs from '@/app/components/RepoDirs'


const RepoPage = ({ params: { name } }) => {
    return (
        <div>
            <h1>RepoPage</h1>
            <h2>Repository</h2>
            <div className='card'>
                <Link href='/code/repos' className='btn btn-back'>Back To Repositories</Link>
                <hr />
                <Suspense fallback={<div>Loading repository...</div>}>
                    <Repo name={name}/>
                </Suspense>
                <hr />
                <Suspense fallback={<div>Loading directories...</div>}>
                    <RepoDirs name={name}/>
                </Suspense>
            </div>
        </div>
    )
}

export default RepoPage