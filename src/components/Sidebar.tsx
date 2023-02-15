import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, User } from "phosphor-react";
import twitterLogo from '../assets/twitter-logo.svg'
import './Sidebar.css'
export function Sidebar(){
  return (
    <aside className="sidebar">
        <img src={twitterLogo} alt="Logo" className='logo'/>
        <nav className='main-navigation'>
          <a className='active' href="">
            <House weight='fill' />
            Home
          </a>
          <a href="">
            <Hash />
            Explore
          </a>
          <a href="">
            <Bell />
            Notification
          </a>
          <a href="">
            <Envelope />
            Messages
          </a>
          <a href="">
            <BookmarkSimple />
            Bookmarks
          </a>
          <a href="">
            <FileText />
            Lists
          </a>
          <a href="">
            <User />
            Profile
          </a>
          <a href="">
            <DotsThreeCircle />
            More
          </a>
        </nav>
        <button className='new-tweet'>Tweet</button>
      </aside>
  )
}