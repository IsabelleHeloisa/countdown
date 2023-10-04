import './App.css'
import Title from './components/Title'
import Counter from './components/Counter'
import NewYear from './assets/newyear.jpg'
import useCountdown from './hooks/useCountdown'
function App() {
  const [day, hour, minute, second] = useCountdown('Jan 1, 2024 00:00:00')

  return (
    <div className="App" style={{ backgroundImage: `url(${NewYear})` }}>
      <div className="container">
        <Title title="contagem regressiva para 2024" />
        <div className="countdown-container">
          <Counter title="Dias" number={day} />
          <Counter title="Horas" number={hour} />
          <Counter title="minutos" number={minute} />
          <Counter title="segundos" number={second} />
        </div>
      </div>
    </div>
  )
}

export default App
