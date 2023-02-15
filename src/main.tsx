import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { Tweet } from './components/Tweet'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Separator } from './components/Separator'

const tweets = [
  "Meu primeiro tweet",
  "foreach nao tem retorno",
  "Map tem retorno"
]

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <Sidebar />
      <div className="content">
        <main className="timeline">
          <Header title='Header'/>
          <form className='new-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://github.com/amslimaa.png" alt="Amós Lima" />
              <textarea name="new-tweet" id="tweet" placeholder="What's happening?"/>
            </label>
            <button type='submit'>Tweet</button>
          </form>
          <Separator />
          {tweets.map(tweet => <Tweet key={tweet} content={tweet} />)}
        </main>
      </div>
    </div>
  </React.StrictMode>,
)
