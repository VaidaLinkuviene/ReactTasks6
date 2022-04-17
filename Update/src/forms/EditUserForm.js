import React, { useState, useEffect } from 'react'

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser)

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  useEffect(() => {
    setUser(props.currentUser)
  }, [props])

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        props.updateUser(user.id, user)
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
      <button>Update user</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm