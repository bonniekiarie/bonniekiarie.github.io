import React from "react";
import profile from "../profile.jpg";
import Container from "react-bootstrap/Container"

const Profile = () => {
  return (
    <Container className="profile">
      <div className="image">
        <img src={profile} alt="" className="profile-image" />
      </div>
    </Container>
  );
};
export default Profile;
