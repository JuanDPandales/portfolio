import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { SobreMi } from '../../portafolio'
import './SobreMi.css'



const sobreMi = () => {
    const { name, role, description, resume, social } = SobreMi
    return (
        <div className='about center'>
            {name && (
                <h1> Hola soy <span>{name}</span></h1>
            )}
            {role && <h2 className='about__role'>un {role}.</h2>}
            <p className='about__desc'> {description && description}</p>

            <div className='about__contact center'>
                {resume && (
                    <a href={resume}>
                        <span type='button' className='btn btn--outline'>Hoja de Vida</span>
                    </a>)}

                {social && (
                    <>
                        {social.github && (
                            <a href={social.github}
                                arial-label='github'
                                className='link link--icon'
                            >
                                <GitHubIcon /> </a>)}

                        {social.linkedin && (
                            <a href={social.linkedin}
                                arial-label='linkedin'
                                className='link link--icon'>
                                <LinkedInIcon /> </a>)}
                    </>
                )}
            </div>
        </div>
    )
}

export default sobreMi