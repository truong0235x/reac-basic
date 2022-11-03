import { users } from "../mocks/users"

export const getUsers =()=> {
    return new Promise(resolve => {
        return resolve(users)
    })
}