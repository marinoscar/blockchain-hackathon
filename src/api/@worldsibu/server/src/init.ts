// @ts-check

import {FabricControllerAdapter} from '@worldsibu/convector-adapter-fabric';
import {
  ParticipantControllerClient,
  Participant,
} from '@worldsibu/convector-example-dsc-cc-participant/dist/client';
import {Models} from './utils';

const fabricTimeout = 300000;

export async function initUsers(
    users: Array<string>,
    organization: string,
    keyStorePath: string,
    networkProfilePath: string,
    channel: string,
    chainCode: string,
) {
  const promises = users.map((user) => {
    const adapter = new FabricControllerAdapter({
      user: user,
      txTimeout: fabricTimeout,
      // set it later to enable Mutual TLS
      channel: channel,
      chaincode: chainCode,
      keyStore: keyStorePath,
      networkProfile: networkProfilePath,
      userMspPath: keyStorePath,
    });
    return createParticipant(adapter, user, organization);
  });
  await Promise.all(promises);
}

async function createParticipant(
    adapter: FabricControllerAdapter,
    user: string,
    organization: string,
) {
  await adapter.init();
  const participantCtrl = new ParticipantControllerClient(adapter);
  const users = await Models.getAllParticipants();
  const userExists = users.find((u) => {
    return u.user === user && u.organization === organization;
  });
  if (!userExists) {
    const participant = new Participant({
      user: user,
      organization: organization,
      created: Date.now(),
    });
    await participantCtrl.register(participant);
    console.info(`Created user "${user}"`);
  }
}
