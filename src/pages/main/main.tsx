import Map from './../../shared/assets/map.jpeg'
import './main.css'

export function Main() {
  return (
    <section className='main'>
      <img className='map' src={Map} alt='' />
      <div>
        <h2>Институты</h2>
        <div className='institutes'></div>
      </div>
    </section>
  )
}
