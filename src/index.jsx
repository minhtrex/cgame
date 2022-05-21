import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import Board from './components/Board';
import Sheet from "./components/Sheet";
import * as codingBlockLabels from "./services/labels";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            history: [{
                cells: Array(16).fill(null),
                codingBlockNums: [
                    {block: codingBlockLabels.CODING_BLOCK_FORWARD, quantity: 6},
                    {block: codingBlockLabels.CODING_BLOCK_LEFT, quantity: 4},
                    {block: codingBlockLabels.CODING_BLOCK_RIGHT, quantity: 4},
                    {block: codingBlockLabels.CODING_BLOCK_FUNCTION, quantity: 2},
                ],
            }],
            stepNumber: 0,
            cells: Array(16).fill(null),
        };
    }

    handleDrop = (e) => {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const cells = current.cells.slice();
        // Copy array of objects need to be like this
        const codingBlockNums = current.codingBlockNums.map(a => {return {...a}});

        cells[e.target.id] = e.dragData.label

        for (const codingBlockNum of codingBlockNums) {
            if (codingBlockNum["block"] === e.dragData.label) {
                codingBlockNum["quantity"]--;
                break;
            }
        }

        this.setState({
            history: history.concat([{
                cells: cells,
                codingBlockNums: codingBlockNums,
            }]),
            stepNumber: history.length,
        });

        // this.setState(
        //     {cells: update(this.state.cells, {[e.target.id]:{$set: e.dragData.label}})}
        // )
    };

    jumpTo(step) {
        this.setState({
            stepNumber: step,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const cells = current.cells;
        const codingBlockNums = current.codingBlockNums.slice();
        const main = cells.slice(0, 11)
        const fn = cells.slice(12)

        const moves = history.map((step, move) => {
            const desc = move ? 'Go to move #' + move : 'Go to game start';

            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        return (
            <div className="drag_things_to_boxes">
                <div className="horizon-split left">
                    <Board
                        cells={cells}
                        codingBlockNums={codingBlockNums}
                        handleDrop={this.handleDrop}
                    />
                    <div className="game-info">
                        <ol>{moves}</ol>
                    </div>
                </div>
                <div className="horizon-split right">
                    <Sheet main={main} fn={fn}/>
                </div>
            </div>
        )
    }
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
