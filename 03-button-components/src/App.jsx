import Button from './components/button/button'
import "./App.css"

function App() {

  return (
    <div className='container'>
      <h1>Buttons</h1>


      <div className='mb-10'>
        <p>{`<Button />`}</p>
        <Button>Button</Button>
      </div>
      <div className='mb-10'>
        <p>{`<Button variant="outline" />`}</p>
        <Button variant="outline">Button</Button>
      </div>
      <div className='mb-10'>
        <p>{`<Button variant="outline" />`}</p>
        <Button variant="outline">Button</Button>
      </div>
      <div className='mb-10'>
        <p>{`<Button variant="text" />`}</p>
        <Button variant="text">Button</Button>
      </div>
      <div className='mb-10'>
        <p>{`<Button disableShadow />`}</p>
        <Button disableShadow>Button</Button>
      </div>

      <div className='grid-box-4 mb-10'>

      </div>


      <div className='grid-box-4 mb-10'>
        <div>
          <p>{`<Button startIcon="local_grocery_store" />`}</p>
          <Button startIcon="local_grocery_store" color="primary">Button</Button>
        </div>
        <div>
          <p>{`<Button endIcon="local_grocery_store" />`}</p>
          <Button endIcon="local_grocery_store" color="primary">Button</Button>
        </div>
      </div>

      <div className='grid-box-4 mb-10'>
        <div>
          <p>{`<Button size="sm" />`}</p>
          <Button size="sm" color="primary">Button</Button>
        </div>
        <div>
          <p>{`<Button  size="md" />`}</p>
          <Button size="md" color="primary">Button</Button>
        </div>
        <div>
          <p>{`<Button  size="lg" />`}</p>
          <Button size="lg" color="primary">Button</Button>
        </div>
      </div>

      <div className='grid-box-4 mb-10'>
        <div>
          <p>{`<Button color="default" />`}</p>
          <Button>Button</Button>
        </div>
        <div>
          <p>{`<Button color="primary" />`}</p>
          <Button color="primary">Button</Button>
        </div>
        <div>
          <p>{`<Button color="secondary" />`}</p>
          <Button color="secondary">Button</Button>
        </div>
        <div>
          <p>{`<Button color="danger" />`}</p>
          <Button color="danger">Button</Button>
        </div>
      </div>


    </div>
  )
}

export default App
