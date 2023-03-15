import { Button } from "@chakra-ui/react";
import { useState } from "react"
import { Link } from "react-router-dom";
import axios from 'axios';
import styles from './UserLogin.module.css';


const UserLogin = () => {

  const [ form, setForm ] = useState({ name: '', lastName: '', email: '', password: '' });
  const [ backResponse, setBackResponse ] = useState({});

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  
  const submitHandler = async (event) => {
    event.preventDefault();
    const modal = document.querySelector('#registerModal');
    console.log('Bienvenido desde la consola');
    modal.showModal();
  };

  return (
    <>
      <form onSubmit={submitHandler} > 
        <section>
          <label htmlFor='email' >Email: </label>
          <input type='text' name='email' value={form.email} onChange={inputChangeHandler} placeholder='' ></input>
          {/* {errors.description && <div className={css.errors} >⚠ {errors.description}</div>} */}
        </section>
        <section>
          <label htmlFor='password' >Password: </label>
          <input type='password' name='password' value={form.password} onChange={inputChangeHandler} ></input>
          {/* {errors.released && <div className={css.errors} >⚠ {errors.released}</div>} */}
        </section>
        <div className={styles.contButton} >
          <Button type='submit' bg={'orange'} fontSize={'2rem'} width={'90%'} p={'1.6rem'} margin={'1.2rem 0 .8rem 0'} >Login</Button>
        </div>
        <dialog id='registerModal' >
          <h2>Register succesfully! Welcome {backResponse.name}</h2>
          <div className={styles.contButton} >
            <Link to='/home' className={styles.linkBtn} ><Button bg={'orange'} fontSize={'2rem'} width={'90%'} p={'1.6rem'} margin={'1.2rem 0 .8rem 0'} >Go to home</Button></Link>
          </div>
        </dialog>
      </form>
    </> 

  );
};

export default UserLogin;