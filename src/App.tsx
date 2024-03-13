import MainContent from './components/MainContent'
// import Header from './components/Header'
import Footer from './components/Footer'
import { Leva } from 'leva'

function App() {
  return (
    <>
      {/* <Header /> */}
      <div className="main relative bg-[#000]">
        <MainContent />
        <Leva collapsed/>
      </div>
      <Footer />
    </>
  )
}

export default App
