import React, { useState } from 'react'
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'

const App = () => {
  const usersData = [
    {id: 1, firstName: 'Vaida', lastName:'Linkuviene',  DOB:'1988-08-27', city: 'Panevėžys', course: 'JP', group: '1' },
    { id: 2, firstName: 'Tania', lastName:'Aaa',  DOB:'1978-11-22', city: 'Vilnius', course: 'JP', group: '2' },
  ]

  const [users, setUsers] = useState(usersData)

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  const [editing, setEditing] = useState(false);
  const initialFormState = {id: 1, firstName: '', lastName:'', DOB:'', city: '', course: '', group: '' }
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = (user) => {
    setEditing(true)
  
    setCurrentUser({ id: user.id, firstName: user.firstName, lastName: user.lastName, DOB: user.DOB, 
      city: user.city, course: user.course, group: user.group })
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)
  
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)))
  }


  

  return (
    <div className="container">
      <div className="flex-row">
      <div className="flex-large">
  {editing ? (
    <div>
      <h2>Edit user</h2>
      <EditUserForm
        setEditing={setEditing}
        currentUser={currentUser}
        updateUser={updateUser}
      />
    </div>
  ) : (
    <div>
      <h2>Add user</h2>
      <AddUserForm addUser={addUser} />
    </div>
  )}
</div>
        <div className="flex-large">
          <h2>View users</h2>
<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )
}

export default App