import './style.css'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginCustomer } from '../../api/customers'
import { toast } from 'react-toastify'
import { AuthContext } from '../../auth/Context'

export default function Login() {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleBackClick = () => {
    navigate('/')
  }

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const response = await loginCustomer(email, password)
      login(response.data.token)
      navigate('/customers')
    } catch (error) {
      toast("Email ou senha inválida!")
    }
  }

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <p>Não possui conta? <span className="signup">Cadastre-se</span></p>
        <div className='bnts'>
          <button className="button" type="submit" onClick={handleLogin}>Entrar</button>
          <button className="button back-button" onClick={handleBackClick}>
            Voltar
          </button>
        </div>
      </form>
    </div>
  )
}