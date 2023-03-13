import User from '../User';
import { Op } from 'sequelize';
import { GetAllUserFilters } from './types';
import { UserInput, UserOutput } from '../User';

export const create = async (new_user_info: UserInput): Promise<UserOutput> => {

    const new_user = await User.create(new_user_info);

    // TODO: Solve TS type conflitct
    return new_user;
}

export const read = async (filters?: GetAllUserFilters): Promise<UserOutput[]> => {
    const read_user = await User.findAll({ logging: false });
    
    // TODO: Line 17
    return read_user;
}

export const readSingle = async (user_id: number): Promise<UserOutput> => {
    const read_user = await User.findByPk(user_id);
    if(!read_user){
        throw new Error('not found');
    }

    // TODO: Line 17
    return read_user;
}

export const update = async (user_id: number, userInfo: Partial<UserInput>): Promise<UserOutput> => {
    const user = await User.findByPk(user_id);
    let result;

    if(!user){
        throw new Error('not found');
    }
    const updatedUser = await(user as User).update(userInfo)

    // TODO: Line 17
    return updatedUser;
}

export const deleteById = async (user_id: number): Promise<boolean> => {
    const deletedUser = await User.destroy({
        where: {
            id: {user_id}
        }
    })
    return !!deletedUser
}


// formatData(users_return: Array<Object[]>): Array<Object[]>{
//    
//     let users_formatted = Array<Object[]>;
//
//     users_return.forEach(
//         (user: Object) => {
//             users_formatted.push({
//             id: user.id,
//             firstName: user.firstName,
//             lastName: user.lastName,
//             birthday: user.birthday // FORMAT TO Y-m-d
//         });
//     });
//
//     return users_formatted;
// }
