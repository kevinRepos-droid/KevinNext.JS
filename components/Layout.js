import Head  from 'next/head'
import Headear  from './Header'


const Layout = ({children, pagina}) => {
  return (
    <div>
        <Head>
          <title> CreaTextil - {pagina}</title>
          <meta name="descripcion" content="Sitio Web de venta de 
          Uniformes" />
        </Head>

        <Headear />

    

        {children}
        </div>

  )
}

export default Layout