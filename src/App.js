import React, { Component } from 'react';
import '../src/css/index.css';

class App extends Component {
    render(){
        return (
            <section className="container">
                <header className="App-header">
                    <h1>Rate My Drink</h1>
                </header>
                <a href="/"><button className="btn">Sign in with Google</button></a>
            </section>
        )
    }
}

export default App;
