import * as yup from 'yup';

let ProductSchema = yup.object({
  image:yup.string().required(),
  title:yup.string().required(),
  price:yup.number().required().positive(),
});
export default ProductSchema