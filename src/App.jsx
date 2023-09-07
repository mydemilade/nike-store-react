import React from 'react'
import { heroapi ,popularsales, topratesales, highlight, sneaker,story, footerAPI } from './data/data.js'
import { Cart, FlexContent, Footer, Hero, Navbar, Sales, Stories,} from './components'


const App = () => {
  return (
   <>
<main className='flex flex-col gap-16 relative'>
  <Navbar/>
  <Cart/>
  <Hero heroapi={heroapi} />
  <Sales endpoint={popularsales} ifExists/>
  <FlexContent endpoint={highlight} ifExists/>
  <Sales endpoint={topratesales}/>
<FlexContent endpoint={sneaker}/>
<Stories story={story}/>

</main>
<Footer footerApi={footerAPI}/>
   </>
  )
}

export default App