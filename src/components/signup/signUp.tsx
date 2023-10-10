import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { TextField } from "@material-ui/core"

export const SignUp = () => {

  type SignUpFormDate = {
    firstName: string
    lastName: string
    email: string
    // password: string
  }
  
  const defaultSignUpFormValues: SignUpFormDate = {
    firstName: '',
    lastName: '',
    email: '',
    // password: '',
  }

  const schema = yup.object().shape({
    firstName: yup.string().trim().matches(/^([^0-9]*)$/, "数字は使用できません").required("氏名欄は必須項目です"),
    lastName: yup.string().matches(/^([^0-9]*)$/, "数字は使用できません").required("名前欄は必須項目です"),
    // 
    email: yup.string().lowercase().email("正しいメールアドレスを入力してください").required("メールアドレスを入力してください"),
    // password: yup.string().matches(/(?=.*[a-z])/, "小文字を含めてください")
    // .matches(/(?=.*[A-Z])/, "大文字を含めてください")
    // .matches(/(?=.*[0-9])/, "数字を含めてください")
    // .min(8, "最低８文字含めてください")
    // .required("パスワードは必須項目です")
  })

  type Form = yup.InferType<typeof schema>

  const {register, handleSubmit, formState: { errors }, reset} = useForm<Form>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: defaultSignUpFormValues,
    resolver: yupResolver(schema),
  })

  // console.log(errors)

  const onSubmit = (data: any) => console.log(data)

  return (
    <>
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <div>
            <div>
              <label >
                氏名
                <input type="text" id="firstName" {...register('firstName')} />
              </label>
              {errors.firstName && <div>{errors.firstName.message}</div>}
            </div>
            <div>
              <label >
                名前
                <input type="text" id="lastName" {...register('lastName')} />
              </label>
              {errors.lastName && <div>{errors.lastName.message}</div>}
            </div>
            <div>
              <label >
                メール
                <input type="text" id="email" {...register('email')} />
              </label>
              {errors.email && <div>{errors.email.message}</div>}
            </div>
          </div>
            <button type="submit">送信</button> */}
          <TextField type="text" label="氏名" required  defaultValue="Hello World"  />
        </form>
      </div>
    </>
  )
}


// https://github.com/jquense/yup#stringtrimmessage-string--function-schema

// string.trim() → 文字列の値の先頭と末尾の空白を除去を行う
// string.lowercase() → 文字列の値を小文字に変換する

