import { ConvectorController } from '@worldsibu/convector-core-controller';
import { Coffee } from './coffee.model';
export declare class CoffeeController extends ConvectorController {
    create(id: string, sku: string, variety: string, category: string, description: string, value: number, createdDate: number): Promise<void>;
    transfer(id: string, to: string, modifiedDate: number): Promise<void>;
    updateQuality(id: string, quality: string, classification: string, modifiedDate: number): Promise<void>;
    join(id: string, components: Array<Coffee>, modifiedDate: number): Promise<void>;
    split(id: string, splitIds: Array<string>, modifiedDate: number): Promise<void>;
    getHistory(id: string): Promise<import("@worldsibu/convector-core-model/dist/src/convector-model").History<Coffee>[]>;
    changeLocation(id: string, locationId: number): Promise<void>;
}
