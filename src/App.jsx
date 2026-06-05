import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'
import './App.css'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = () => {
    refreshFact()
  }

  return (
    <main className="app-container">
      <h1 className="title">Cat Fact Generator</h1>
      <button className="refresh-button" onClick={handleClick}>Get new Fact</button>
      
      <section className="content-section">
        {imageUrl && (
          <div className="image-wrapper">
            <img 
              src={imageUrl} 
              alt={`Image extracted using the first three words for ${fact}`} 
              className="cat-image"
            />
          </div>
        )}
        {fact && (
          <div className="fact-card">
            <p className="fact-text">"{fact}"</p>
          </div>
        )}
      </section>
    </main>
  )
}
