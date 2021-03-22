export const itemService = {
  query

}

const ITEM = 'ITEM_DB'

function query() {
  let items = localStorage.getItem(ITEM)
  if (!items || !items.length) {
    items = [
      {
        title: 'Seared Salmon Fillet',
        desc: 'Our locally sourced salmon served with a refreshing buckwheat summer salad.',
        imgUrl: '/nofarYunger/css-interview.git/static/media/menu-item1.7bd94a87.jpg'
      },
      {
        title: 'Rosemary Filet Mignon',
        desc: 'Our prime beef served to your taste with a delicious choice of seasonal sides.',
        imgUrl: '/nofarYunger/css-interview.git/static/media/menu-item2.81249e77.jpg'
      },
      {
        title: 'Summer Fruit Chocolate Mousse',
        desc: 'Creamy mousse combined with summer fruits and dark chocolate shavings.',
        imgUrl: '/nofarYunger/css-interview.git/static/media/menu-item3.22eddbf1.jpg'
      },

    ]
  }
  return items
}