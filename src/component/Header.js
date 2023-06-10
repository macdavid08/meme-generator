import troll from './image/Troll Face.png'
import './Header.css'

function Header () {
    return (
        <header>
            <nav className='navbar'>
               <div className='nav--content'>
                    <img src = {troll} className='nav--troll'/>
                    <h2>Meme Generator</h2>
               </div>
               <div className='nav--text'>
                    <p>React Course</p>
                </div>
            </nav>
            
        </header>
    )
}

export default Header