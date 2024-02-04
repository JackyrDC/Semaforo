import Road from './components/road'
import './App.css'

function App() {

  return (
    <div>
      <div className = 'verticalContainer'>
        <Road orientation = 'vertical'/>
      </div>
      <div className = "horizontalContainer">
          <Road orientation = 'hori'/>
          <Road orientation = 'hori'/>
      </div>
      <div className = 'verticalContainer'>
        <Road orientation = 'vertical' />
      </div>
    </div>
  )
}

export default App
