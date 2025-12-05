import './style.css'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../auth/Context'
import { useContext } from 'react'

export default function Header() {
  const { token } = useContext(AuthContext)
  return (
    <header>
      <h1>Agenda API</h1>
      <nav>
        <Link to='/login'>
          <button>Login</button>
        </Link>
        
        {
          !token
            ? null
            : <Link to='/customers'>
                <button>
                  Clientes
                </button>
              </Link>
        }

        <Link to='/create/customer'>
          <button>Cadastrar</button>
        </Link>
        
        {
          !token
            ? null
            : <Link to='/create/service'>
                <button>Criar Agendamento</button>
              </Link>
        }

        <Link to='/services'>
          <button>Atendimentos</button>
        </Link>
      </nav>
    </header>
  )
}