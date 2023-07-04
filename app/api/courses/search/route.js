import { NextResponse } from 'next/server'
import courses from '../data.json'

/**
 * @method GET
 * @route /api/courses/search?query=react&...
 * @param {*} request
 * @returns json
 * [ {course}, {course}, ...]
 */
export async function GET(request) {
    // console.log(request.url)
    const { searchParams } = new URL(request.url)
    // console.log(searchParams)
    // console.log(searchParams.get('query'))
    const query = searchParams.get('query')
    const filteredCourses = courses.filter((course) => course.title.toLowerCase().includes(query.toLowerCase()))
    return NextResponse.json(filteredCourses)
}
