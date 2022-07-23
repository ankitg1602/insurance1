export const Image = ({ title, largeImage, smallImage }) => {
  return (
    <div className='portfolio-item' style={{margin:"20px", width: "300px", height: "300px"}}>
      <div className='hover-bg'>
        {' '}
        <a
          href={largeImage}
          title={title}
          data-lightbox-gallery='gallery1'
        >
          {/* <div className='hover-text'>
            <h4>{title}</h4>
          </div> */}
          <img
            src={smallImage}
            className='img-responsive'
            alt={title}
          />{' '}
        </a>{' '}
      </div>
    </div>
  )
}