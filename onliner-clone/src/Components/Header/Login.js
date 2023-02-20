import { useState } from 'react';
import '../../Style/logInForm.css';
import { userApi } from '../../API/userAPI';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('0lelplR');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(userApi.login({ username: name, password: password }));
    navigate(-1, { replace: true });
  }
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1 className="h3 mb-3 fw-normal">Вход</h1>
      <div className="form-floating mb-2">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="floatingInput">Имя</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="floatingPassword">Пароль</label>
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Войти
      </button>
    </form>
  );
}
