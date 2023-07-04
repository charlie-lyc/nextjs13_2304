/* RSC */
// import Courses from '@/app/components/Courses'
////////////////////////////////////////////////////
/* RCC */
'use client'
import { useState, useEffect } from 'react'
import LoadingPage from './loading'
import Courses from './components/Courses'
import CourseSearch from './components/CourseSearch'
/////////////////////////////////////////////////////
import Link from 'next/link'
import styles from './globals.css'


export default function HomePage() {
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchCourses = async () => {
            const res = await fetch('/api/courses')
            const data = await res.json()
            // console.log(data)
            setCourses(data)
            setLoading(false)
        }
        fetchCourses()
    }, [])

    if (loading) {
        return <LoadingPage />
    }

    return (
        <div>
            <h1>HomePage</h1>
            <h2>Welcome To Charlie's Web Site!</h2>

            <CourseSearch handleSearch={(data) => setCourses(data) } />

            {/* 
                <ul>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                    <li>
                        <Link href='/about/team'>Our Team</Link>
                    </li>
                </ul> 
            */}

            {/* RSC */}
            {/* <Courses /> */}

            {/* RCC */}
            <Courses courses={courses} />

        </div>
    )
}
