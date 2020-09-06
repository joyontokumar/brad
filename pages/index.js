import Fetch from 'isomorphic-unfetch'
import Layout from '../components/layout'
const Index = (props) => {
  return (
    <Layout>
      <div className="home-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5">
              <h2>This is Our Latest Posts</h2>
            </div>
          </div>
          <div className="row">
            {props.data ? (
              props.data.map((single) => {
                return (
                  <div className="col-lg-4" key={single.id}>
                    <div className="post-lists">
                      <h3>{single.title.substring(0, 5)}</h3>
                      <p>{single.body.substring(0, 80)}</p>
                    </div>
                  </div>
                )
              })
            ) : (
              <p>Data not found</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}
// Index.getStaticProps = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   const data = await res.json()
//   return {
//     data,
//   }
// }

export async function getStaticProps(context) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return {
    props: {
      data,
    },
  }
}

export default Index
