import React from 'react';



export default class NavBar extends React.Component {
    constructor(props){
        super(props);
    }

    render() {

        return(
            <nav className="navbar navbar-dark bg-secondary">
                <button type="button" className="navbar-toggler"
                        data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"/>
                </button>
                &nbsp;&nbsp;&nbsp;
                <label className="navbar-brand float-left" >
                    Course Name
                </label>
                <form className="form-inline ml-auto">
                    <div className="col-xs-4">
                        <input type="text"
                               onChange={this.props.courseTitleChanged}
                               value={this.props.course.title}
                               className="form-control mr-sm-2 float-left"
                               placeholder="New Course Title">
                        </input>
                    </div>
                    <i className="fa fa-search" aria-hidden="true"/>
                    &nbsp;
                    <i onClick={this.props.createCourse}
                       className="fa fa-plus" aria-hidden="true"/>
                </form>
            </nav>
        );
    }
}