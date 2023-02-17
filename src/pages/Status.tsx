import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'
import { PaperPlaneRight } from "phosphor-react"

export function Status() {
  const [newAnswer, setNewAnswer ] = useState('')
  const [ answers, setAnswers ] = useState([
    "Concordo",
    "Olha faz sentido!",
    "Parabens pelo progresso!"
  ])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()
    setAnswers( [...answers, newAnswer])
    setNewAnswer('')
  }
  function handleHotkeySubmit (event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      setAnswers( [...answers, newAnswer])
      setNewAnswer('')
    }
    
  } 
  return (
    <main className="status">
      <Header title='Tweet' />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta officiis et, aspernatur veniam consectetur temporibus dignissimos maxime laboriosam, beatae mollitia rem dolor expedita ex quam inventore nobis facere quis est." />
      <Separator />

      <form onSubmit={createNewAnswer} className='answer-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/amslimaa.png" alt="Amós Lima" />
          <textarea 
            name="new-tweet" 
            id="tweet" 
            placeholder="Tweet your answer"
            value={newAnswer}
            onKeyDown={handleHotkeySubmit}
            onChange={event => setNewAnswer(event.target.value)} 
          />
        </label>
        <button type='submit'>
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>
      {answers.map(answer => <Tweet key={answer} content={answer} />)}
    </main>
  )
}