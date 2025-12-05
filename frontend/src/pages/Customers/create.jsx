import './style.css'
import { useState } from "react"
import { createCustomer } from "../../api/customers"
import { useNavigate } from "react-router-dom"

const INITIAL_STATE = {
  name: '',
  email: '',
  password: ''
}

export default function CreateCustomer() {
  const navigate = useNavigate()

  const [customer, setCustomer] = useState(INITIAL_STATE)

  const handleChange = (e) => {
    const {id, value} = e.target
    setCustomer({
      ...customer,
      [id]: value
    })
  }

  const handleReset = (e) => {
    e.preventDefault()
    setCustomer(INITIAL_STATE)
  }

  const handleSave = async (e) => {
    e.preventDefault()
    const response = await createCustomer(customer)

    if (response.status === 201) {
      navigate('/customers')
    }
    console.log(response)
  }

  return (
    <main>
      <form className="form">
        <div className='input-group'>
          <div>
            <label>Nome: </label>
            <input type="text" name="name" id="name" value={customer.name} onChange={handleChange} />
          </div>
          <div>
            <label>Email: </label>
            <input type="email" name="email" id="email" value={customer.email} onChange={handleChange} />
          </div>
          <div>
            <label>Senha: </label>
            <input type="password" name="password" id="password" value={customer.password} onChange={handleChange} />
          </div>
        </div>

        <div className='bnts'>
          <button type="reset" onClick={handleReset}>Limpar</button>
          <button type="submit" onClick={handleSave}>Enviar</button>
        </div>
      </form>
    </main>
  )
}