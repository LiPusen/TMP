import { getSen, getLoc, serialize } from '../utils'

export default {
    custom: state => serialize(state.custom) || {},
}