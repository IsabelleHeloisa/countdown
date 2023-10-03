import './App.css'
import Title from './components/Title'
import Counter from './components/Counter'
import NewYear from './assets/newyear.jpg'
function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${NewYear})` }}>
      <div className="container">
        <Title title="contagem regressiva para 2024" />
        <div className="coutdown-container">
          <Counter title="Dias" number={2} />
          <Counter title="Horas" number={12} />
          <Counter title="minutos" number={31} />
          <Counter title="segundos" number={31} />
        </div>
      </div>
    </div>
  )
}

export default App
