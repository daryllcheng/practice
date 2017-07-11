/*Referenced from https://github.com/cht8687/react-text-collapse*/ 

import React, { Component } from 'react';
import { Motion, spring } from "react-motion";

class TextCollapse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapse: true
    }
    this.toggleAction = this.toggleAction.bind(this);
  }

  toggleAction() {
    this.setState({ 
      collapse: !this.state.collapse
    });
  }

  render() {
    return (
      <Motion style={{ x: spring( this.state.collapse ? 200 : 500 )}}>
        {
          ({ x }) => (
            <div>
              <div style={{ display: `block`, overflow: `hidden`, height: `${ x }` }}>
                { this.props.children }
              </div>
              <div style={{ color: '#69306D' }} onClick={ this.toggleAction }>
                { this.state.collapse ? 
                  <div style={{ float:'left', margin: '20px' }}><span><span className="glyphicon glyphicon-chevron-down" aria-hidden="true"></span> SHOW FULL { this.props.name }</span></div>
                  : <div style={{ float:'left', margin: '20px' }}><span><span className="glyphicon glyphicon-chevron-up" aria-hidden="true"></span> HIDE FULL { this.props.name }</span></div> 
                }
              </div>
            </div>
          )
        }
      </Motion>
    );
  }
}

export default TextCollapse;