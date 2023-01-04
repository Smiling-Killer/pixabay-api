// import React from 'react'

// const Imagelist = (props) => {
//     const images = props.image.map((image) => {
//         return <img key={image.id} src={image.webformatURL} width="50%" alt="resultImage" />
//     });
//     return (
//         <div className='container' style={{ width: "100%" }}>
//             {images}
//         </div>
//     )
// }


// export default Imagelist
import React from "react";

class Imagelist extends React.Component{

    render() {
        const images = this.props.image.map((image) => {
            return <img key={image.id} src={image.webformatURL} alt="images" height={390} width={550} style={{margin:"5px"}} />
        })
        return(
            <div className="container" >
                <div style={{
                    display: "flex",
                    
                    height: "100%", flexWrap: "wrap"

                }}>
                {images}  
                </div>
              
         </div>
     )
 }
}
export default Imagelist;