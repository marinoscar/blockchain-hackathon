import { ConvectorModel } from '@worldsibu/convector-core-model';
export declare class Participant extends ConvectorModel<Participant> {
    readonly type: string;
    user: string;
    organization: string;
    created: number;
}
