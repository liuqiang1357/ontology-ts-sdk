import { writeVarBytes } from '../../../transaction/scriptBuilder';
import { bigIntToBytes, str2hexstr } from '../../../utils';

type GroupType = string | Group;

export default class Group {
    members: GroupType[];
    /**
     *
     * Define the threshold number of signatures
     * @type {number}
     * @memberof Group
     */
    threshold: number;

    public constructor(members: GroupType[], threshold: number) {
        this.members = members;
        this.threshold = threshold;
    }

    public serialize(): string {
        let result = '';
        const length = this.members.length;
        result += writeVarBytes(bigIntToBytes(length));
        for (const obj of this.members) {
            if (typeof obj === 'string') {
                result += writeVarBytes(str2hexstr(obj));
            } else if (obj instanceof Group) {
                result += writeVarBytes(obj.serialize());
            }
        }
        const th = bigIntToBytes(this.threshold);
        result += writeVarBytes(th);
        return result;
    }
}
