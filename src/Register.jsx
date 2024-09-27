import React, { useState } from 'react';
import { signUp, confirmSignUp } from 'aws-amplify/auth';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { useNavigate } from 'react-router-dom'; // If using React Router for navigation

const Register = () => {
  const [password, setPassword] = useState('');
  const [username, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      console.log("Sign Up Details:", { 
        username, 
        password, 
        birthdate, 
        gender, 
        name 
      });
  
      // Perform the sign-up operation
      const response = await signUp({
        username,
        password,
        options: {
          userAttributes: {
            birthdate,
            gender,
            name,
          },
        },
      });
  
      // Log the sign-up response
      console.log("Sign Up Response:", response);
  
      // Function to handle confirmation code input
      const promptForCode = async () => {
        const { value: confirmationCode } = await Swal.fire({
          title: 'Enter your confirmation code',
          input: 'text',
          inputPlaceholder: 'Confirmation Code',
          showCancelButton: true,
          confirmButtonText: 'Confirm',
          cancelButtonText: 'Cancel',
          inputValidator: (value) => {
            if (!value) {
              return 'You need to enter a confirmation code!';
            }
          }
        });
  
        return confirmationCode;
      };

      const promptForCodeReEnter = async () => {
        const { value: confirmationCode } = await Swal.fire({
          title: 'OOPs Re-Enter your confirmation code',
          input: 'text',
          inputPlaceholder: 'Confirmation Code',
          showCancelButton: true,
          confirmButtonText: 'Confirm',
          cancelButtonText: 'Cancel',
          inputValidator: (value) => {
            if (!value) {
              return 'You need to enter a confirmation code!';
            }
          }
        });
  
        return confirmationCode;
      };
  
      let confirmationCode = await promptForCode();
  
      while (confirmationCode) {
        try {
          const confirmationResponse = await confirmSignUp({
            username: username,
            confirmationCode: confirmationCode,
          });
  
          console.log("Confirmation Response:", confirmationResponse);
  
          if (confirmationResponse.isSignUpComplete) {
            Swal.fire({
              icon: 'success',
              title: 'Sign up successful!',
              text: 'Your account has been confirmed.',
            }).then(() => {
              // Navigate to the desired page
              navigate('/signin');
            });
            return; // Exit the loop if sign-up is complete
          } else {
            console.log("Next step:", confirmationResponse.nextStep);
          }
        } catch (confirmationError) {
          console.error("Confirmation Error:", confirmationError);
          Swal.fire({
            icon: 'error',
            title: 'Invalid Code',
            text: 'The confirmation code you entered is incorrect. Please try again.',
          });
          confirmationCode = await promptForCodeReEnter(); // Prompt for code again
        }
      }
  
      setSuccess(null);
      setError(null);
  
    } catch (error) {
      console.error("Sign Up Error:", error);
      setError(error.message);
      setSuccess(null);
    }
  };
  
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-90">
      <div className="w-full max-w-md p-8 space-y-8 bg-neutral-800 bg-opacity-80 rounded-lg shadow-lg">
        <div className="text-center">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9aeef1c2012caf1dcc38eb49ed88712250ecf1b5d59f92695e19fb2473c33403?placeholderIfAbsent=true&apiKey=a1ad48aaa9d54dcaa1eaebbbcaeabf5e" 
            alt="Dream Streamer logo" 
            className="w-32 mx-auto mb-4 h-32"
          />
          <div>
            <span className="text-3xl text-white block">Dream</span>
            <span className="text-xs text-white tracking-[5.6px] block">Streamer</span>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-white">Create your account</h2>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleSignUp(); }}>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-zinc-300">
              Email address
            </label>
            <input
              type="email"
              placeholder="Email"
              value={username}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 text-white bg-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition duration-200"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-zinc-300">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 text-white bg-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition duration-200"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-zinc-300">
              Birthdate
            </label>
            <input
              type="date"
              placeholder="Birthdate (YYYY-MM-DD)"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              required
              className="w-full px-4 py-2 text-white bg-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition duration-200"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-zinc-300">
              Gender
            </label>
            <input
              type="text"
              placeholder="Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
              className="w-full px-4 py-2 text-white bg-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition duration-200"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-zinc-300">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 text-white bg-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition duration-200"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-lg font-semibold text-black bg-white rounded-lg hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-black transition duration-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
