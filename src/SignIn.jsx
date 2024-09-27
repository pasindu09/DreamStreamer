import React, { useState } from 'react';
import { signIn, confirmSignUp, resendSignUpCode } from 'aws-amplify/auth';
import Swal from 'sweetalert2'; // Import SweetAlert2 for better alerts
import { useNavigate } from 'react-router-dom'; // If using React Router for navigation
import { Amplify } from 'aws-amplify';

const SignIn = () => {
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate(); // React Router hook for redirection

  const handleSignIn = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      const response = await signIn({
        username,
        password
      });
      console.log("Sign In Response:", response);

      if (response?.isSignedIn === true) {
        try {
          const user = await Amplify.Auth.currentAuthenticatedUser();
          const groups = user.signInUserSession.idToken.payload['cognito:groups'];
  
          if (groups && groups.includes('admin')) {
            console.log('User is an admin');
            return true;  // The user is an admin
          } else {
            Swal.fire({
              icon: 'success',
              title: 'Sign in successful!',
              text: `Welcome back ${username}!`,
            });
            navigate('/');
          }
        } catch (error) {
          console.error('Error fetching user information:', error);
          return false;  // Handle the error appropriately
        }
      }
      
    } catch (error) {
      console.error("Sign In Error:", error);
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
          <h2 className="text-2xl font-semibold text-white">Sign in to your account</h2>
        </div>
        <form className="space-y-6" onSubmit={handleSignIn}>
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
          
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
              className="w-full px-4 py-2 text-white bg-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-200"
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
              className="w-full px-4 py-2 text-white bg-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-200"
            />
          </div>
          <div className="flex items-center justify-between">
  <a href="#" className="text-sm text-white hover:text-gray-700 transition duration-200">
    Forgot password?
  </a>
</div>
<button
  type="submit"
  className="w-full px-4 py-2 text-lg font-semibold text-black bg-white rounded-lg hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-black transition duration-200"
>
  Sign in
</button>
</form>
<div className="text-center">
  <p className="text-sm text-zinc-400">
    Not a member?{' '}
    <a href="https://thisclassthe" className="text-white hover:text-gray-700 transition duration-200">
      Sign Up Now
    </a>
  </p>
</div>


      </div>
    </div>
  );
}

export default SignIn;
