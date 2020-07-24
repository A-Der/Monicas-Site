import React from 'react'

import LCPic from '../../styles/assets/lady-chakras.jpg'
import openBox from '../../styles/assets/open-box.jpg'

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-container-top">
        <img className="chakras-pic" src={LCPic} alt='chakras' />
        <p className="home-blurb">Nihil
Cat ipsum dolor sit amet, ipsa. Modi officia but esse or odit and unde qui. Aut autem iste commodo nostrud. Voluptas sit so ex tempora. Mollit natus for voluptatem but deserunt yet culpa eaque. Proident non and cillum amet but minima. Irure dolore voluptas in. Excepteur totam.</p>
      </div>

      <div className="home-container-bottom">
        <div className="box-pic">
          <img className="open-box-pic" src={openBox} alt="open-box"/>
        </div>
        <div className="box-blurb">
          <p>Brain is the seed of intelligence venture laws of physics billions upon billions with pretty stories for which there's little good evidence hundreds of thousands? Dream of the mind's eye finite but unbounded stirred by starlight network of wormholes from which we spring invent the universe. Great turbulent clouds the ash of stellar alchemy a very small stage in a vast cosmic arena preserve and cherish that pale blue dot tingling of the spine a still more glorious dawn awaits and billions upon billions upon billions upon billions upon billions upon billions upon billions.</p>
        </div>
      </div>

    </div>
  )
}

export default Home