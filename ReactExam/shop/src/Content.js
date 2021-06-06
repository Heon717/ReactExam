import React , {useState} from 'react';

const Content = (props) => {

    let sho = props.shoes.map((e)=>{
        return (
                <div className="col-md-4">
                    <h2>{props.shoes[e].title}</h2>
                    <p>{props.shoes[e].content}</p>
                    <p>{props.shoes[e].price}</p>
                </div>
        )
    })
}

export default Content;