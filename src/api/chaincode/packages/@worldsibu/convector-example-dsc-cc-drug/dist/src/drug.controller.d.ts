import { ConvectorController } from '@worldsibu/convector-core-controller';
export declare class DrugController extends ConvectorController {
    create(id: string, name: string, created: number): Promise<void>;
    transfer(drugId: string, to: string, reportHash: any, reportUrl: any, modified: number): Promise<void>;
}
