import React from 'react';
import ModuleListItem from './ModuleListItem';

export default class ModuleList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isCreateModule: false,
            editMode: false,
            module: {
                id: -1,
                title: 'New Module',
                lessons: [
                    {
                        title: 'New Lesson',
                        topics: [
                            {
                                title : 'New Title'
                            }
                        ]
                    }
                ]
            },
            modules: this.props.modules
        };
    }

    createModule = () => {
        this.state.module.id = (new Date()).getTime();


        this.setState({
            modules: [...this.state.modules, this.state.module ],
            isCreate : false
        })
    };

    deleteModule = (id) => {
        this.setState({
            modules: this.state.modules.filter(module => module.id !== id)
        })
    };

    setCreateModule = () => {
        this.setState( {
            isCreateModule: true
        });
    };

    unsetCreateModule = () => {
        this.setState( {
            isCreateModule: false
        });
    };

    titleChanged = (event) => {
        this.setState({
            module: {
                title: event.target.value,
                id: (new Date()).getTime(),
                lessons: [
                    {
                        title: 'New Lesson',
                        topics: [
                            {
                                title : 'New Title'
                            }
                        ]
                    }
                ]
            }
        });
    };

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
                        this.state.modules.map(
                            module =>
                                <ModuleListItem
                                    deleteModule={this.deleteModule}
                                    selectModule = {this.props.selectModule}
                                    selectedModule = {this.props.selectedModule}
                                    titleChanged = {this.titleChanged}
                                    module={module}
                                    isEdit = {this.state.editMode}
                                    key={module.id}/>
                        )
                    }

                    <li className="list-group-item">
                        {this.state.isCreateModule ?
                            <div>
                                <input
                                onChange={this.titleChanged}
                                defaultValue={this.state.module.title}
                                className="form-control">
                                </input>
                                <button onClick={this.createModule} className="btn btn-success btn-block">
                                    Create
                                </button>
                                <button onClick={this.unsetCreateModule} className="btn btn-danger btn-block">
                                    Cancel
                                </button>
                            </div>
                        :
                            <button onClick={this.setCreateModule} className="btn btn-primary btn-block">
                                <i className="fa fa-plus" aria-hidden="true"/>
                            </button>
                        }
                    </li>

                </ul>
            </div>
        )
    }
}