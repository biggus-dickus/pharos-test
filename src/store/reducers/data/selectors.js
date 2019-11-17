import NameSpace, {DataType} from '../namespace';

export const getMenuData = (store) => store[NameSpace.DATA][DataType.MENU];
export const getPromoCodesData = (store) => store[NameSpace.DATA][DataType.PROMO_CODES];
