import React from 'react';
import CourseCard from '../components/CourseCard';

const CourseGrid =({courses,selectCourse}) =>

    <div className="row card-group">
        {

            courses.map((course, key) =>
                <CourseCard
                    className="col-2"
                    selectCourse={selectCourse}
                    course={course}
                    key={key}/>)}
    </div>;


export default CourseGrid;