import { User } from "../interfaces/user.interface";

export class getUser {

    static mapUser( item: User): User {
        return{
            id: item.id,
            name: item.name,
            email: item.email,
            status: item.status
        };
    }

    static mapUserArray( items: User[]): User[]{
        return items.map(this.mapUser)
    }
}