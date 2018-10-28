import { ConvectorController } from '@worldsibu/convector-core-controller';
import { Coffee } from '../src/coffee.model';
import { ControllerAdapter } from '@worldsibu/convector-core-adapter';
export declare class CoffeeControllerClient extends ConvectorController {
    adapter: ControllerAdapter;
    user?: string;
    name: string;
    constructor(adapter: ControllerAdapter, user?: string);
    create(id: string, sku: string, variety: string, category: string, description: string, value: number, createdDate: number): Promise<any>;
    transfer(id: string, to: string, modifiedDate: number): Promise<any>;
    updateQuality(id: string, quality: string, classification: string, modifiedDate: number): Promise<any>;
    join(id: string, components: Array<Coffee>, modifiedDate: number): Promise<any>;
    split(id: string, splitIds: Array<string>, modifiedDate: number): Promise<any>;
    getHistory(id: string): Promise<any>;
    changeLocation(id: string, locationId: number): Promise<any>;
}
