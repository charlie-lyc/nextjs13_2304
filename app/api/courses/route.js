import { NextResponse } from 'next/server'
import { v4 as uuid4 } from 'uuid'

import courses from './data.json'

/**
 * @method GET
 * @route /api/courses
 * @param {*} request 
 * @returns json
 * [ {course}, {course}, ...]
 */
export async function GET(request) {
    return NextResponse.json(courses)
}

/**
 * @method POST
 * @route /api/courses
 * @param {*} request 
 * @returns json
 * { message }
 */
export async function POST(request) {
    // const course = await request.json()
    // console.log(course)
    const { title, description, level , link } = await request.json()
    const newCourse = { 
        // id: courses.length + 1, 
        id: uuid4(), 
        title, 
        description, 
        level, 
        link 
    }
    courses.unshift(newCourse)
    return NextResponse.json({
        message: 'New course created',
        data: courses
    })
}