import Head from 'next/head'
import Navbar from '../components/navbar'
const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Brad Travarsary</title>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
        />
      </Head>
      <Navbar />
      {props.children}
    </div>
  )
}
export default Layout
