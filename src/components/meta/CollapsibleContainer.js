import React from 'react'
import './styles/CollapsibleContainer.css'

class CollapsibleContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {collapsed: false};
    }

    toggleCollapse = () => {
        this.setState(prevState => ({
          collapsed: !prevState.collapsed
        }));
    }

    render () {

        const { title, children } = this.props;
        const { collapsed } = this.state;

        
        return (
            <div className="collapsible-container">
                <div>
                    <h2 className="collapsible-container-title">{title}</h2> 
                    <button onClick={this.toggleCollapse} className='collapse-button'>
                        {collapsed ? '+' : '-'}
                    </button>
                </div>
                {!collapsed && this.props.children}
            </div>
        )
    }
}

export default CollapsibleContainer;