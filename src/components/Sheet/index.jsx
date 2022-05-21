import React from 'react';
import * as codingBlockLabels from '../../services/labels'
import SheetCell from "../SheetCell";

export default class Sheet extends React.Component {
    sheet_size = 6;

    constructor(props) {
        super(props);

        this.state = {
            position: 0,
            // 0: north; 1: east; 2: south; 3: west
            direction: 1,
        };
    }

    async onRun() {
        await this.runFn(this.props.main, this.props.fn)
    }

    async runFn(main, fn) {
        for (const cell of main) {
            if (cell != null) {
                switch (cell) {
                    case codingBlockLabels.CODING_BLOCK_FORWARD:
                        this.forward();
                        break;
                    case codingBlockLabels.CODING_BLOCK_LEFT:
                        this.turnLeft();
                        break;
                    case codingBlockLabels.CODING_BLOCK_RIGHT:
                        this.turnRight();
                        break;
                    case codingBlockLabels.CODING_BLOCK_FUNCTION:
                        await this.runFn(fn, fn);
                        break;
                    default:
                }

                await this.sleep(500);
            }
        }
    }

    forward() {
        const position = this.state.position;
        const direction = this.state.direction;

        let y = Math.floor(position / this.sheet_size);
        let x = Math.floor(position % this.sheet_size);
        console.log(y, x);

        switch (direction) {
            case 0:
                y--;
                if (y < 0) {
                    y = 0;
                }
                break;
            case 1:
                x++;
                if (x >= this.sheet_size) {
                    x = this.sheet_size - 1;
                }
                break;
            case 2:
                y++;
                if (y >= this.sheet_size) {
                    y = this.sheet_size - 1;
                }
                break;
            case 3:
                x--;
                if (x < 0) {
                    x = 0;
                }
                break;
            default:
                console.log('no such a thing')
        }
        console.log(y, x);

        this.setState({
            position : y * this.sheet_size + x,
        });
    }

    turnRight() {
        const direction = this.state.direction;
        const newDirection = Math.floor((direction + 1) % 4);

        console.log(direction);
        console.log(newDirection);

        this.setState({
            direction : newDirection,
        });
    }

    turnLeft() {
        const direction = this.state.direction;
        const newDirection = Math.floor((direction - 1 + 4) % 4);

        console.log(direction);
        console.log(newDirection);

        this.setState({
            direction : newDirection,
        });
    }

    sleep = (ms) => new Promise(r => setTimeout(r, ms));

    renderCell(i) {
        const position = this.state.position;
        const direction = this.state.direction;
        const isOn = i === position;

        return <SheetCell
            id={i}
            direction={direction}
            isOn={isOn}
        />;
    }

    render() {
        return (
            <div>
                <button onClick={() => this.onRun()}>Run</button>
                <div>
                    <div className="board-row">
                        {this.renderCell(0)}
                        {this.renderCell(1)}
                        {this.renderCell(2)}
                        {this.renderCell(3)}
                        {this.renderCell(4)}
                        {this.renderCell(5)}
                    </div>
                    <div className="board-row">
                        {this.renderCell(6)}
                        {this.renderCell(7)}
                        {this.renderCell(8)}
                        {this.renderCell(9)}
                        {this.renderCell(10)}
                        {this.renderCell(11)}
                    </div>
                    <div className="board-row">
                        {this.renderCell(12)}
                        {this.renderCell(13)}
                        {this.renderCell(14)}
                        {this.renderCell(15)}
                        {this.renderCell(16)}
                        {this.renderCell(17)}
                    </div>
                    <div className="board-row">
                        {this.renderCell(18)}
                        {this.renderCell(19)}
                        {this.renderCell(20)}
                        {this.renderCell(21)}
                        {this.renderCell(22)}
                        {this.renderCell(23)}
                    </div>
                    <div className="board-row">
                        {this.renderCell(24)}
                        {this.renderCell(25)}
                        {this.renderCell(26)}
                        {this.renderCell(27)}
                        {this.renderCell(28)}
                        {this.renderCell(29)}
                    </div>
                    <div className="board-row">
                        {this.renderCell(30)}
                        {this.renderCell(31)}
                        {this.renderCell(32)}
                        {this.renderCell(33)}
                        {this.renderCell(34)}
                        {this.renderCell(35)}
                    </div>
                </div>
            </div>
        );
    }
  }
