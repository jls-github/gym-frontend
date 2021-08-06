import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../constraints/index.js";
import GymMember from "./GymMember.js";
import GymMemberForm from "./GymMemberForm.js";

export default function GymDetails() {
  const [gym, setGym] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(BASE_URL + "gyms/" + id)
      .then((res) => res.json())
      .then((json) => setGym(json));
  }, [id]);

  useEffect(() => {
    console.log(gym);
  }, [gym]);

  function createGymMember(gymMemberDetails) {
    const newGymMember = {
      ...gymMemberDetails,
      gym_id: id,
    };

    fetch(BASE_URL + "/gym_members", {
      method: "POST",
      body: JSON.stringify(newGymMember),
    })
      .then((res) => res.json())
      .then((json) => {
        const newGym = { ...gym, gym_members: [...gym.gym_members, json] };
        setGym(newGym);
      });
  }

  return (
    <div>
      {gym && (
        <>
          <p>Gym Name: {gym.name}</p>
          <p>Gym Location: {gym.location}</p>
          <h3>Gym Members</h3>
          {gym.gym_members.map((gymMember) => (
            <GymMember gymMember={gymMember} />
          ))}
          <h3>Add new Gym Member</h3>
          <GymMemberForm createGymMember={createGymMember} />
        </>
      )}
    </div>
  );
}
