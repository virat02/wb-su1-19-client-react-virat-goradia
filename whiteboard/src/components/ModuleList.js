import React from 'react';
import ModuleListItem from './ModuleListItem';

export default class ModuleList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            modules: this.props.modules
        };
    }

    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-lg">
                    <a href="/"><i className='fa fa-times'/></a>
                    <a className="navbar-brand col-3 float-right" >
                        <b>{this.props.course.title}</b>
                    </a>
                </nav>

                <ul className="list-group">
                    {
                        this.props.modules.map(
                            (module, index) =>
                                <ModuleListItem
                                    module={module}
                                    key={index}
                                    deleteModule={this.props.deleteModule}
                                    selectModule = {this.props.selectModule}
                                    selectedModule = {this.props.selectedModule}/>
                        )
                    }

                    <li className="list-group-item">
                        {this.props.isCreateModule ?
                            <div>
                                <input
                                onChange={this.props.moduleTitleChanged}
                                defaultValue="New Module"
                                className="form-control">
                                </input>
                                <button onClick={this.props.createModule} className="btn btn-success btn-block">
                                    Create
                                </button>
                                <button onClick={this.props.unsetCreateModule} className="btn btn-danger btn-block">
                                    Cancel
                                </button>
                            </div>
                        :
                            <button onClick={this.props.setCreateModule} className="btn btn-primary btn-block">
                                <i className="fa fa-plus" aria-hidden="true"/>
                            </button>
                        }
                    </li>

                </ul>
            </div>
        )
    }
}