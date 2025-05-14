import * as yup from 'yup';

let ProductSchema = yup.object({
    image: yup.string().required(),
    title: yup.string().required(),
    name: yup.string().required(),
    desc: yup.string().required(),
});
export default ProductSchema