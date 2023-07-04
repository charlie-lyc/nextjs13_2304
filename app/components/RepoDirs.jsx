import Link from 'next/link'


/* RSC */
async function fetchRepoContents (repoName) {
    /* A Kind of Buffer Action because it takes few seconds */
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const res = await fetch(`https://api.github.com/repos/charlie-lyc/${repoName}/contents`, {
        next: { revalidate: 60 }, // ex) 60 * 60 * 24 // 1 day
    })
    return await res.json()
}

const RepoDirs = async ({ name }) => {
    const contents = await fetchRepoContents(name)
    // console.log(contents)
    const dirs = contents.filter((content) => content.type === 'dir')

    return (
        <div>
            <h2>RepoDirs</h2>
            <h3>Directories</h3>
            <ul>
                {
                    dirs.map((dir) => 
                        <li key={dir.path}>
                            <Link href={`/code/repos/${name}/${dir.path}`}>
                                {dir.path}
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default RepoDirs