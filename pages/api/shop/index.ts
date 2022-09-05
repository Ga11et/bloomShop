import { NextApiResponse } from 'next';
import { ProductType } from '../../../app/types/clientApiTypes';
import { ExtendedRequestType } from '../../../app/types/serverApiTypes';
import { productAPIUtils } from '../../../utils/productAPI/productUtils';
async function shopAPI (req: ExtendedRequestType<ProductType>, res: NextApiResponse) {
  try {
    switch (req.method) {
      case 'GET':
        await productAPIUtils.getAll(req, res)
        break;
      case 'POST':
        await productAPIUtils.post(req, res)
        break;
      case 'DELETE':
    
        break;
      case 'PUT':
  
        break;
      default:
        return res.status(400).json('Пришло туда куда не должно было приходить')
    }
  } catch (error) {
    console.log('api ' + error)
    res.status(400).json(error)
  }
}
export default shopAPI