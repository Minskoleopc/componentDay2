import React from "react";
import ReactDOM from "react-dom/client";

let ele = document.querySelector('#root')
let root = ReactDOM.createRoot(ele)
class App extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = { latitude: null, errorMessage: ""}
    // }
    state = { latitude: null, errorMessage: ""}
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ latitude: position.coords.latitude })
                console.log(position.coords.latitude)
            }
            ,
            (err) => {
                this.setState({ errorMessage: err.message})
            }
        )
    }
    render() {
        // return (<div>
        //     <div>Latitude:{this.state.latitude}</div>
        //     <div>Error:{this.state.errorMessage}</div>
        // </div>
        // )

        if(this.state.errorMessage && !this.state.latitude){
            return <div>Error:{this.state.errorMessage}</div>
        }
        else if(!this.state.errorMessage && this.state.latitude){
            return <div>Latitude:{this.state.latitude}</div>
        }
        else {
            return <div>Loading</div>
        }

    }



}

root.render(<App />)



// latitute and no error message
// errorMeassge and no latitue 
// no error and no latitude