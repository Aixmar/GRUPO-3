import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import axios from 'axios';
import validate from "./validate";
import styles from './UserForm.module.css';
import okIco from '../../assets/nice.png';



const UserForm = () => {

  const [ form, setForm ] = useState({ name: '', lastName: '', email: '', password: '' });
  const [ errors, setErrors ] = useState({});
  const [ backResponse, setBackResponse ] = useState({});



  useEffect(() => {
    const submitBtn = document.getElementById('submitBtn');
    const arrayForm = Object.values(form);

    for (let input of arrayForm) {
      if (input === '' || Object.keys(errors).length > 0) {
        submitBtn.classList.add(styles.disabledSubmit);
      } else {
        submitBtn.classList.remove(styles.disabledSubmit);
      };
   };
  }, [form]);


  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    setErrors(validate({ ...form, [name]: value }));
  };
  

  const submitHandler = async (event) => {
    event.preventDefault();
    const modal = document.querySelector('#registerModal');
    const { data } = (await axios.post(`http://localhost:3001/users`, form));
    modal.showModal();
    setBackResponse(data);
    setForm({ name: '', lastName: '', email: '', password: '' });
  };



  return (
    <>
      <form onSubmit={submitHandler} className={styles.userForm} > 
        <section className={styles.section}>                        
          <label htmlFor='name' className={styles.label} >Name: </label>
          <input type='text' name='name' value={form.name} onChange={inputChangeHandler} className={styles.input} placeholder='' ></input>
          {errors.name && <div className={styles.errors} >⚠ {errors.name}</div>}
        </section>

        <section className={styles.section}>
          <label htmlFor='lastName' className={styles.label} >Last name: </label>
          <input type='text' name='lastName' value={form.lastName} onChange={inputChangeHandler} className={styles.input} placeholder='' ></input>
          {errors.lastName && <div className={styles.errors} >⚠ {errors.lastName}</div>}
        </section>

        <section className={styles.section}>
          <label htmlFor='email' className={styles.label} >Email: </label>
          <input type='text' name='email' value={form.email} onChange={inputChangeHandler} className={styles.input} placeholder='' ></input>
          {errors.email && <div className={styles.errors} >⚠ {errors.email}</div>}
        </section>
                
        <section className={styles.section}>
          <label htmlFor='password' className={styles.label} >Password: </label>
          <input type='password' name='password' value={form.password} onChange={inputChangeHandler} className={styles.input} ></input>
          {errors.password && <div className={styles.errors} >⚠ {errors.password}</div>}
        </section>
        <div className={`${styles.contButton} ${styles.disabledSubmit}`} id='submitBtn' >
          <Button type='submit' bg={'orange'} fontSize={'2rem'} width={'90%'} p={'1.6rem'} margin={'1.2rem 0 .8rem 0'}  >Register</Button>
        </div>

        <dialog id='registerModal' >
          <img src={okIco} alt='nice' />
          <h2>Register successfully! Welcome {backResponse.name}</h2>
          <div className={styles.contButton} >
            <Link to='/home' className={styles.linkBtn} ><Button bg={'orange'} fontSize={'2rem'} width={'90%'} p={'1.6rem'} margin={'1.2rem 0 .8rem 0'} >Go to home</Button></Link>
          </div>
        </dialog>

      </form>
    </> 

  );
};

export default UserForm;