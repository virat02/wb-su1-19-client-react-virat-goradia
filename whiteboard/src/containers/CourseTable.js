import React from 'react';
import CourseRow from '../components/CourseRow';
import CourseTableHeader from '../components/CourseTableHeader';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

const CourseTable =({courses,selectCourse}) =>

        <div>
            <CourseTableHeader />
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
//
// export default class CourseTable extends React.Component {
//
//     render() {
//         return (
//             <table className="table">
//                 <tbody>
//                 {
//                     courses.map((course, key) =>
//                     <CourseRow
//                         course={course}
//                         key={key}/>
//                 )}
//                 </tbody>
//             </table>
//         );
//     }
//
// }

