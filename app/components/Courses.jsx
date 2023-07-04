import Link from 'next/link'

/* RCC */
const Courses = ({ courses }) => {
    return (
        <div className='courses'>
            <h1>Courses</h1>
            {
                courses.map((course) => 
                    <div key={ course.id } className='card'>
                        <h2>{ course.title }</h2>
                        <small>Level: { course.level }</small>
                        <p>{ course.description }</p>
                        <Link href={course.link} target='_blank' className='btn'>
                            Go To Course
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

/* RSC */
// async function fetchCourses() {
//     const res = await fetch('http://localhost:3000/api/courses')
//     return await res.json()
// }
//
// const Courses = async () => {
//     const courses = await fetchCourses()
//     // console.log(courses)
//     return (
//         <div className='courses'>
//             <h1>Courses</h1>
//             {
//                 courses.map((course) => 
//                     <div key={ course.id } className='card'>
//                         <h2>{ course.title }</h2>
//                         <small>Level: { course.level }</small>
//                         <p>{ course.description }</p>
//                         <Link href={course.link} target='_blank' className='btn'>
//                             Go To Course
//                         </Link>
//                     </div>
//                 )
//             }
//         </div>
//     )
// }

export default Courses