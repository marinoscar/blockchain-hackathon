import {FabricControllerAdapter} from '@worldsibu/convector-adapter-fabric';

const fabricTimeout = 300000;

export class FabricAdapterBuilder {

  readonly base: any;

  constructor(
      keyStorePath: string,
      networkProfilePath: string,
      channel: string,
      chainCode: string,
  ) {
    this.base = {
      txTimeout: fabricTimeout,
      channel: channel,
      chaincode: chainCode,
      keyStore: keyStorePath,
      networkProfile: networkProfilePath,
      userMspPath: keyStorePath,
    };
  }

  public build(user: string): FabricControllerAdapter {
    const config = Object.assign({user: user}, this.base);
    return new FabricControllerAdapter(config);
  }
}
