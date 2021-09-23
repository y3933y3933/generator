import React from 'react'
import { TwemojiMendingHeart } from '../icons/TwemojiMendingHeart'

const Header = ()=>{
    return (
    <div className="bg-primary text-white h-14 flex items-center">
      <TwemojiMendingHeart className="mx-2" width="1.5rem" height="1.5rem"/>
      <h1 className="tracking-widest text-2xl font-bold">失戀產生器</h1>
    </div>)
}

export default Header

