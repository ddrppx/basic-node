import User from '../User';
import { GetAllUserFilters } from './types';
import { UserInput, UserOutput } from '../User';

export const create = async (new_user_info: UserInput): Promise<UserOutput> => {

    const new_user = await User.create(new_user_info);

    return new_user;
}

export const read = async (filters?: GetAllUserFilters): Promise<UserOutput[]> => {
    const read_user = await User.findAll({ logging: false });
    
    return read_user;
}

export const readSingle = async (user_id: number): Promise<UserOutput> => {
    const read_user = await User.findByPk(user_id);
    if(!read_user){
        throw new Error('User not found');
    }

    return read_user;
}

export const update = async (user_id: number, userInfo: Partial<UserInput>): Promise<UserOutput> => {
    const user = await User.findByPk(user_id);

    if(!user){
        throw new Error('User not found');
    }
    const updatedUser = await(user as User).update(userInfo)

    return updatedUser;
}

export const deleteById = async (user_id: number): Promise<boolean> => {
    const deletedUser = await User.destroy({
        where:{
            id: user_id
        }
    })
    return !!deletedUser
}

//
// const formatData = (users_return: Array<UserOutput>): Array<UserOutput> => {
//   
//     let users: Array<UserOutput> = [];
//
//     users_return.forEach((user) => {
//         users.push({
//             id: user.id,
//             firstName: user.firstName,
//             lastName: user.lastName,
//             birthday: user.birthday
//         })
//     })
//
//     return users;
// }
