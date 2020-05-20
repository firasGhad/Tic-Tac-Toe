import React, {Component} from 'react'
import Board from './Board';
import '../index.css';
export default class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            xIsNext: true,
            squares: Array(9).fill(null)
        }
    }

    handleClick(i){
        const squares = this.state.squares.slice();
        const winner = calculateWinner(squares);
        if(winner || squares[i]){
            return;
        }
        squares[i]=this.state.xIsNext?'X':'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        })
    }

    startTheGame(){
        this.setState({
            xIsNext: true,
            squares: Array(9).fill(null)   
        })
        this.forceUpdate()
    }

    
    render(){
        return (
            <div className="container" >
            <div className="row">
                <div className="alert alert-primary col-md-12">Tic Tac Toe</div>
                    <Board onClick = {(i) => this.handleClick(i)}
                    squares={this.state.squares} ></Board>
                  
                </div>

<button type="button" className="btn btn-warning" onClick={() => this.startTheGame()}>Start The Game</button>
</div>
        )
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
            return squares[a];
        }
    }

    return null;
}