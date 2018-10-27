import * as yup from 'yup';
import {
  Controller,
  ConvectorController,
  Invokable,
  Param
} from '@worldsibu/convector-core-controller';

import { Coffee } from './coffee.model';

@Controller('coffee')
export class CoffeeController extends ConvectorController {
  @Invokable()
  public async create(
    @Param(yup.string())
    id: string,
    @Param(yup.string())
    sku: string,
    @Param(yup.number())
    variety: string,
    @Param(yup.number())
    category: string,
    @Param(yup.number())
    description: string,
    @Param(yup.number())
    value: number,
    @Param(yup.number())
    createdDate: number
  ) {
    const exists = await Coffee.getOne(id);

    if (exists.id === id) {
      throw new Error('There is already one coffee with that unique id');
    }

    let coffee = new Coffee(id);
    coffee.createdBy = this.sender;
    coffee.modifiedBy = this.sender;
    coffee.owner = this.sender;
    coffee.sku = sku;
    coffee.variety = variety;
    coffee.category = category;
    coffee.description = description;
    coffee.value = value;
    coffee.createdDate = createdDate;
    coffee.modifiedDate = createdDate;

    await coffee.save();
  }

  @Invokable()
  public async transfer(
    @Param(yup.string())
    id: string,
    @Param(yup.string())
    to: string,
    @Param(yup.number())
    modifiedDate: number
  ) {
    const coffee = await Coffee.getOne(id);

    if (coffee.owner !== this.sender) {
      throw new Error('The current owner is the only user capable of transferring the coffee in the value chain.');
    }
    coffee.owner = to;
    coffee.modifiedBy = this.sender;
    coffee.modifiedDate = modifiedDate;

    await coffee.save();
  }

  @Invokable()
  public async updateQuality(
    @Param(yup.string())
    id: string,
    @Param(yup.string())
    quality: string,
    @Param(yup.string())
    classification: string,
    @Param(yup.number())
    modifiedDate: number
  ) {
    const coffee = await Coffee.getOne(id);

    if (coffee.owner !== this.sender) {
      throw new Error('The current owner is the only user capable of update the coffee quality.');
    }
    coffee.quality = quality;
    coffee.classification = classification;
    coffee.modifiedBy = this.sender;
    coffee.modifiedDate = modifiedDate;

    await coffee.save();
  }
}
