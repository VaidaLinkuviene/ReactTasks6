import React, { useState, useEffect } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [person, setPerson] = useState({id: new Date().getTime().toString(), firstName: '', lastName:'', 
  DOB:'', city: '', course: '', group: '' });
  const [people, setPeople] = useState([]);
 


  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.lastName && person.DOB && person.city && person.course && person.group) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: '', lastName:'', 
      DOB:'', city: '', course: '', group: '' });
    };
  };

  const handleDelete=(id)=>{
      const newPeople = people.filter(item=>item.id !==id);  
setPeople(newPeople);
    }
  

    const [lastName, setLastName] = useState();
    const [everybody, setEverybody] = useState();
  
    useEffect(() => {
      setEverybody(people);
    }, []);
  
  const filter = (e) => {
    const value = e.target.value;
  
      if(value !== ""){
  
        const res = people.filter((every) => {
          return every.lastName.startsWith(value);
        });
  
        setPeople(res);  
      }else{
        setPeople(everybody)
      }
      setLastName(value);
  };
  
    
    
  return (

<div className='container'>
      <div className='row'>
            <div className="input-group mt-3">
              <div className="form-outline">
                <input type="search" value={lastName} onChange={filter} id="form" className="form-control input" 
                placeholder="&#128270; Search by Lastname" />
              </div>
            </div>


      <article className='form my-3'>
        <form onSubmit={handleSubmit}>
          <div className='form'>
            <label htmlFor='firstName'>Firstname : </label> <br></br>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            //  onClick= {handleDelete}
            />
          </div>
          <div className='form'>
            <label htmlFor='lastName'>Lastname : </label> <br></br>
            <input
              type='lastName'
              id='lastName'
              name='lastName'
              value={person.lastName}
              onChange={handleChange}
            />
          </div>
          <div className='form'>
            <label htmlFor='DOB'>Date of Birth : </label> <br></br>
            <input
              type='date'
              id='DOB'
              name='DOB'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <div className='form'>
            <label htmlFor='city'>City : </label> <br></br>
            <input
              type='text'
              id='city'
              name='city'
              value={person.city}
              onChange={handleChange}
            />
          </div>
          <div className='form'>
            <label htmlFor='course'>Course : </label> <br></br>
            <input
              type='text'
              id='course'
              name='course'
              value={person.course}
              onChange={handleChange}
            />
          </div>
          <div className='form'>
            <label htmlFor='group'>Group : </label> <br></br>
            <input
              type='number'
              id='group'
              name='group'
              value={person.group}
              onChange={handleChange}
            />
          </div>
          <button type='submit' className='btn btn-secondary mt-2' >
            Add new person
          </button>
        </form>
      </article>


      <article>
     {people.map((person) => {
          const { id, firstName, lastName, DOB, city, course, group } = person;
          return (
            <div key={id} className='item'>
              <h4>{firstName} {lastName}</h4>
              <p>{DOB}</p>
              <p>{city}</p>
              <p>{course}</p>
              <p>{group}</p>
              
            <button type="button" className='btn btn-danger' onClick={()=>handleDelete(person.id)}>Delete</button>

              
            </div>
          );
        })}
      </article>
      
    </div>
    </div>
   

  );
};

export default ControlledInputs;
