import React, {useState} from 'react'

export default function Gym({gym, deleteGym, updateGym}) {
    const [newGym, setNewGym] = useState({...gym})

    function handleChange(e) {
        const updatedValue = {...newGym}
        updatedValue[e.target.name] = e.target.value
        setNewGym({...updatedValue})
    }

    function handleUpdate(e) {
        e.preventDefault()
        updateGym(newGym)
    } 


    return (
        <div>
            <br />
                <p>{gym.name}</p>
                <p>{gym.location}</p>

                <button onClick={handleUpdate}>Delete Gym</button>

                <form onSubmit={(e) => {e.preventDefault()}}>
                    <input name="name" value={newGym.name} onChange={handleChange} />
                    <input name="location" value={newGym.location} onChange={handleChange} />
                    <button type="submit">Update Gym</button>
                </form>
            <br />
        </div>
    )
}
