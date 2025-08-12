import dbconnect from '../../../lib/dbconnect';
import Product from '../../../lib/Product';

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbconnect();

  switch (method) {
    case 'GET':
      try {
        const product = await Product.findById(id);
        if (!product) {
          return res.status(404).json({ success: false, message: 'Product not found' });
        }
        res.status(200).json(product);
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    case 'PUT':
      try {
        const product = await Product.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!product) {
          return res.status(404).json({ success: false, message: 'Product not found' });
        }
        res.status(200).json(product);
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    case 'DELETE':
      try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
          return res.status(404).json({ success: false, message: 'Product not found' });
        }
        res.status(200).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}