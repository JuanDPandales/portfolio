import React, { Component } from 'react'
import './Contact.css'

export class Contact extends Component {
  copyEmail() {
    navigator.clipboard.writeText('karpus13@gmail.com')
    alert('El Email ha sido copiado')
  }
  render() {
    return (
      <section className='section contact center' id="email">
        <h2 className='section__title'>Email</h2>
        <button onClick={this.copyEmail} className='btn btn--outline'>
          Copiar Email
        </button>
      </section>
    )
  }
}

export default Contact