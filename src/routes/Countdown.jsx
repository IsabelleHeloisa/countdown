import React from 'react'
import Title from '../components/Title'
import Counter from '../components/Counter'
import useCountdown from '../hooks/useCountdown'
export default function Countdown() {
  const [day, hour, minute, second] = useCountdown('Jan 1, 2024 00:00:00')
  return (
    <>
      <Title title="contagem regressiva para 2024" />
      <div className="countdown-container">
        <Counter title="Dias" number={day} />
        <Counter title="Horas" number={hour} />
        <Counter title="minutos" number={minute} />
        <Counter title="segundos" number={second} />
      </div>
    </>
  )
}
