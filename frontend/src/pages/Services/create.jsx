import './style.css'
import { useState } from "react"
import { createService } from "../../api/services"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'

const INITIAL_STATE = {
  date: '',
  time: '',
  price: '',
  completed: false
}

export default function CreateService() {
  const navigate = useNavigate()
  const [service, setService] = useState(INITIAL_STATE)

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target
    setService({ 
      ...service, 
      [id]: type === 'checkbox' ? checked : value
    })
  }

  const handleSave = async (e) => {
    e.preventDefault()
    try {
      await createService(service)
      toast.success("Atendimento criado!")
      navigate('/services')
    } catch (error) {
      console.log(error)
      toast.error("Erro ao criar.")
    }
  }

  return (
    <main className="container">
      <form className="form-card">
        <h2>Atendimento</h2>
        <div className="input-group">
          <label>Data</label>
          <input type="date" id="date" value={service.date} onChange={handleChange} required />
          
          <label>Hora</label>
          <input type="time" id="time" value={service.time} onChange={handleChange} required />
          
          <label>Valor (R$)</label>
          <input type="number" id="price" value={service.price} onChange={handleChange} required />
          
          <div className='check'>
            <label>Concluído?</label>
            <input type="checkbox" id="completed" checked={service.completed} onChange={handleChange} />
          </div>
        </div>
        <div>
          <button type="submit" onClick={handleSave}>Enviar</button>
        </div>
      </form>
    </main>
  )
}