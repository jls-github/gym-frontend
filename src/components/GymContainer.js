import React, {useEffect, useState} from 'react'
import {BASE_URL} from '../constraints/index.js'
import Gym from './Gym.js'

export default function GymContainer() {

    const [gyms, setGyms] = useState(null)

    useEffect(() => {
        fetch(BASE_URL + 'gyms')
            .then(res => res.json())
            .then(json => setGyms(json))
    }, [])

    function populateGyms() {
        return gyms.map(gym => <Gym gym={gym} deleteGym={deleteGym} updateGym={updateGym} key={gym.id}/>)
    }

    function deleteGym(gym) {
        fetch(BASE_URL + 'gyms/' + gym.id, {
            method: "DELETE"
        })
        const newGyms = gyms.filter(g => g.id !== gym.id)
        setGyms(newGyms)
    }

    function updateGym(gym) {
        fetch(BASE_URL + 'gyms/' + gym.id, {
            method: "UPDATE",
            body: JSON.stringify(gym)
        })

        const newGyms = gyms.map(g => {
            if (g.id === gym.id) {
                g = gym
            }
        })
        setGyms([...newGyms])
    }

    return (
        <div>
            {gyms && populateGyms()}
        </div>
    )
}
