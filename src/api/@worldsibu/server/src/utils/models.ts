import { BaseStorage } from '@worldsibu/convector-core-storage';
import { CouchDBStorage } from '@worldsibu/convector-storage-couchdb';
import { Drug as DrugModel } from '@worldsibu/convector-example-dsc-cc-drug';
import { Participant as ParticipantModel } from '@worldsibu/convector-example-dsc-cc-participant';

BaseStorage.current = new CouchDBStorage({
  host: process.env.COUCHDB_HOST,
  protocol: process.env.COUCHDB_PROTOCOL,
  port: process.env.COUCHDB_PORT
}, process.env.COUCHDBVIEW);

export namespace Models {
  export async function formatDrug(drug: DrugModel): Promise<any> {
    const drugObj = drug.toJSON();
    drugObj.createdBy = await formatParticipant(await Participant.getOne(drugObj.createdBy));
    drugObj.modifiedBy = await formatParticipant(await Participant.getOne(drugObj.modifiedBy));
    drugObj.holder = await formatParticipant(await Participant.getOne(drugObj.holder));
    return drugObj;
  }

  export async function formatParticipant(participant: ParticipantModel): Promise<any> {
    const participantObj = participant.toJSON();
    return participantObj;
  }

  export const Drug = DrugModel;
  export const Participant = ParticipantModel;
}
