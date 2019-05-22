import React from 'react';
import CourseRow from '../components/CourseRow';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

const CourseTable =({courses,selectCourse}) =>

        <div>
            {
                courses.map(
                    (course,key) =>
                        <CourseRow
                            selectCourse={selectCourse}
                            course={course}
                            key={key}/>
                )
            }
        </div>;

export default CourseTable;

