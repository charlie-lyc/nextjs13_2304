import Link from 'next/link'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'


/* RSC */
async function fetchRepos() {
    const res = await fetch('https://api.github.com/users/charlie-lyc/repos', {
        next: { revalidate: 60 }, // ex) 60 * 60 * 24 // 1 day
    })

    /* Intentionally Delay */
    await new Promise((resolve) => setTimeout(resolve, 1500))

    /* Intentionally Throw Error */
    // setTimeout(resolve, 1500)

    return await res.json()
}


const ReposPage = async () => {
    const repos = await fetchRepos()
    // console.log(repos[0].name)

    return (
        <div className='repos-container'>
            <h1>ReposPage</h1>
            <h2>Repositories</h2>
            <ul className='repo-list'>
                {
                    repos.map((repo) => 
                        <li key={repo.id}>
                            <Link href={`/code/repos/${repo.name}`}>
                                <h3>{repo.name}</h3>
                                <p>{repo.description}</p>
                                <div className="repo-details">
                                    <span><FaStar /> {repo.stargazers_count}</span>
                                    <span><FaCodeBranch /> {repo.forks_count}</span>
                                    <span><FaEye /> {repo.watchers_count}</span>
                                </div>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default ReposPage