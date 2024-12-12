import React from "react";

function Profile({name,age,email}){
    return (<>
        <h1>Profile Card</h1>
        <div className="profile">
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Age:</strong>{age}</p>
        </div>
    </>
    );
}
export default Profile;