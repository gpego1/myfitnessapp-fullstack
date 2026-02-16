import api from '../../api/index.js';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './styles.module.css';

export default function Profile() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function loadProfile() {
      try {
        const { data } = await api.get("/auth/me");
        setProfile(data);
      } catch (error) {
        alert("Erro ao cadastrar perfil");
      }
    }
    loadProfile();
  }, []);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    alert('Perfil atualizado com sucesso!');
  };

  const handleLogout = () => {
    navigate('/');
  };

  if (!profile) return null;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>MEU PERFIL</h1>
        <p className={styles.subtitle}>Gerencie suas informações pessoais</p>
      </div>

      <div className={styles.content}>
        <Card className={styles.avatarCard}>
          <div className={styles.avatarSection}>
            <div className={styles.avatar}>
              <span className={styles.avatarIcon}>💪</span>
            </div>
            <div className={styles.avatarInfo}>
              <h2 className={styles.name}>{profile.name}</h2>
              <p className={styles.email}>{profile.email}</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>INFORMAÇÕES PESSOAIS</h3>
              {!isEditing && (
                <Button 
                  text="Editar" 
                  variant="outline" 
                  onClick={() => setIsEditing(true)}
                />
              )}
            </div>

            {isEditing ? (
              <div className={styles.form}>
                <Input
                  label="Nome"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                />
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                />
                <div className={styles.row}>
                  <Input
                    label="Idade"
                    type="number"
                    name="age"
                    value={profile.age}
                    onChange={handleChange}
                  />
                  <Input
                    label="Peso (kg)"
                    type="number"
                    name="weight"
                    value={profile.weight}
                    onChange={handleChange}
                  />
                  <Input
                    label="Altura (cm)"
                    type="number"
                    name="height"
                    value={profile.height}
                    onChange={handleChange}
                  />
                </div>
                <Input
                  label="Objetivo"
                  name="goal"
                  value={profile.goal}
                  onChange={handleChange}
                />

                <div className={styles.actions}>
                  <Button text="Salvar" variant="primary" onClick={handleSave} />
                  <Button 
                    text="Cancelar" 
                    variant="secondary" 
                    onClick={() => setIsEditing(false)}
                  />
                </div>
              </div>
            ) : (
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Idade</span>
                  <span className={styles.infoValue}>{profile.age} anos</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Peso</span>
                  <span className={styles.infoValue}>{profile.weight} kg</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Altura</span>
                  <span className={styles.infoValue}>{profile.height} cm</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Objetivo</span>
                  <span className={styles.infoValue}>{profile.goal}</span>
                </div>
              </div>
            )}
          </div>
        </Card>

        <Card>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>ESTATÍSTICAS</h3>
            <div className={styles.statsGrid}>
              <div className={styles.statBox}>
                <div className={styles.statNumber}>24</div>
                <div className={styles.statLabel}>Treinos Completos</div>
              </div>
              <div className={styles.statBox}>
                <div className={styles.statNumber}>156</div>
                <div className={styles.statLabel}>Exercícios Realizados</div>
              </div>
              <div className={styles.statBox}>
                <div className={styles.statNumber}>12h</div>
                <div className={styles.statLabel}>Tempo Total</div>
              </div>
            </div>
          </div>
        </Card>

        <div className={styles.danger}>
          <Button 
            text="Sair da Conta" 
            variant="danger" 
            onClick={handleLogout}
            fullWidth
          />
        </div>
      </div>
    </div>
  );
}
