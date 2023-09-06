// import React, { useState } from 'react';
// import axios from 'axios';
// // import { Navigate as navigate} from 'react-router-dom';
// // import { useNavigate } from 'react-router-dom';

// function Register() {
//   // Define state variables for form input
//   const [name, setName] = useState('');
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   // const navigate = useNavigate();

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     // Create a formData object to store the user input
//     const formData = {
//       name,
//       username,
//       email,
//       password,
//     };
  
//     try {
//       // Make an HTTP POST request to your registration API here
//       const response = await axios.post('http://localhost:8000/api/register', formData);
  
//       if (response.data.status === 200) {
//         // Registration was successful
//         // console.log('Registration successful');
        
  
//         // Redirect the user to the Todos page after successful registration
//         window.location.href = 'http://localhost:3000/todos';
//       } else if (response.data.status === 'error') {
//         // Handle registration errors here
//         console.error('Registration failed:', response.data.message);
//       } else {
//         // Handle unexpected response
//         console.error('Unexpected response:', response.data);
//       }
//     } catch (error) {
//       // Handle network or other errors here
//       console.error('Registration error:', error);
//     }
  
//     // Reset the form fields after submission
//     setName('');
//     setUsername('');
//     setEmail('');
//     setPassword('');
//   };
  
//   return (
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default Register;





import React, { useState } from 'react';
import axios from 'axios';
 // Import useHistory from react-router-dom

function Register() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = {
      name,
      username,
      email,
      password,
    };
  
    try {
      const response = await axios.post('http://localhost:8000/api/register', formData);
  
      if (response.data.status === 200) {
        // Registration was successful
        // Extract the userId from the response data
        const userId = response.data.userId;
        console.log(userId)
        
        // Redirect the user to the Todos page with the userId as a URL parameter
        window.location.href = `http://localhost:3000/todos/${userId}`;

      } else if (response.data.status === 'error') {
        console.error('Registration failed:', response.data.message);
      } else {
        console.error('Unexpected response:', response.data);
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  
    setName('');
    setUsername('');
    setEmail('');
    setPassword('');
  };
  
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
