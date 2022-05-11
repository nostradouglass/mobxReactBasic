import { observer } from 'mobx-react'
import React, { useState } from 'react'
import { UserStoreImpl } from './UserStore'


interface CreateUserProps {
userStore: UserStoreImpl
}


export const CreateUser = observer(({userStore}: CreateUserProps) => {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")

    let handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        userStore.addUser(name, parseInt(age))
        setName("")
        setAge("")
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Name: 
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>
                Age: 
                <input type="number"value={age} onChange={(e) => setAge(e.target.value)} />
            </label>
            <button type="submit">Create User</button>
        </form>
    </div>
  )
})
