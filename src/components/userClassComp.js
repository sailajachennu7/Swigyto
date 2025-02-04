import React from "react";

class UserClassComp extends React.Component {
    constructor(props){
        super(props)

        this.state = {
          userInfo: {
            Login: "sailaja",
            id: 524230,
            avatar_url: "https//img.com"
          }
        }

    }

    async componentDidMount(){
          const data = await fetch("https://api.github.com/users/sailajachennu7");

          const json = await data.json();

        this.setState({
            userInfo : json,
           
    })
        
    }

    
   render() {
    const {login,id,avatar_url} = this.state.userInfo
    return(
        
        <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
            <img src={avatar_url}/>  
            <h1>Name : {login}</h1>
            <h2>Id : {id }</h2> 
        </div>
    );
   };
};

export default UserClassComp;