import uniqid from 'uniqid'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import './ContenedorProyecto.css'

const ContenedorProyecto = ({ proyecto }) => {
  return (
    <>
      <div className='project'>

        <h3>{proyecto.name}</h3>

        <p className='project__description'>{proyecto.description}</p>
        {proyecto.stack && (
          <ul className='project__stack'>
            {proyecto.stack.map((item) => (
              <li key={uniqid()} className='project__stack item'>{item}</li>
            ))}
          </ul>
        )}


        {proyecto.sourceCode && (
          <a
            href={proyecto.sourceCode}
            arial-label='source code'
            className='link link--icon'>
            <GitHubIcon />
          </a>
        )}

        {proyecto.livePreview && (
          <a
            href={proyecto.livePreview}
            arial-label='live preview'
            className='link link--icon'>
            <LaunchIcon />
          </a>
        )}
      </div>
    </>
  )
}

export default ContenedorProyecto