// @ts-check

import {FabricControllerAdapter} from '@worldsibu/convector-adapter-fabric';
import {
  Participant,
  ParticipantControllerClient,
} from '@worldsibu/convector-example-dsc-cc-participant/dist/client';
import {UserStore} from './store/user';

const fabricTimeout = 300000;

export async function initUsers(
    userStore: UserStore,
    users: Array<string>,
    organization: string,
    keyStorePath: string,
    networkProfilePath: string,
    channel: string,
    chainCode: string,
) {
  const existingUsers = await userStore.List();
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
    return createParticipant(adapter, user, organization, existingUsers);
  });
  await Promise.all(promises);
}

async function createParticipant(
    adapter: FabricControllerAdapter,
    user: string,
    organization: string,
    existingUsers: any[],
) {
  await adapter.init();
  const participantCtrl = new ParticipantControllerClient(adapter);
  const userExists = existingUsers.find((u) => {
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
