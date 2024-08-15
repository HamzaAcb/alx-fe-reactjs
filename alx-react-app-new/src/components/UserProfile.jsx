const UserProfile = (props) => {
    return (
      <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' , backgroundColor: 'grey'}}>
        <h2 style={{ color: 'purple' }}>{props.name}</h2>
        <p style={{ fontWeight: 'bold' }}>Age: <span>{props.age}</span></p>
        <p style={{ color: 'yellow' }}>Bio: {props.bio}</p>
      </div>
    );
  };
  
  export default UserProfile;