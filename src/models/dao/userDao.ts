import User from '../User';
import { GetAllUserFilters } from './types';
import { UserInput, UserOutput } from '../User';

export const create = async (new_user_info: UserInput): Promise<UserOutput> => {

    const new_user = await User.create(new_user_info);

    return new_user;
}

export const read = async (filters?: GetAllUserFilters): Promise<UserOutput[]> => {
    const read_user = await User.findAll({
        attributes: ['firstName', 'lastName', 'birthday']
    });
    
    return read_user;
}

export const readSingle = async (user_id: number): Promise<UserOutput | null> => {
    const read_user = await User.findByPk(
        user_id,
        { attributes: ['firstName', 'lastName', 'birthday'] }
    );

    return read_user;
}

export const update = async (user_id: number, userInfo: Partial<UserInput>): Promise<UserOutput | undefined> => {
    const user = await User.findByPk(user_id);
    let updatedUser;

    if(user){
        updatedUser = await(user as User).update(userInfo)
    }

    return updatedUser;
}

export const deleteById = async (user_id: number): Promise<boolean> => {
    const deletedUser = await User.destroy({
        where:{ id: user_id }
    })
    return !!deletedUser
}
