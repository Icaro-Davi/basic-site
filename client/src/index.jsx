import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const proxy = 'http://localhost:3001/api';

class App extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        axios
            .get(`${proxy}/userPosts`)
            .then(result => {
                console.log(result)
            });
    }
    render(){
       return ( 
        <div>
            Hello World
        </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('main'));