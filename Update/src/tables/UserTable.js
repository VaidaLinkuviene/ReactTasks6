import React from 'react'

const UserTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>DOB</th>
        <th>City</th>
        <th>Course</th>
        <th>Group</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.DOB}</td>
            <td>{user.city}</td>
            <td>{user.course}</td>
            <td>{user.group}</td>
            <td>
            <button
  onClick={() => {
    props.editRow(user)
  }}
  className="button muted-button"
>
  Edit
</button>
              <button
  onClick={() => props.deleteUser(user.id)}
  className="button muted-button"
>
  Delete
</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable