export default function validateImage(image) {
  var re = /(jpg|jpeg|png)$/;
  return re.test(String(image).toLowerCase());
}