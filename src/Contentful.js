import { createClient } from 'contentful'



export default createClient({
    space: 'm267nzrprnrc',
    accessToken: 'UhNY7ueYX8L49KUH6vINgsVfgZ555dz-QZyXhQsnQGs'

    // space: process.env.REACT_APP_API_SPACE,
    // accessToken: process.env.REACT_APP_ACCESS_TOKEN
})