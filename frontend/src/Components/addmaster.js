import React, {Component} from 'react'

class AddMaster extends Component{
    state = {
        name: null,
        side: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.addMaster(this.state)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" onChange={this.handleChange} />
                    <label htmlFor="name">Side: </label>
                    <input type="text" id="side" onChange={this.handleChange} />
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

export default AddMaster