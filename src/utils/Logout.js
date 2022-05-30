import React from 'react';
import { GoogleLogout } from 'react-google-login';


const clientId ="1989494279939-4bjmf2th40r2u65b50gfron7dde47vtl.apps.googleusercontent.com";

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;