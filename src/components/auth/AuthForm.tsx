import { useState, ChangeEvent } from 'react';

import Modal from '@/components/UI/Modal';
import Input from '@/components/UI/Input';
import Checkbox from '@/components/UI/Checkbox'

interface AuthFormProps {
  label: string;
  handleClose: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ label, handleClose }) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredIsRemember, setEnteredIsRemember] = useState(false);

  const inputChangeHandler = (
    identifier: 'email' | 'password' | 'isRemember',
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const enteredValue = event.target.value;

    if (identifier === 'email') {
      setEnteredEmail(enteredValue);
    } else if (identifier === 'password') {
      setEnteredPassword(enteredValue)
    } else if (identifier === 'isRemember') {
      setEnteredIsRemember(event.target.checked);
    }
  };

  return (
    <Modal handleClose={handleClose}>
      <h2 className="display-8 mb-4">Please {label.toLowerCase()} {label === 'LOGIN' ? 'to' : ''} your account</h2>
      <form>
        <Input
          placeholder="Email address"
          aria-describedby="email"
          type="email"
          value={enteredEmail}
          onChange={(e: ChangeEvent<HTMLInputElement>) => inputChangeHandler('email', e)}
        />
        <Input
          placeholder="Password"
          aria-describedby="password"
          type="password"
          value={enteredPassword}
          onChange={(e: ChangeEvent<HTMLInputElement>) => inputChangeHandler('password', e)}
        />
        <Checkbox
          id=""
          label="Remember me"
          checked={enteredIsRemember}
          onChange={(e: ChangeEvent<HTMLInputElement>) => inputChangeHandler('isRemember', e)}
        />
        <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-4">
          <button type="submit" className="btn btn-primary btn-md px-4 me-md-2">
            {label}
          </button>
          <button onClick={handleClose} type="button" className="btn btn-outline-secondary btn-md px-4">
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default AuthForm;