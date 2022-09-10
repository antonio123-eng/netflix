import { useEffect, useState } from 'react'
import './Nav.css'

const Nav = () => {

  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShow(window.scrollY > 100)
    })
  }, [])

  return (
    <header className={`nav-container ${show ?  "nav-container-black" : ""}`}>
        <nav>
          <ul>
            <li><a href="">inicio</a></li>
            <li><a href="">Series</a></li>
            <li><a href="">filmes</a></li>
          </ul>
        </nav>
         <img className='nav-logo' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" />
         <img className='nav-avatar' src="https://occ-0-4688-3851.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbg8b9gDW0a4RN42JzXExXzjVU1EnPFfRBh0CpUQMcu_nm6Qwk5NRIkIxLoG8I-2JRU_dt_KvqdkT3a7eTWwBv0DgbvaCZA.png?r=54a" alt="Perfil" />
    </header>
  )
}

export default Nav