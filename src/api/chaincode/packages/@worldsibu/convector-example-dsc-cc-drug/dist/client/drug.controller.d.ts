import { ConvectorController } from '@worldsibu/convector-core-controller';
import { ControllerAdapter } from '@worldsibu/convector-core-adapter';
export declare class DrugControllerClient extends ConvectorController {
    adapter: ControllerAdapter;
    user?: string;
    name: string;
    constructor(adapter: ControllerAdapter, user?: string);
    create(id: string, name: string, created: number): Promise<any>;
    transfer(drugId: string, to: string, reportHash: any, reportUrl: any, modified: number): Promise<any>;
}
