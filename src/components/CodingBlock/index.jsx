import React from 'react';
import { DragDropContainer } from 'react-drag-drop-container';

export default class CodingBlock extends React.Component {
    render() {
      if (this.props.remainBlock === 0) {
          return null;
      }

      return (
        <div className="coding_block" style={{display: 'inline-block'}}>
          <DragDropContainer
            targetKey={this.props.targetKey}
            dragData={{label: this.props.label}}
            customDragElement={this.props.customDragElement}
            onDragStart={()=>(console.log('start'))}
            onDrag={()=>(console.log('dragging'))}
            onDragEnd={()=>(console.log('end'))}
            onDrop={(e)=>(console.log(e))}
          >
            <img src={this.props.image} height="45" style={{ marginLeft: 40}}/>
          </DragDropContainer>
		  x{this.props.remainBlock}
        </div>
      );
    }
  }
