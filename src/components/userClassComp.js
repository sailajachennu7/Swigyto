import React from "react";

class UserClassComp extends React.Component {
    constructor(props){
        super(props)

        this.state = {
          userInfo: {
            Login: "sailaja",
            id: 524230,
            avatar_url: "https//img.com",
            created_at: "02-01-2025"
          }
        }

    }

    async componentDidMount(){
          const data = await fetch("https://api.github.com/users/sailajachennu7");

          const json = await data.json();
    console.log( json)


        this.setState({
            userInfo : json,    
    })        
    }

    
   render() {
    const {login,id,avatar_url,
      created_at} = this.state.userInfo
    return(
        
        <div className="user-card m-4 p-4 bg-gray-50 rounded-xl">
            <img  className="rounded-xl border-2" src={avatar_url}/>  
            <h1>Name : {login}</h1>
            <h2>Id : {id }</h2> 
            <h2>created_at: {created_at}</h2>
        </div>
    );
   };
};

export default UserClassComp;