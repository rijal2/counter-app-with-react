import React, { createElement } from 'react';
import { createRoot } from 'react-dom/client'

class CounterApp extends React.Component{
    constructor(props){
        super(props)

        // Inisialisasi nilai count didalam state
        this.state = {
            count : 0
        }
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
            <div>
                <p>Ayooo selesaikan tugasnya ya ...</p>
            </div>
        )
    }
}

const root = createRoot(document.getElementById("root"))
root.render(<CounterApp />)