export default function validatePrice(price) {
  var re = /^\d{0,10}(\.\d{1,2})?$/;
  return re.test(String(price).toLowerCase());
}