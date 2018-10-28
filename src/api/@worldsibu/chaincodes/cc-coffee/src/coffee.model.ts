import * as yup from 'yup';
import {
  ConvectorModel,
  ReadOnly,
  Required,
  Validate,
  Default
} from '@worldsibu/convector-core-model';

export class Coffee extends ConvectorModel<Coffee> {

  @ReadOnly()
  public readonly type = 'com.blockchain.hackathon.coffee';

  @ReadOnly()
  @Required()
  @Validate(yup.string())
  public sku: string;

  @ReadOnly()
  @Required()
  @Validate(yup.string())
  public description: string;

  @ReadOnly()
  @Required()
  @Validate(yup.string())
  public value: number;

  @ReadOnly()
  @Required()
  @Validate(yup.string())
  public variety: string;

  @ReadOnly()
  @Required()
  @Validate(yup.string())
  public quality: string;

  @ReadOnly()
  @Required()
  @Validate(yup.string())
  public classification: string;

  @ReadOnly()
  @Required()
  @Validate(yup.string())
  public category: string;

  @Required()
  @Validate(yup.string())
  public owner: string;

  @ReadOnly()
  @Required()
  @Validate(yup.number())
  public createdDate: number;

  @ReadOnly()
  @Required()
  @Validate(yup.string())
  public createdBy: string;

  @Validate(yup.number())
  public modifiedDate: number;

  @Required()
  @Validate(yup.string())
  public modifiedBy: string;
}