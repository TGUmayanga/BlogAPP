import './sidebar.css';

export default function SideBar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className='sidebarTitle'>About Me</span>
            <img className='aboutImg' src='https://cdn.pixabay.com/photo/2015/05/31/10/55/man-791049_1280.jpg' alt=''></img>
            <p>Throughout my academic journey, I have gained proficiency in a diverse range of technologies, including 
Java, .NET, HTML, CSS, PHP, JavaScript (ES6), WordPress, MySQL, and Git. My practical experience includes 
the successful completion of projects that demonstrate my ability to apply these skills effectively. 
Moreover, I am well-versed in MVC, OOP principles, and PHP frameworks like CodeIgniter. What sets me 
apart is not only my technical acumen but also my strong soft skills. I pride myself on being an effective 
team player, adept at solving problems creatively, analyzing situations effectively, and leading 
collaboratively. My communication skills, both written and verbal, enable me to convey complex technical 
concepts clearly, facilitating smooth collaboration within diverse work settings.</p>
        </div>
        <div className="sidebarItem">
        <span className='sidebarTitle'>Categories</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>
        </ul>
        </div>
        <div className="sidebarItem">
        <span className='sidebarTitle'>Follow Us</span>
        <div className="sidebarSocial">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        <i className="topIcon fa-brands fa-square-github"></i>
        <i className="topIcon fa-brands fa-linkedin"></i>
        </div>
        </div>
    </div>
  )
}
