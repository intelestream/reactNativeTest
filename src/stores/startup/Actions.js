import {makeCreators, makeTypes} from 'src/stores/utils'
const Types = {
  STARTUP: null,
}

const Creators = makeCreators(Types)

export const StartupTypes = makeTypes(Types)
export default Creators