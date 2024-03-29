import React from 'react';
import CourseRow from './CourseRow';
import 'bootstrap/dist/css/bootstrap.css';

const CourseTable =({courses,selectCourse, selectedCourse,deleteCourse}) =>

        <div>
            {
                courses.map(
                    (course,key) =>
                        <CourseRow
                            selectCourse={selectCourse}
                            deleteCourse={deleteCourse}
                            selectedCourse={selectedCourse}
                            course={course}
                            key={key}/>
                )
            }
        </div>;

export default CourseTable;

