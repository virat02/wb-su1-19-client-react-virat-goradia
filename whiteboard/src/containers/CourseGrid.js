import React from 'react';
import CourseCard from '../components/CourseCard';

const CourseGrid =({courses,selectCourse}) =>
    <div className="row card-deck">
        {
            courses.map((course, key) =>
                <CourseCard className="col-2"
                    course={course}
                    key={key}/>)}
    </div>;

export default CourseGrid;

// export default class CourseGrid extends React.Component {
//
//     render() {
//         return (
//             <div className="card-deck">
//                 {
//                     courses.map((course, key) =>
//                     <CourseCard
//                         course={course}
//                         key={key}/>)}
//             </div>
//         );
//     }
// }