import './singlepost.css';

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostwrapper">
            <img className='singlePostImg' src='https://www.uwa.edu.au/news/-/media/Project/UWA/UWA/Newsroom/Card-image/2023/value-of-nature-Card.jpg' alt=''></img>
            <h1 className='singlePostTitle'>Hello blog master 
            <div className="singlePOstedit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
            </div></h1>

            <div className="singlePostInfo">
                <span >Author: <b>Chamika</b></span>
            </div>
        </div>
       
        </div>
  )
}
