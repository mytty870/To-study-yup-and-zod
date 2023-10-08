import './App.css';
import { useForm } from 'react-hook-form'

function App() {

  const { register, handleSubmit, formState: { errors} } = useForm({
    // mode: 'onChange',
    reValidateMode: 'onSubmit',
    criteriaMode: 'all',
  })

  const onSubmit = (data: any) => console.log(data)
  return (
    <div className="App">
      <h1>ログインフォーム</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">メールアドレス</label>
        <input id="email" {...register('email', {required: {value: true, message: '入力が必須'}, minLength: {value: 8, message: '8文字以上入力してね'}})} />
        {errors.email?.message && <div>aa</div>}
      </div>
      <div>
        <label htmlFor="">パスワード</label>
        <input type="password" id="email" {...register('password', {required: {value: true, message: 'ここも入力しろよ'}})}/>
        {errors.password?.message && <div>bbb</div>}
      </div>
      <button type="submit">ログイン</button>
      </form>
    </div>
  );
}

export default App;
