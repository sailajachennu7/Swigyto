const UserFunComp = (props) => {
    return(
        <div className="user_fun">
            <h1>Name : {props.name}</h1>
            <h2>Role : {props.Role}</h2>
            <h3>Location : {props.Location}</h3>
        </div>
    );
};

export default UserFunComp; 