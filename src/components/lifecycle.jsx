import React from 'react'
//import ReactDOM from 'react-dom'

class Test extends React.Component{
    constructor(props){
        super(props);
        this.state ={ hello: "FRIENDS!"};
    }
componentWillMount(){
    console.log("componentWillMount()");
}
componentDidMount(){
    console.log("componentDidMount()");
}
changeState(){
    this.setState({hello: "guysssssssss"});
}

render(){
    return(
        <div>
            <h1>Example of Lifecycle of a component, Hello {this.state.hello}</h1>
            <h2>
                <a onClick={this.changeState.bind(this)}>Click Here</a>
                </h2>                            
        </div>
    );
}
shouldComponentUpdate(nextProps, nextState) 
{
    console.log("shouldComponentUpdate()");
    return true;
}

componentWillUpdate() {
    console.log("componentWillUpdate()");
}

componentDidUpdate() {
    console.log("componentDidUpdate()");
}
}

export default Test