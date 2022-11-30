import * as icon from '../../assets/images/footer/index'

export const Footer = () => {
  return (
    <footer className='w-full desktop:max-w-7xl flex p-14 m-auto border-t-2 border-t-gray-500'>
      <div className='flex-1'>Grupo Alura</div>
      <div className='flex-1 border-l-2 border-l-gray-500 pl-5'>
        <strong>Educação</strong>
        <ul>
          <li>
            <img src={icon.caelum} alt="Caelum" />
            <span>Caelum</span>
          </li>
          <li>
            <img src={icon.casaDoCodigo} alt="Casa do Código" />
            <span>Casa do Código</span>
          </li>
        </ul>
      </div>
      <div className='flex-1 border-l-2 border-l-gray-500 pl-5'>
        <strong>Educação online</strong>
        <ul>
          <li>
            <img src={icon.alura} alt="Alura" />
            <span>Alura</span>
          </li>
          <li>
            <img src={icon.aluraEmpresas} alt="Alura Para Empresas" />
            <span>Alura Para Empresas</span>
          </li>
          <li>
            <img src={icon.aluraLatam} alt="Alura LATAM" />
            <span>Alura LATAM</span>
          </li>
          <li>
            <img src={icon.aluraStart} alt="Alura Start" />
            <span>Alura Start</span>
          </li>
          <li>
            <img src={icon.musicDot} alt="MusicDot" />
            <span>MusicDot</span>
          </li>
          <li>
            <img src={icon.aluraLinguas} alt="Alura Línguas" />
            <span>Alura Línguas</span>
          </li>
          <li>
            <img src={icon.pm3} alt="PM3" />
            <span>PM3</span>
          </li>
        </ul>
      </div>
      <div className='flex-1 border-l-2 border-l-gray-500 pl-5'>
        <strong>Comunidade</strong>
        <ul>
          <li>
            <img src={icon.hipsters} alt="Hipsters ponto Tech" />
            <span>Hipsters ponto Tech</span>
          </li>
          <li>
            <img src={icon.scubaDev} alt="Scuba Dev" />
            <span>Scuba Dev</span>
          </li>
          <li>
            <img src={icon.layersTech} alt="Layers ponto Tech" />
            <span>Layers ponto Tech</span>
          </li>
          <li>
            <img src={icon.likeBoss} alt="Lika a Boss" />
            <span>Lika a Boss</span>
          </li>
          <li>
            <img src={icon.carreiraSemFonteira} alt="Carreira sem Fronteira" />
            <span>Carreira sem Fronteira</span>
          </li>
          <li>
            <img src={icon.hipstersJobs} alt="Hipsters ponto Jobs" />
            <span>Hipsters ponto Jobs</span>
          </li>
          <li>
            <img src={icon.guj} alt="GUJ" />
            <span>GUJ</span>
          </li>
        </ul>
      </div>
    </footer>
  )
}