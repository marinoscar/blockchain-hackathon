import { ConvectorModel } from '@worldsibu/convector-core-model';
import { Report } from './report.model';
export declare class Drug extends ConvectorModel<Drug> {
    readonly type: string;
    name: string;
    holder: string;
    reports: Array<Report>;
    modified: number;
    modifiedBy: string;
    created: number;
    createdBy: string;
}
