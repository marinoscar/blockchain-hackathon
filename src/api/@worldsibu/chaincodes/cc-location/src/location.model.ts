import * as yup from 'yup';
import {
  ConvectorModel,
  ReadOnly,
  Required,
  Validate,
  Default
} from '@worldsibu/convector-core-model';

export class Location extends ConvectorModel<Location> {

  @ReadOnly()
  public readonly type = 'com.blockchain.hackathon.location';

  @ReadOnly()
  @Required()
  @Validate(yup.string())
  public name: string;

  @Required()
  @Validate(yup.string())
  public owner: string;

  @ReadOnly()
  @Required()
  @Validate(yup.string())
  public latitude: string;

  @ReadOnly()
  @Required()
  @Validate(yup.string())
  public longitude: string;

}