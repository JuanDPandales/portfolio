import uniqid from 'uniqid';
import { Habilidades } from '../../portafolio';
import './Habilidades.css';


const habilidades = () => {
    if (!Habilidades.length) return null

  return (
    <>
        <section className='section skills' id='skills'>
        <h2 className='section__title'>Habilidades</h2>
        <ul className='skills__list'>
            {Habilidades.map(habilidad => (<li key={uniqid()} className='skills__list-item btn btn--plain'> 
                {habilidad}
            </li>))}
        </ul>
        </section>
    </>
  )
}

export default habilidades