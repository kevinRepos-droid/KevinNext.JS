import Head  from 'next/head'
import Header  from './Header'
import Footer  from './Footer'


const Layout = ({children, pagina}) => {
  return (
    <div>
        <Head>
          <title> CreaTextil - {pagina}</title>
          <meta name="descripcion" content="Sitio Web de venta de 
          Uniformes" />
        </Head>

        
        <Header /> 

        {children}
        
        <Footer/>

        </div>

  )
}

export default Layout