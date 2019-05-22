import React from 'react';
import NavBar from "./NavBar";
import CourseGridTableHeader from "./CourseGridTableHeader";

export default class CourseManager extends React.Component {

    render() {
        return (
            <div>
                <NavBar/>
                <CourseGridTableHeader />
            </div>
        );
    }
}