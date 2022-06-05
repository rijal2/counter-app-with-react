import React, { createElement } from 'react';
import { createRoot } from 'react-dom/client';

// Pembuatan componen dengan metode functional component.
function CounterDisplay({count}){
    if(count === 0){
        return (
            <div>
                <p>{count}</p>
            </div>
        )
    }
    
    if(count % 5 === 0 && count % 7 === 0){
        return (
            <div>
                <p>TamRes</p>
            </div>
        )
    }
    
    if(count % 5 === 0){
        return (
            <div>
                <p>Tam</p>
            </div>
        )
    }
    
    if(count % 7 === 0){
        return (
            <div>
                <p>Res</p>
            </div>
        )
    }
    
    return (
        <div>
            <p>{count}</p>
        </div>
    )
}

function IncreaseButton({increase}){
    return(
        <div>
            <button onClick={increase} type="button" class="btn btn-primary">+ increase</button>
        </div>
    )
}
function ResetButton({reset}){
    return(
        <div>
            <button onClick={reset} type="button" class="btn btn-danger">- reset</button>
        </div>
    )
}

// Pembuatan componen dengan metode class component, sebab membutuhkan state sebagai didalam pembuatannya. State bertugas menagngkap dan menyimpan data
class CounterApp extends React.Component{
    constructor(props){
        super(props)

        // Inisialisasi nilai count didalam state
        this.state = {
            count : 0
        }

        // binding
        this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
        this.onReserEventHandler = this.onReserEventHandler.bind(this)
    }

    onIncreaseEventHandler(){
        this.setState((previousState) => {
            return {
                count: previousState.count + 1
            }
        })
    }

    onReserEventHandler(){
        this.setState(() => {
            return {count:0}
        })
    }

    render(){
        return (
            <div class="container">
                <div class="row justify-content-center">
                    
                            <IncreaseButton increase={this.onIncreaseEventHandler}/>
                            <CounterDisplay count={this.state.count}/>
                            <ResetButton reset={this.onReserEventHandler} />
                </div>
            </div>
        )
    }
}

const root = createRoot(document.getElementById("root"))
root.render(<CounterApp />)