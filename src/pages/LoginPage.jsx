import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'
import "./styles/LoginPage.css"

export const LoginPage = () => {

    const {register, reset, handleSubmit} = useForm()
    const {loginUser} = useAuth()

    const submit = data => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
        loginUser(url, data)
    }

  return (
    <>
    <div className='login__info'>
        <h2 className='ligin__title'>Login!</h2>
        <p>Welcome! Enter your email and password to continue</p>
    </div>
    <div className='login'>
      <form className='login__form' onSubmit={handleSubmit(submit)}>
        <div className='login__form-list'>
          <label className='login__label' htmlFor="email">Email</label>
          <input {...register("email")} type="email" id="email" />
        </div>
        <div>
          <label className='login__label' htmlFor="password">Password</label>
          <input {...register("password")} type="password" id="password" />
        </div>
        <button className='login__btn'>Login</button>
      </form>
    </div>
    </>
  )
}
