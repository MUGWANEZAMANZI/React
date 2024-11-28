import React from "react";

function Profile({name,age,email}){
    return (<div className="m-4">
        <h1>Profile Card</h1>
        <div>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Age:</strong>{age}</p>
        </div>
    </div>
    );
}
export default Profile;