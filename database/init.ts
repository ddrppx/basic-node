import User from '../src/models/User'

const dbInit = () => {
    User.sync()
}

export default dbInit
