/* eslint-disable jsx-a11y/anchor-has-content */
const Product = ({img,link, title, desc}) => {
    return (
        <div className="p">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-title-mobile">{title}</div>
            </div>
            <div className="content">
                <a href={link}  target="_blank" rel="noreferrer">
                    <div className="content-overlay"></div>
                    <img  className="content-image" src={img} />
                    <div className="content-details fadeIn-bottom">
                        <h3 className="mobile">Click Me !!</h3>
                        <h3 className="content-title">{title}</h3>
                        <p className="content-text">
                            {desc}
                        </p>
                    </div>
                </a> 
            </div>
        </div>
    )
}

export default Product