import React from 'react';
import ModuleListItem from './ModuleListItem';

export default class ModuleList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            module: {
                id: -1,
                title: 'New Module'
            },
            modules: this.props.modules
        }
    }

    createModule = () => {
        this.state.module.id = (new Date()).getTime();

        this.setState({
            modules: [...this.state.modules, this.state.module ]
        })
    };

    deleteModule = (id) => {
        console.log('deleteModule ' + id);
        this.setState({
            modules: this.state.modules.filter(module => module.id !== id)
        })
    };

    titleChanged = (event) => {
        this.setState({
            module: {
                title: event.target.value,
                id: (new Date()).getTime()
            }
        })
    };

    render() {
        return(
            <div>
                <h3>Module List</h3>
                <ul className="list-group">
                    {
                        this.state.modules.map(
                            module =>
                                <ModuleListItem
                                    deleteModule={this.deleteModule}
                                    module={module}
                                    key={module.id}/>
                        )
                    }

                    <li className="list-group-item">
                        <input
                            onChange={this.titleChanged}
                            defaultValue={this.state.module.title}
                            className="form-control"/>
                        <button onClick={this.createModule} className="btn btn-primary btn-block">
                            <i className="fa fa-plus" aria-hidden="true"/>
                        </button>
                    </li>

                </ul>
            </div>
        )
    }
}