import { Sparkle } from "phosphor-react";

import './Header.css'
interface headerProps {
  title: string
}
export function Header(props: headerProps) {
  return (
    <div className="timeline-header">
      {props.title}
      <Sparkle />
    </div>
  )
}