
var getShopCartListByUser = function (cb) {
  fetch("http://localhost:3000/shopcartapi").then(response => {
    response.json().then(data => {
      // console.log(data)
      cb(data);
    })
  })
}

module.exports = {
  getShopCartListByUser:getShopCartListByUser
}
