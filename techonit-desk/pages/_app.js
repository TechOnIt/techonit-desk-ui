import Head from 'next/head'
import AuthLayout from '../components/auth/layouts/layout'
import MainLayout from '../components/main/layouts/layout'
import ManageLayout from '../components/manage/layouts/layout'
import combineReducers from '../reducers'
import Provider from "react-redux"
import createStore from "redux"

import '../styles/globals.css'
import '../components/manage/layouts/vertical-layout.css'
import "../styles/libs/font-awesome/css/fontawesome.min.css"

function App({ Component, pageProps }) {
  // set layout
  const Layout = Component.layout === 'auth' ? AuthLayout :
    Component.layout === 'manage' ? ManageLayout : MainLayout;
console.log("red",combineReducers)
  return (
    <>
    <Provider store={createStore(combineReducers)=>{}}>
      <Head>
        <title>{Component.title ? Component.title + ' - ' : ''}Technology On It</title>
        if(Component.description){
          <meta name="description" content={Component.description} />
        }
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
          />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
          </Provider>
    </>
  )
}

export default App