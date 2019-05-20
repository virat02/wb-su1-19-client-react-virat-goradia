import React from 'react';
import {BrowserRouter as Link} from 'react-router-dom';

const CourseRow = ({course, selectCourse}) =>

        <div className="row">
            <div className="col-6">
                <Link
                    to={`/course/edit/${course.id}`}>
                    {course.title}
                </Link>
            </div>
            <div className="col-2">
                {course.ownedBy}
            </div>
            <div className="col-2 d-none d-sm-block">
                {course.lastModified}
            </div>
            <div className="col-2">
                <Link
                    to={`/course/edit/${course.id}`}>
                    <i className="fa fa-times"/>
                </Link>
            </div>
        </div>

export default CourseRow;

// export default class CourseRow extends React.Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }
//
//     render() {
//         return (
//             <tr>
//                 <td>
//                     <Link
//                         to={`/course/edit/${this.props.course.id}`}>
//                         {this.props.course.title}
//                     </Link>
//                 </td>
//             </tr>
//         );
//     }
// }
