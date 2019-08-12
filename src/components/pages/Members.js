import React from 'react';
import MemberList from '../../data/members';

const Members = () => {
  let members = MemberList.map((member) => {
    return (
      <li className="teacher" key={member.id} >
        <img className="teacher-img" src={member.img_src} alt="member" />
        <h3>{member.firstName + " " + member.lastName}</h3>
        <p>{member.grade}</p>
      </li>
    );
  }); 
  
  return (
    <div className="main-content">
      <h2>Members</h2>
      <ul className="group">
        {members}    
      </ul>
    </div>
  );
}

export default Members;