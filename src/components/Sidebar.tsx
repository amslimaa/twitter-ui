import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, Pencil, User } from "phosphor-react";
import twitterLogo from '../assets/twitter-logo.svg'
import './Sidebar.css'
import { NavLink } from "react-router-dom";
export function Sidebar(){
  return (
    <aside className="sidebar">
        <img src={twitterLogo} alt="Logo" className='logo'/>
        <nav className='main-navigation'>
          <NavLink to="/">
            <House weight='fill' />
            <span>Home</span>
          </NavLink>
          <a href="">
            <Hash />
            <span>Explore</span>
          </a>
          <a href="">
            <Bell />
            <span>Notification</span>
          </a>
          <a href="">
            <Envelope />
            <span>Messages</span>
          </a>
          <a href="">
            <BookmarkSimple />
            <span>Bookmarks</span>
          </a>
          <a href="">
            <FileText />
            <span>Lists</span>
          </a>
          <a href="">
            <User />
            <span>Profile</span>
          </a>
          <a href="">
            <DotsThreeCircle />
            <span>More</span>
          </a>
        </nav>
        <button className='new-tweet'>
          <Pencil />
          <span>Tweet</span>
        </button>
      </aside>
  )
}