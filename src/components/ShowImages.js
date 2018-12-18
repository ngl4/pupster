import React from "react";

const ShowImages = props => {

    const chosenImages = [];

    for (let i =0; i <=100; i++){
        chosenImages.push(props.images[i]);
    }
    const showImages = chosenImages.map((image) => <img alt={props.search} className="img-fluid m-2" src={image} style={{ margin: "0 auto" }} />);

    return(
        <div>{showImages}</div>
    );
}
export default ShowImages;
