import React from 'react'
import { itemService } from '../services/itemService'
import { ItemPreview } from './ItemPreview'

export function ItemList() {

    const items = itemService.query()
    return (
        <div>
            <section className="item-list flex column">
                {items.map((item, idx) => {
                    return <ItemPreview key={idx} item={item} />
                })}
            </section>
        </div>
    )
}
