import React from 'react';
import CourseCard from '../components/CourseCard';
import '../css/CourseGridCss.css';

const CourseGrid =({courses,selectCourse,selectedCourse, deleteCourse}) =>

    <div className="card-columns">
        {
            courses.map((course, key) =>
                <CourseCard
                    className="col-2"
                    selectCourse={selectCourse}
                    deleteCourse={deleteCourse}
                    selectedCourse = {selectedCourse}
                    course={course}
                    key={key}/>)}
    </div>;


export default CourseGrid;