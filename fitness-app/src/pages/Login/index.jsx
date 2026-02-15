import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import api from '../../api';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './styles.module.css';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await api.post("/auth/login", {
        email: formData.email,
        password: formData.password
      });
      console.log("Response: ", response.data);

      localStorage.setItem("token", response.data.token);
      navigate("/profile");
    } catch (err) {
      setError(err.response?.data?.message || "Fail to login.");
    } finally {
      setLoading(false);
    }
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
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.loginBox}>
          <div className={styles.header}>
            <span className={styles.icon}>⚡</span>
            <h1 className={styles.title}>FITFORCE</h1>
            <p className={styles.subtitle}>Transforme seu corpo, eleve sua mente</p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <div className={styles.passwordWrapper}>
            <Input
              label="Senha"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              onBlur={() => setShowPassword(false)}
              required
            />
            <button
              type="button"
              className={styles.eyeButton}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setShowPassword(prev => !prev)}
            >
              <FaEye />
            </button>
            </div>
        
            <div className={styles.actions}>
              <Button text="Entrar" type="submit" variant="primary" fullWidth />
              <p className={styles.register}>
                Não tem conta? 
                <span onClick={() => navigate('/register')} className={styles.link}>
                  Registre-se
                </span>
              </p>
            </div>
          </form>
        </div>

        <div className={styles.hero}>
          <h2 className={styles.heroTitle}>SUPERE SEUS LIMITES</h2>
          <p className={styles.heroText}>
            O aplicativo definitivo para rastrear seus treinos, 
            monitorar progresso e alcançar seus objetivos fitness.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>50K+</div>
              <div className={styles.statLabel}>Usuários Ativos</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>1M+</div>
              <div className={styles.statLabel}>Treinos Completos</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>24/7</div>
              <div className={styles.statLabel}>Suporte</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
