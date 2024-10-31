import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const Profile: React.FC = () => {
  return (
    <div className="profile">
      <FontAwesomeIcon icon={faUser} size="1x" color="white" />
    </div>
  );
};

export default Profile;
