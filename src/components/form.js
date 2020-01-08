import React from "react";

class Form extends React.Component{

    render(){

        return(
                <form onSubmit = {this.props.loadWeather}>
                    <input className = "input-element" type="text" name="city" placeholder="City..."/>
                    <input className = "input-element" type="text" name="country" placeholder="Country..."/>
                    <button className = "button-element">Get Weather</button>
                </form>
           
        )
    }
}

export default Form;