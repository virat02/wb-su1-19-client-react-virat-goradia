import React from 'react';
import '../css/CourseRowCss.css';

const CourseRow = ({course, selectCourse, selectedCourse, deleteCourse}) =>
        <div onClick={() => selectCourse(course)}
             className={selectedCourse === course ?
                 "row highlight " : "row"}>
            <div className="col-6 text-black" >
               <a href = {`/course/edit/${course.id}`}>
                   {course.title}
               </a>
            </div>
            <div className="col-2">
                {course.ownedBy}
            </div>
            <div className="col-2 d-none d-sm-block">
                {course.lastModified}
            </div>
            <div className="col-2">
                <i onClick={() => deleteCourse(course.id)}
                   className="fa fa-times"/>
            </div>
        </div>;

export default CourseRow;
