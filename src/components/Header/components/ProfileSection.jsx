import React from "react";

function ProfileSection({ search1, micro,search2, video, bell, userUrl }) {
  return (
    <div className="profile-section">
      {search1}
      {micro}
      {video}
      {bell}
      {search2}
      <img src={userUrl} alt="user" />
    </div>
  );
}
export default ProfileSection;
