import React from 'react';

class TextCounter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: 'Treinaweb'
        }
    }

    setText(event){
        this.setState({text: event.currentTarget.value});
    }

    render(){
        return (
            <div>
                <textarea value={this.state.text} onChange={this.setText.bind(this)} />
                <p>Text Length: {this.state.text.length}</p>
            </div>
        );
    }
}

export default TextCounter;