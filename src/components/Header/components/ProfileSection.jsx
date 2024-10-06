import React from "react";

function ProfileSection({ search1, micro, search2, video, bell, userUrl, setIsShow }) {
  return (
    <div className="profile-section">
      {search1}
      {micro}
      {video}
      {bell}
      {search2 && <p onClick={() => setIsShow((prev) => !prev)}>{search2}</p>}
      <img src={userUrl} alt="user" />
    </div>
  );
}
export default ProfileSection;
