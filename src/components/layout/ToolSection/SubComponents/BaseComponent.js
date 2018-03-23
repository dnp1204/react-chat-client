import _ from 'lodash';
import React, { Component } from 'react';
import IconWithNextText from '../../../common/icon/IconWithNextText';
import TextAndRightIcon from '../../../common/icon/TextAndRightIcon';

class BaseComponent extends Component {
  
    state = { showChild: true }
  
    render() {
      const { usedBySubComponent, isNeededBorderBottom } = this.props;
      
      return (
      <div className={`tool--section ${usedBySubComponent} ${isNeededBorderBottom ? "border-bottom" : ""}`}>
        <div className="title">
          <TextAndRightIcon
            text="Options"
            iconName="chevron-down"
            isCursorPointer
            iconClassName={this.state.showChild ? "move-down-90deg-animation" : "move-left-90deg-animation"}
            onIconClickHandler={() => this.setState({ showChild: !this.state.showChild })}
          />
        </div>
        <div className="children">
          {this.state.showChild ? this.props.children : <div />}  
        </div>
      </div>
    );
  }
}

export default BaseComponent;
