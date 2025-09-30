import { useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "" });

  const handeChange = (event) => {
    const field = event.target.name;
    const newValue = event.target.value;
    setFormData((currData) => {
      currData[field] = newValue;
      return { ...currData };
    });
    console.log(field, newValue);
  };

  const submit = () => {
    console.log(formData);
  };

  return (
    <div>
      <label htmlFor="firstName">firstname: </label>
      <input
        onChange={handeChange}
        type="text"
        name="firstName"
        id="firstName"
        placeholder="firstname"
        value={formData.firstName}
      />
      <label htmlFor="lastName">lastname: </label>
      <input
        onChange={handeChange}
        type="text"
        name="lastName"
        id="lastName"
        placeholder="lastname"
        value={formData.lastName}
      />
      <button onClick={submit}>Submit</button>
    </div>
  );
}

// export default function SignUp() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");

//   const updateFirstName = (event) => {
//     setFirstName(event.target.value);
//     console.log(event.target.value);
//   };

//   const updateLastName = (event) => {
//     setLastName(event.target.value);
//     console.log(event.target.value);
//   };

//   const submit = () => {
//     console.log(firstName, lastName);
//   };

//   return (
//     <div>
//       <label htmlFor="firstname">firstname: </label>
//       <input
//         onChange={updateFirstName}
//         type="text"
//         name="firstname"
//         id="firstname"
//         placeholder="firstname"
//         value={firstName}
//       />
//       <label htmlFor="lastname">lastname: </label>
//       <input
//         onChange={updateLastName}
//         type="text"
//         name="lastname"
//         id="lastname"
//         placeholder="lastname"
//         value={lastName}
//       />
//       <button onClick={submit}>Submit</button>
//     </div>
//   );
// }
