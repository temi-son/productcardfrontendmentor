import './App.css'

function App() {
  return (
    <div className="App">
      <picture>
        <source srcSet='assets\image-product-desktop.jpg' media='(min-width: 419px)'></source>
        <source srcSet='assets\image-product-mobile.jpg' ></source>
        <img id='ProductImg' src='assets\image-product-desktop.jpg' alt='Product Image' />
      </picture>
      <section>
        <div className='Title'>Preview</div>
        <div className='ProductName'>Gabrielle Essence Eau De Parfum</div>
        <div className='Discription'>A floral, solar and voluptuous interpretation
          composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</div>
        <div className='Price'>
          <span style={{ color: "#3D8168", fontFamily: 'Fraunces', fontWeight: 700, fontSize: '25px' }}>$149.99</span>
          <span style={{ fontFamily: 'Fraunces', fontSize: '10px', textDecoration: "line-through", color: 'hsl(228, 12%, 48%)' }}>$169.99</span>
        </div>
        <button>
          <img src='assets\icon-cart.svg' />
          <div>Add to Cart</div>
        </button>
      </section>
    </div>
  )
}

export default App
