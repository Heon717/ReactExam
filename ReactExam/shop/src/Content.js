import React , {useState} from 'react';

const Content = (props) => {
        return (
                <div className="col-md-4">
                    <img src={"https://codingapple1.github.io/shop/shoes"+(props.shoes.id+1)+".jpg"} width="100%"/>
                    <h2>{props.shoes.title}</h2>
                    <p>{props.shoes.content}</p>
                    <p>{props.shoes.price}</p>
                </div>
        )

}

export default Content;