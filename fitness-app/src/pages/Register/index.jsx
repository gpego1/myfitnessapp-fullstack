import api from '../../api/index.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Select from '../../components/Select';
import styles from './styles.module.css';


export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    height: '',
    weight: '',
    goal: ''
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);
    if (formData.password != formData.confirmPassword) {
      alert("Passwords are not the same");
    }
    
    try {
      await api.post("/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        age: Number(formData.age),
        height: Number(formData.height),
        weight: Number(formData.weight),
        goal: formData.goal
      })
      navigate('/login');
    } catch (error) {
      console.log(error);
      alert("Failed to register");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.registerBox}>

          <form onSubmit={handleSubmit} className={styles.form}>

            <Input label="Nome" name="name" value={formData.name} onChange={handleChange} required />

            <Input label="Email" type="email" name="email" value={formData.email} onChange={handleChange} required />

            <Input label="Senha" type="password" name="password" value={formData.password} onChange={handleChange} required />

            <Input label="Confirmar Senha" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />

            <Input label="Idade" type="number" name="age" value={formData.age} onChange={handleChange} required />

            <Input label="Altura (cm)" type="number" name="height" value={formData.height} onChange={handleChange} required />

            <Input label="Peso (kg)" type="number" name="weight" value={formData.weight} onChange={handleChange} required />

            <Select
              label="Objetivo"
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              options={[
                { value: "Lose fat", label: "Lose fat" },
                { value: "Hypertrophy", label: "Hypertrophy" },
                { value: "Cutting", label: "Cutting" },
                { value: "Bulking", label: "Bulking" },
                { value: "Maintenance", label: "Maintenance" }
              ]}
            />

            <Button text="Criar Conta" type="submit" variant="primary" fullWidth />

          </form>

        </div>
      </div>
    </div>
  );
}
