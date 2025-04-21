// let items = ["banana",12.999,5]

let items = {
      itemName: "Banana",
      Qty:5,
      price: 1.5,
      discount:0.25,
      total:5*1.5-0.25
}
items.itemName = "Apple"
items.Qty = 10
items.total = items.Qty * items.price - items.discount
console.log(items)