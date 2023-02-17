import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import './Timeline.css'




export function Timeline() {
  const [newTweet, setNewTweet ] = useState('')
  const [ tweets, setTweets ] = useState([
    "Meu primeiro tweet",
    "foreach nao tem retorno",
    "Map tem retorno"
  ])

  function createNewTweets(event: FormEvent) {
    event.preventDefault()
    setTweets( [...tweets, newTweet])
    setNewTweet('')
  }

  function handleHotkeySubmit (event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      setTweets( [...tweets, newTweet])
      setNewTweet('')
    }
  } 
  return (
    <main className="timeline">
      <Header title='Home' />
      <form onSubmit={createNewTweets} className='new-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/amslimaa.png" alt="Amós Lima" />
          <textarea 
            name="new-tweet" 
            id="tweet" 
            placeholder="What's happening?"
            onKeyDown={handleHotkeySubmit}
            onChange={event => { setNewTweet(event.target.value) }}
            value={newTweet}
          />
        </label>
        <button type='submit'>Tweet</button>
      </form>
      <Separator />
      {tweets.map((tweet) => <Tweet key={tweet} content={tweet} />)}
    </main>
  )
}