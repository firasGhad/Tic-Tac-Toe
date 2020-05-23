import React, { Component } from 'react'
import Board from './Board';
import '../index.css';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot } from '@fortawesome/free-solid-svg-icons'


export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            xIsNext: true,
            squares: Array(9).fill(null),
            robot: false,
            robotParam: 'O',
            gameCount: 1,
            greeting: 'Play with a friend or the Robot. Enjoy!'
        }
    }

    fillSquare(i, squares) {
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        })
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        let winner = this.calculateWinner(squares);
        if (winner || squares[i]) {
            return;
        }
        this.fillSquare(i, squares);
        if (this.state.robot) {
            setTimeout(() => {
                winner = this.calculateWinner(squares);
                if (winner) {
                   
                    return;
                }
                let rand = getRandomSquare(squares);
                this.fillSquare(rand, squares);
            }, 1000);


        }
    }

    startTheGame() {
        this.setState({
            squares: Array(9).fill(null),
            robot: false
        })
    }


    playTheRobot() {
        this.setState({
            squares: Array(9).fill(null),
            robot: true
        })

    }

    calculateWinner = (squares) => {
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
                let _case = this.state.robot ? 1 : 0;
                switch (_case) {
                    case 0:
                        this.setState({
                            greeting: 'Player ' + squares[a] + ' won! Play again.'
                        })
                    case 1:
                        if (squares[a] == this.state.robotParam) {
                            this.setState({
                                greeting: 'The Robot Won! Play again.'
                            })
                        } else {
                            this.setState({
                                greeting: 'You won! Play again.'
                            })
                        }
                        let param;
                        if(this.state.robotParam == 'X'){
                            param = 'O';
                        }else{
                            param = 'X'
                        }
                        this.setState({
                            robotParam: param,
                            gameCount: this.state.gameCount+1
                        })

                }
                return squares[a];

            }



        }


        return null;
    }

    render() {
        return (
            <div className="container p-3 mb-2 bg-info text-white" >
            <div className="alert alert-primary col-md-12">Tic Tac Toe
</div>
                    <div class="alert alert-dark" role="alert">
                        {this.state.greeting}</div>
                <div  className="row">
                   <div className="col-md-3">
                   <button type="button" className="btn btn-warning" onClick={() => this.playTheRobot()}>Play with Robot   <FontAwesomeIcon icon={faRobot} />
                    </button>
                   </div>
                   

                    <Board  onClick={(i) => this.handleClick(i)}
                        squares={this.state.squares} className="col-md-6"></Board>
                        
                   <div className="col-md-3">
                   <button type="button" className="btn btn-warning" onClick={() => this.startTheGame()}>Start The Game</button>

                   </div>



                </div>

            </div>
        )
    }
}

const getRandomSquare = (squares) => {

    let emptySquares = squares.map((square, index) => {

        if (square === null) return index;
    })
    emptySquares = emptySquares.filter((square) => square !== undefined)
    return getRndmFromSet(emptySquares);


}

function getRndmFromSet(set) {
    var rndm = Math.floor(Math.random() * set.length);
    return set[rndm];
}