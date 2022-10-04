import Map from './../../shared/assets/map.jpeg'
import './main.css'
import { InstituteLogo } from '../../shared/ui/institute-logo/institute-logo'

export function Main() {
  return (
    <section className='main'>
      <img className='map' src={Map} alt='' />
      <div>
        <h2>Институты</h2>
        <div className='institutes'>
          <InstituteLogo
            title='ИРИТ-РТФ'
            photo='https://sun9-north.userapi.com/sun9-83/s/v1/ig2/uFw_vF_yE-VDBVXBKEmP_dcDuVie_5VHGGqYV0ENCR644e9spnCTh8lN6OEtDfjS4qdH_iCWqyLIlOKAxQq8o48J.jpg?size=900x900&quality=96&type=album
'
            onClick={() => {
              alert('ХХХХХХУУУУУЙЙЙЙЙЙЙЙЙ')
            }}
          />
        </div>
      </div>
    </section>
  )
}
