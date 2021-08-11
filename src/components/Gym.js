import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Gym.css"

export default function Gym({ gym, deleteGym, updateGym, initialDelay=0 }) {
  const [newGym, setNewGym] = useState({ ...gym });
  const [editMode, setEditMode] = useState(false);
  const [render, setRender] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {setRender(true)}, initialDelay)
    return () => clearTimeout(timeout)
  }, [initialDelay])

  function handleChange(e) {
    const updatedValue = { ...newGym };
    updatedValue[e.target.name] = e.target.value;
    setNewGym({ ...updatedValue });
  }

  function toggleEdit() {
    setEditMode(!editMode);
  }

  function handleUpdate(e) {
    e.preventDefault();
    updateGym(newGym);
    setEditMode(false);
  }

  if (!render) {
    return <></>
  }

  return (
    <div className="card">
      <Link to={`/gyms/${gym.id}`}>
        <p>{gym.name}</p>
      </Link>
      <p>{gym.location}</p>
      {editMode && (
        <>
          <button onClick={() => deleteGym(gym)}>Delete Gym</button>

          <form onSubmit={handleUpdate}>
            <input name="name" value={newGym.name} onChange={handleChange} />
            <input
              name="location"
              value={newGym.location}
              onChange={handleChange}
            />
            <button type="submit">Update Gym</button>
          </form>
        </>
      )}
      <button onClick={toggleEdit}>Edit</button>
    </div>
  );
}
