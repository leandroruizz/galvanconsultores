import React from 'react'
import styles from './page.module.css'
import Whatsapp from './components/Whatsapp'


export default function Inicio() {
  return (
    <main className={styles.inicio}>
      <Whatsapp/>
        <div className={styles.conttitulo}>
          <img className={styles.tituloprincipal} src="./imagenes/logogalvanblanco.png"/>
        </div>
        <div className={styles.contenedornosotros}>
        <img className={styles.reunion} src="./imagenes/reunion.jpg" alt="" />
          <div className={styles.respuestacont}>
             <h2 className={styles.nosotros}>Conozca nuestra propuesta para mejorar sus costos siniestrales y laborales.</h2>
             <h1 className={styles.subtituloprincipal}>Una respuesta a las exigencias del mercado</h1>
          </div>
        </div>
        <div className={styles.contenedorprincipales}>
          <div className={styles.contprincipales}>
            <h2 className={styles.subventajas}>Principales ventajas</h2>
          </div>
          <div className={styles.contventajas}>
            <h3 className={styles.ventajas}>DISPONIBILIDAD</h3>
            <p className={styles.textoventajas}>Ejecutivos de cuenta Full Time</p>
          </div>
          <div className={styles.contventajas}>
            <h3 className={styles.ventajas}>ASESORAMIENTO</h3>
            <p className={styles.textoventajas}>Abogados, Contadores, Peritos</p>
          </div>
          <div className={styles.contventajas}>
            <h3 className={styles.ventajas}>COMUNICACIÓN</h3>
            <p className={styles.textoventajas}>Repuesta asegurada 24/7</p>
          </div>
          <div className={styles.contventajas}>
            <h3 className={styles.ventajas}>COSTOS</h3>
            <p className={styles.textoventajas}>La mejor ratio hora/servicio</p>
          </div>
          <div className={styles.contventajas}>
            <h3 className={styles.ventajas}>COBERTURA</h3>
            <p className={styles.textoventajas}>Operamos en todo el país</p>
          </div>
        </div>
        <div id='servicios'>
          <h1 className={styles.subtitulo}>Sobre Nuestros Servicios</h1>
          <div className={styles.contservicios}>
            <div className={styles.contnumeros}>
              <div className={styles.circulo}>
                <h1 className={styles.numeros}>1</h1>
              </div>
              <div className={styles.contcolumn}>
                <h2 className={styles.servicio}>Seguros y A.R.T</h2>
                <p className={styles.textoservicio}>A lo largo de los últimos años se han incrementado notablemente las denuncias de siniestros en estas materias. En igual proporción creció el índice de litigiosidad, que desborda hacia la esferas Civil y Laboral acompañado por parte de la Jurisprudencia ineficas de nuestros Tribunales.</p>
              </div>
            </div>
            <div className={styles.contnumeros}>
              <div className={styles.circulo}>
                <h1 className={styles.numeros}>2</h1>
              </div>
              <div className={styles.contcolumn}>
                <h2 className={styles.servicio}>Asesoria legal</h2>
                <p className={styles.textoservicio}>La complejidad de las leyes laborales generaron un gran crecimiento de la litigiosidad, con el consecuente incremento de los costos, Nuestro equipo de profesionales especializados en cada materia, abordan las problematicas particulares de cada caso con una visión integral.</p>
              </div>
            </div>
            <div className={styles.contnumeros}>
              <div className={styles.circulo}>
                <h1 className={styles.numeros}>3</h1>
              </div>
              <div className={styles.contcolumn}>
                <h2 className={styles.servicio}>Servicios Legales</h2>
                <p className={styles.textoservicio}>Nuestros profesionales estan ampliamente calificados y capacitados para asesorarlo en todas las áreas de su empresa. Desde lo legal hasta lo institucional, nuestros equipos de trabajo son interdisciplinarios y con amplia experiencia en estructuras corporativas.</p> 
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className={styles.subtitulo}>Soporte 360º</h2>
          <div className={styles.textosoporte}>
            <img className={styles.imgsoporte} width={70} height={40} src="https://www.urbanbrush.net/web/wp-content/uploads/edd/2018/01/web-20180107125619306065-1560x927.png" alt="" />
            <p>Su empresa contará con nuestro soporte las 24hs. del día, los 365 días del año, en cualquier localidad del país, reduciendo su exposición a potenciales litigios o fraudes</p>
          </div>
          <div className={styles.textosoporte}>
          <img className={styles.imgsoporte} width={50} height={50} src='https://cdn-icons-png.flaticon.com/512/155/155292.png'/>
            <p>Cada informe que se emite cuenta con los detalles del caso, datos relevantes a efectos de su objetiva evaluación y sustento suficiente para una efectiva defensa legal</p>
          </div>
          <div className={styles.textosoporte}>
          <img className={styles.imgsoporte} width={50} height={50} src='https://cdn-icons-png.flaticon.com/512/60/60481.png'/>
            <p>Con el objeto de brindar un servicio integral a las aseguradoras, poseemos un área Legal, que interviene en mediaciones y litigios donde estas son parte.</p>
          </div>
        </div>
        <div id='trabajo' className={styles.conttrabajo}>
          <h1 className={styles.trabajo}>Sobre nuestra forma de trabajo</h1>
          <p className={styles.textotrabajo}>Nuestra finalidad es dar respuesta inmediata a las aseguradoras, frente a los accidentes mencionados, realizando una investigación cabal, a través de entrevistas con las partes, recabando la documentación correspondiente, inspecciones en los lugares donde se produjo el siniestro, búsqueda de testigos, constataciones judiciales
          y todas aquellas acciones, que cada caso en particular requiera y nutran de elementos de convicción suficiente, para establecer la realidad de los hechos. Abarcando las zonas de Capital Federal, Provincia de Buenos Aires e interior del País.
          Complementariamente, ante la certeza de la real ocurrencia del accidente denunciado y en los casos de intervención de terceros, como por ejemplo, en los accidentes de tránsito, nos ocupamos en determinar la responsabilidad en la ocurrencia, tomando vistas de las actuaciones Jurisdiccionales y consecuentemente, realizando los recuperos de credito.</p>
          <h1 className={styles.gestion}>Gestión Exitosa ☆☆☆☆☆</h1>
          <p className={styles.textotrabajo}>Las gestiones realizadas por Estudio Galván se caracterizan por un alto foco en los resultados.
          Como dato estadístico, nuestra intervención significó para nuestros clientes, un ahorro promedio del 50% sobre el total de siniestros verificados en el último año.</p>
          <p className={styles.tipotrabajo}>Detección de Fraudes</p>
          <p className={styles.tipotrabajo}>Siniestros Rechazados</p>
          <p className={styles.tipotrabajo}>Fuera de Nóminas</p>
          <p className={styles.tipotrabajo}>Recuperos de créditos contra terceros responsables</p>
        </div>
        <div>
          <h2 id='nosotros' className={styles.titulogalvan}>Galvan Consultores</h2>
           <p className={styles.textogalvan}>Nace como respuesta a la necesidad de las Compañías Aseguradoras y ART, de contar con un soporte legal y técnico para la verificación e investigación de siniestros.
           Al momento de determinar nuestro objeto principal, decidimos abocarnos a los Accidentes contemplados por la Ley 24.557, ya que pudimos determinar que era un mercado carente de eficacia investigativa, fundamentalmente por las particularidades de los casos que trata, a lo que se suma el corto plazo que las normas establecen para aceptar o no el siniestro, lo que facilita notablemente la defraudación, provocando como consecuencia natural erogaciones innecesarias que pueden evitarse.
           Con oficinas en pleno centro porteño, nuestro estudio exhibe un importante despliegue territorial, asistiendo a empresas de primer nivel en todo el país, contando con investigadores y verificadores calificados en las principales plazas del interior.</p>
        </div>
    </main>
  )
} 
