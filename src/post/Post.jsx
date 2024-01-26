import './post.css';

export default function Post() {
  return (
    <div className='post'>
        <img className='postImg' src='https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg' alt=''></img>
        <div className='postInfo'>
            <div className="postcats">
                <span className='postcat'>Music</span>
                <span className='postcat'>Life</span>
            </div>
            <span className='postTitle'>
                Music is Life if the hart </span>
                <hr/>
            <span className="postDate">1 hour ago</span>
            <p className='postDesc' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum saepe aut excepturi, necessitatibus doloribus expedita, quod soluta labore accusantium at porro velit delectus beatae ea. Ut soluta corrupti odio deserunt!</p>
        </div>
    </div>
  )
}
