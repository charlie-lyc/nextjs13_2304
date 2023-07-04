import Link from 'next/link'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'


/* RSC */
async function fetchRepo (repoName) {
    const res = await fetch(`https://api.github.com/repos/charlie-lyc/${repoName}`, {
        next: { revalidate: 60 }, // ex) 60 * 60 * 24 // 1 day
    })

    /* Intentionally Delay */
    await new Promise((resolve) => setTimeout(resolve, 1000))

    /* Intentionally Throw Error */
    // setTimeout(resolve, 1000)

    return await res.json()
}


const Repo = async ({ name }) => {
    const repo = await fetchRepo(name)
    // console.log(repo.name)

    return (
        <div>                    
            <h2>
                <Link href={repo.html_url}>{repo.name}</Link>
            </h2>
            <div>
                <h3>Repo Details</h3>
                <p>{repo.description}</p>
                <div className='card-stats'>
                    <div className='card-stat'>
                        <FaStar /> <span>{repo.stargazers_count}</span>
                    </div>
                    <div className='card-stat'>
                        <FaCodeBranch /> <span>{repo.forks_count}</span>
                    </div>
                    <div className='card-stat'>
                        <FaEye /> <span>{repo.watchers_count}</span>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Repo