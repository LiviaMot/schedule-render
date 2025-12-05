import './style.css'
import { useEffect, useState } from "react"
import { updateService } from "../../api/services"
import { useLocation, useNavigate } from "react-router-dom"

export default function UpdateService() {
  const navigate = useNavigate()

  const [service, setService] = useState({
    date: '',
    time: '',
    price: '',
    completed: false
  })

  const location = useLocation()
  const { service: prevService } = location.state

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target
    setService({ 
      ...service, 
      [id]: type === 'checkbox' ? checked : value
    })
  }

  const handleReset = (e) => {
    e.preventDefault()
    setService({...prevService, date: '', time:'', price:''})
  }

  const handleSave = async (e) => {
    e.preventDefault()
    const response = await updateService(prevService.id, service)

    if (response.status === 200) {
      navigate('/services')
    } else {
      console.log(response)
    }
  }

  useEffect(() => {
    setService({ ...prevService})
  }, [])

  return (
    <main>
      <form className="form-update">
        <h2>Alterar</h2>
        <div className='input-group'>
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

        <div className='bnts'>
          <button type="reset" onClick={handleReset}>Limpar</button>
          <button type="submit" onClick={handleSave}>Enviar</button>
        </div>
      </form>
    </main>
  )
}