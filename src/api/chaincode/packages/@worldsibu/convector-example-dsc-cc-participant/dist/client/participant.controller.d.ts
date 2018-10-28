import { ConvectorController } from '@worldsibu/convector-core-controller';
import { Participant } from '../src/participant.model';
import { ControllerAdapter } from '@worldsibu/convector-core-adapter';
export declare class ParticipantControllerClient extends ConvectorController {
    adapter: ControllerAdapter;
    user?: string;
    name: string;
    constructor(adapter: ControllerAdapter, user?: string);
    register(participant: Participant): Promise<any>;
}
