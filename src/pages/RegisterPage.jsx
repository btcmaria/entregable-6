import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'
import "./styles/RegisterPage.css"

const RegisterPage = () => {

    const {register, handleSubmit, reset} =useForm()


    const {createUser} = useAuth()

    const submit = data => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'
        createUser(url, data)
        reset({
            firstName: "",
            lastName: "",
            email:"",
            phone:"",
            password:""
        })
    }

  return (
    <div className='register'>

      <form className='register__form' onSubmit={handleSubmit(submit)}>

      <h2 className='register__title'>Register</h2>
      <p>Welcome! Enter your email and password to continue</p>

        <div className='register__list'>
          <label className='register__label' htmlFor="firstName">First name</label>
          <input {...register("firstName")} type="text" id="firstName" />
        </div>
        <div className='register__list'>
          <label className='register__label' htmlFor="lastName">Last name</label>
          <input {...register("lastName")} type="text" id="lastName" />
        </div>
        <div className='register__list'>
          <label className='register__label' htmlFor="email">Email</label>
          <input {...register("email")} type="email" id="email" />
        </div>
        <div className='register__list'>
          <label className='register__label' htmlFor="password">Password</label>
          <input {...register("password")} type="password" id="password" />
        </div>
        <div className='register__list'>
          <label className='register__label' htmlFor="phone">Phone</label>
          <input {...register("phone")} type="number" id="phone" />
        </div>
        <button className='register__btn'>Submit</button>
      </form>
    </div>
  )
}

export default RegisterPage