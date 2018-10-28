import { ConvectorModel } from '@worldsibu/convector-core-model';
export declare class Coffee extends ConvectorModel<Coffee> {
    readonly type: string;
    sku: string;
    description: string;
    value: number;
    variety: string;
    quality: string;
    classification: string;
    category: string;
    owner: string;
    createdDate: number;
    createdBy: string;
    modifiedDate: number;
    modifiedBy: string;
    components: Array<Coffee>;
    locationId: number;
}
