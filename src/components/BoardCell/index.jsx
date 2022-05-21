import React from 'react';
import './index.css';
import { DropTarget } from 'react-drag-drop-container';
import forward_img from '../../assets/images/move_forward.png'
import backward_img from '../../assets/images/move_backward.png'
import right_img from '../../assets/images/turn_right.png'
import left_img from '../../assets/images/turn_left.png'
import function_img from '../../assets/images/function.png'
import random_img from '../../assets/images/random.png'
import * as codingBlockLabels from '../../services/labels'

export default class BoardCell extends React.Component {
    render() {
        let img_src;
        switch (this.props.label) {
            case codingBlockLabels.CODING_BLOCK_FORWARD:
                img_src = forward_img;
                break;
            case codingBlockLabels.CODING_BLOCK_BACKWARD:
                img_src = backward_img;
                break;
            case codingBlockLabels.CODING_BLOCK_LEFT:
                img_src = left_img;
                break;
            case codingBlockLabels.CODING_BLOCK_RIGHT:
                img_src = right_img;
                break;
            case codingBlockLabels.CODING_BLOCK_FUNCTION:
                img_src = function_img;
                break;
            case codingBlockLabels.CODING_BLOCK_RANDOM:
                img_src = random_img;
                break;
            default:
        }

        return (
            <div>
                <DropTarget
                    onHit={this.props.handleDrop}
                    targetKey={this.props.targetKey}
                >
                    <div className="square" id={this.props.id}>
                        <img src={img_src} title={this.props.label} height="45"/>
                    </div>
                </DropTarget>
            </div>
        );
    }
}