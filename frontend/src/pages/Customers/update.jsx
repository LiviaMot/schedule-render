import './style.css'
import { useEffect, useState } from "react"
import { updateCustomer } from "../../api/customers"
import { useLocation, useNavigate } from "react-router-dom"

export default function UpdateCustomer() {
  const navigate = useNavigate()

  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    password: ''
  })

  const location = useLocation()
  const { customer: prevCustomer } = location.state

  const handleChange = (e) => {
    const {id, value} = e.target
    setCustomer({
      ...customer,
      [id]: value
    })
  }

  const handleReset = (e) => {
    e.preventDefault()
    setCustomer({...prevCustomer, password: ''})
  }

  const handleSave = async (e) => {
    e.preventDefault()
    const response = await updateCustomer(prevCustomer.id, customer)

    if (response.status === 200) {
      navigate('/customers')
    } else {
      console.log(response)
    }
  }

  useEffect(() => {
    setCustomer({ ...prevCustomer, password: '' })
  }, [])

  return (
    <main>
      <form className="form-update">
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