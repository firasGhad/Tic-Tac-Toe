import React, { Component } from 'react'

import Square from './Square'


export default class Board extends Component {
    renderSquare(i) {
        return <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />
    }
    render() {
        return (
            <div >
                <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-3 col-lg-3">
                        {this.renderSquare(0)}
                    </div>
                    <div className="col-md-3 col-sm-3 col-lg-3">
                        {this.renderSquare(1)}
                    </div>                 
                    <div className="col-md-3 col-sm-3 col-lg-3">
                        {this.renderSquare(2)}
                    </div>  
                </div>
                </div>
                <div className="container">

                <div className="row">
                    <div className="col-md-3 col-sm-3 col-lg-3">
                        {this.renderSquare(3)}
                    </div>
                    <div className="col-md-3 col-sm-3 col-lg-3">
                        {this.renderSquare(4)}
                    </div>                 
                    <div className="col-md-3 col-sm-3 col-lg-3">
                        {this.renderSquare(5)}
                    </div>  
                </div>
                </div>
                <div className="container">

                <div className="row">
                    <div className="col-md-3 col-sm-3 col-lg-3">
                        {this.renderSquare(6)}
                    </div>
                    <div className="col-md-3 col-sm-3 col-lg-3">
                        {this.renderSquare(7)}
                    </div>                 
                    <div className="col-md-3 col-sm-3 col-lg-3">
                        {this.renderSquare(8)}
                    </div>  
                </div>
                </div>

            </div>
        )
    }
}