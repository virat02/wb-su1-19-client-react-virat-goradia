import React from 'react';

const NavBar =() =>

    <nav className="navbar navbar-light bg-light justify-content-between">
        <a className="nav-item" href="#">
            <i className="fa fa-bars"/>
        </a>
        <a className="navbar-brand">Course Manager</a>
        <form className="form-inline">
            <input className="form-control mr-sm-2" type="search"
                   placeholder="New Course Title" aria-label="Search" />
            <a className="nav-item" href="#">
                <i className="fa fa-search"/>
            </a>
            <a className="nav-link" href="#">
                <i className="fa fa-plus" aria-hidden="true"/>
            </a>
        </form>
    </nav>;

export default NavBar;