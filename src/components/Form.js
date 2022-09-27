// import React, { useState } from "react";
import React from "react";
// function Form() {
//   const [firstName, setFirstName] = useState("John");
//   const [lastName, setLastName] = useState("Henry");
// function handlefirstNamechange(event){
//   setFirstName(event.target.value);
//   }
//   function handlelastNamechange(event){
//     setLastName(event.target.value);
// }
//   return (
//     <form>
//       <input type="text"onChange ={handlefirstNamechange} value={firstName} />
//       <input type="text"onChange ={handlelastNamechange} value={lastName} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
/*function Form() {
  const [newsletter, setNewsletter] = useState(false);

  function handleNewsletterChange(event) {
    // .checked, not .value!
    setNewsletter(event.target.checked);
  }

  return (
    <form>
      <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
      <input
        type="checkbox"
        id="newsletter"
        onChange={handleNewsletterChange}
        checked={newsletter}
      />
      <button type="submit">Submit</button>
    </form>
  );
}*/


function Form(props) {
  return (
    <form>
      <input
        type="text"
        onChange={props.handleFirstNameChange}
        value={props.firstName}
      />
      <input
        type="text"
        onChange={props.handleLastNameChange}
        value={props.lastName}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

