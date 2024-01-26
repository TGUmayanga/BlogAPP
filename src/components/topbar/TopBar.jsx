import './topbar.css';

export default function TopBar() {
  return (
    <div className='top'>
        <div className='topLeft'>
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        <i className="topIcon fa-brands fa-square-github"></i>
        <i className="topIcon fa-brands fa-linkedin"></i>
        </div>
        <div className='topCenter'>
            <ul className='topList'>
                <li className='topListItem'>Home</li>
                <li className='topListItem'>About</li>
                <li className='topListItem'>Contact</li>
                <li className='topListItem'>Write</li>
                <li className='topListItem'>LogOut</li>
            </ul>
        </div>
        <div className='topRight'>
            <img className='topImg' src='https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_640.jpg' alt=''></img>
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
