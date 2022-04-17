import React, { useState } from 'react'

const AddUserForm = (props) => {
  const initialFormState = {id: null, firstName: '', lastName:'', 
  DOB:'', city: '', course: '', group: '' }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        if (!user.firstName || !user.lastName) return

        props.addUser(user)
        setUser(initialFormState)
      }}
    >
      <label>Firstname</label>
      <input
        type="text"
        name="firstName"
        value={user.firstName}
        onChange={handleInputChange}
      />
      <label>Lastname</label>
      <input
        type="text"
        name="lastName"
        value={user.lastName}
        onChange={handleInputChange}
      />
       <label>DOB</label>
      <input
        type="date"
        name="DOB"
        value={user.DOB}
        onChange={handleInputChange}
      />
       <label>City</label>
      <input
        type="text"
        name="city"
        value={user.city}
        onChange={handleInputChange}
      />
       <label>Course</label>
      <input
        type="text"
        name="course"
        value={user.course}
        onChange={handleInputChange}
      />
       <label>Group</label>
      <input
        type="text"
        name="group"
        value={user.group}
        onChange={handleInputChange}
      />
      <button>Add new user</button>
    </form>
  )
}

export default AddUserForm