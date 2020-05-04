import React from 'react';

class Game extends React.Component{

    constructor(){
        super()
        this.state = {
            name: ''
        };
    }

    start() {
        if(this.state.name.length > 0){
            this.props.onStartClicked(this.state.name)
        }
    }

    handlerChange(event) {
        this.setState({name: event.target.value});
    }

    render(){
        return(
            <div className="Game">
                <ul>
                    <form action="/action_page.php">
                        <li><h1>Welcome to Easy-Learn Game!</h1></li>
                        <li><h2>To play a new game insert:</h2></li>
                        <li><label >Username:</label>
                        <input type="text" value={this.state.name} onChange={this.handlerChange.bind(this)} placeholder="Please enter name" required/></li>
                        <li><button className="startButton" onClick={this.start.bind(this)}>Click to start!</button></li>
                        <li><button onClick={this.props.about}>About</button><button>Settings</button></li>
                    </form>
                </ul>
            </div>
        )
    }
}
export default Game;