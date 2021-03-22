import React from 'react'

export function ItemPreview({ item }) {
    return (
        <article className="item-preview">
            <img src={item.imgUrl} alt="" />
            <div>

                <h4>{item.title}</h4>
                <p>{item.desc}</p>
            </div>
        </article>
    )
}
