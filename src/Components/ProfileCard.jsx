function ProfileCard() {
  return (
    <>
      <Users name="Akash" age={23} Tech={<strong>React.js</strong>}>
        <h1>This is about my self :</h1>
      </Users>
      <Users name="Rahul" age={30} Tech={<strong> MSSQL </strong>}>
        <h1>This is about my self :</h1>
      </Users>
    </>
  );
}

//function Users (props) {                       //using tranditional way - props.name or props.children ....
//const {name, age, Tech, children} = props      //Destructuring the props
function Users({ name, age, Tech, children }) {  //Destructuring Directly
  return (
    <>
      <h1>Name: {name} </h1>
      <h1>Age: {age} </h1>
      <h1>Skills: {Tech}</h1>
      <div>{children}</div>
    </>
  );
}

export default ProfileCard;
