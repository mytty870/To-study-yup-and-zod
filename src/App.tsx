import { ChangeEvent, FormEvent, useState } from 'react';
import './App.css';

function App() {
  const [email ,setEmail] = useState('')
  const [password ,setPassword] = useState('')

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({email, password})
  }
  return (
    <div className="App">
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input type="email" name="email" id="email" value={email} onChange={handleChangeEmail}/>
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input type="password" name="password" id="password" value={password} onChange={handleChangePassword}/>
        </div>
        <div>
          <button type="submit">ログイン</button>
        </div>
      </form>
    </div>
  );

}

export default App;
