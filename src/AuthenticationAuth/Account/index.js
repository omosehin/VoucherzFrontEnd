import React from 'react';

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';

const AccountPage = () => (
      <div>
        <h1>Account</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    
);

const condition = authUser => !!authUser;

export default (condition)(AccountPage);