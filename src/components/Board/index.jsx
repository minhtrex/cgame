import React from 'react';
import BoardCell from "../BoardCell";
import * as codingBlockLabels from '../../services/labels'
import CodingBlock from "../CodingBlock";
import forward_img from "../../assets/images/move_forward.png";
import left_img from "../../assets/images/turn_left.png";
import right_img from "../../assets/images/turn_right.png";
import function_img from "../../assets/images/function.png";

export default class Board extends React.Component {
    renderCell(i) {
        const cells = this.props.cells;

        return <BoardCell
            targetKey="box"
            label={cells[i]}
            id={i}
            handleDrop={this.props.handleDrop}
        />;
    }

    render() {
        let fwNum = 0
        let lfNum = 0
        let rtNum = 0
        let fnNum = 0
        for (const codingBlockNum of this.props.codingBlockNums) {
            switch (codingBlockNum["block"]) {
                case codingBlockLabels.CODING_BLOCK_FORWARD:
                    fwNum = codingBlockNum["quantity"];
                    break;
                case codingBlockLabels.CODING_BLOCK_LEFT:
                    lfNum = codingBlockNum["quantity"];
                    break;
                case codingBlockLabels.CODING_BLOCK_RIGHT:
                    rtNum = codingBlockNum["quantity"];
                    break;
                case codingBlockLabels.CODING_BLOCK_FUNCTION:
                    fnNum = codingBlockNum["quantity"]
                    break;
                default:
                    console.log(`Sorry, we are out of option.`);
            }
        }

        return (
            <div>
                <div className="vertical-split top">
                    <h3>Drag the coding block into below panel's cells. Then click Run button.</h3>
                    <div className="things_to_drag">
                        <CodingBlock targetKey="box" label={codingBlockLabels.CODING_BLOCK_FORWARD} image={forward_img} remainBlock={fwNum}/>
                        <CodingBlock targetKey="box" label={codingBlockLabels.CODING_BLOCK_LEFT} image={left_img} remainBlock={lfNum}/>
                        <CodingBlock targetKey="box" label={codingBlockLabels.CODING_BLOCK_RIGHT} image={right_img} remainBlock={rtNum}/>
                        <CodingBlock targetKey="box" label={codingBlockLabels.CODING_BLOCK_FUNCTION} image={function_img} remainBlock={fnNum}/>
                    </div>
                </div>
                <br/>
                <div className="vertical-split bottom">
                    <div>
                        <div className="board-row">
                            {this.renderCell(0)}
                            {this.renderCell(1)}
                            {this.renderCell(2)}
                            {this.renderCell(3)}
                        </div>
                        <div className="board-row">
                            {this.renderCell(4)}
                            {this.renderCell(5)}
                            {this.renderCell(6)}
                            {this.renderCell(7)}
                        </div>
                        <div className="board-row">
                            {this.renderCell(8)}
                            {this.renderCell(9)}
                            {this.renderCell(10)}
                            {this.renderCell(11)}
                        </div>
                        <div>
                            Function:
                        </div>
                        <div className="board-row">
                            {this.renderCell(12)}
                            {this.renderCell(13)}
                            {this.renderCell(14)}
                            {this.renderCell(15)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
  }
