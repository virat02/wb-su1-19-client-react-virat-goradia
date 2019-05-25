import React from 'react';
import CourseRow from '../components/CourseRow';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

const CourseTable =({courses,selectCourse,deleteCourse}) =>

        <div>
            {
                courses.map(
                    (course,key) =>
                        <CourseRow
                            selectCourse={selectCourse}
                            deleteCourse={deleteCourse}
                            course={course}
                            key={key}/>
                )
            }
        </div>;

export default CourseTable;

