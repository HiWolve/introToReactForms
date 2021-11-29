import { useState } from 'react';

const Form = () => {

  const [phoneType, setPhoneType] = useState('');
  const [bio, setBio] = useState('');
  const [checkBox, setCheckBox] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [postion, setPosition] = useState(false);



  return (
    <form>
      <label htmlFor='name'>Name
      </label>
      <input id='name' type='text' />

      <label htmlFor='email'>Email
      </label>
      <input id='email' type='text' />

      <label htmlFor='number'>Phone Number
      </label>
      <input id='number' type='text' />

      <select name='phoneType' value={phoneType}>
        <option value='' disabled>Select a phone type..</option>
        <option value='home'>Home</option>
        <option value='work'>Work</option>
        <option value='mobile'>Mobile</option>

      </select>

      <input type='radio' value='instructor' name='position' />Instructor
      <input type='radio' value='student' name='position' />Student

      <textarea name='bio' id='bio' value={bio} placeholder="Enter Bio Here..." />


      <input type='checkbox' value={checkBox} /> Sign up for emails!
      <button>Submit</button>

    </form>
  )

}




export default Form;
