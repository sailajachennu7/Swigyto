import UserClassComp from "./userClassComp";
import React from "react";

class AboutPage extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
    }

    render() {
        return (<>
            <UserClassComp  name = {"NaveenKumar.Vallabhaneni  (ClassComponent)"} Role = {"CA"} Location = { "Banglore"}/>
        </>);
    }
}

export default AboutPage;