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
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.grid}></div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.registerBox}>
          <div className={styles.header}>
            <span className={styles.icon}>🔥</span>
            <h1 className={styles.title}>JUNTE-SE AO FITFORCE</h1>
            <p className={styles.subtitle}>Comece sua jornada de transformação hoje</p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <Input
              label="Nome Completo"
              type="text"
              name="name"
              placeholder="Seu nome"
              value={formData.name}
              onChange={handleChange}
              required
            />
            
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            
            <Input
              label="Senha"
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
            
            <Input
              label="Confirmar Senha"
              type="password"
              name="confirmPassword"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

             <div style={{ maxWidth: "400px", margin: "0 auto" }}>
              <label>Goal:</label>
            <Select
              variant="primary"
              fullWidth
              options={[
                { value: "lose-fat", label: "Lose fat" },
                { value: "hipertrophy", label: "Hipertrophy" },
                { value: "cutting", label: "Cutting" },
                { value: "bulking", label: "Bulking" },
                { value: "maintenance", label: "Maintenance" }
              ]}
            />
          </div>

            <div className={styles.actions}>
              <Button text="Criar Conta" type="submit" variant="primary" fullWidth />
              <p className={styles.login}>
                Já tem conta? 
                <span onClick={() => navigate('/')} className={styles.link}>
                  Faça login
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
