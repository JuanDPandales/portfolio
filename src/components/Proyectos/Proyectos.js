import uniqid from 'uniqid';
import { Proyectos } from '../../portafolio';
import ContenedorProyecto from './Contenedor/ContenedorProyecto';
import './Proyectos.css';



const proyectos = () => {
    if (!proyectos.length) return null

    return (
        <>
            <section id='proyecto' className='section projects'>
                <h2 className='section__title'>Proyectos</h2>
                <div className='projects_grid'>
                    {Proyectos.map(proyecto => (
                        <ContenedorProyecto key={uniqid()}
                            proyecto={proyecto} />))
                    }
                </div>
            </section>
        </>

    )
}

export default proyectos