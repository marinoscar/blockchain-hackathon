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
    @Param(yup.string())
    variety: string,
    @Param(yup.string())
    category: string,
    @Param(yup.string())
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

  @Invokable()
  public async join(
    @Param(yup.string())
    id: string,
    @Param(yup.array(yup.object()))
    components: Array<Coffee>,
    @Param(yup.number())
    modifiedDate: number
  ) {
    const coffee = await Coffee.getOne(id);
    if (coffee.owner !== this.sender) {
      throw new Error('The current owner is the only user capable of join the coffee.');
    }
    let value = 0;
    components.map(component => {
      if (component.owner !== this.sender) {
        throw new Error('The current owner is the only user capable of join components.');
      }
      if (coffee.components) {
        coffee.components.push(component);
      } else {
        coffee.components = [component];
      }
      value = value + component.value;
    })
    coffee.value = value;
    coffee.modifiedBy = this.sender;
    coffee.modifiedDate = modifiedDate;

    await coffee.save();
  }

  @Invokable()
  public async split(
    @Param(yup.string())
    id: string,
    @Param(yup.array(yup.string()))
    splitIds: Array<string>,
    @Param(yup.number())
    modifiedDate: number
  ) {
    const coffee = await Coffee.getOne(id);
    if (coffee.owner !== this.sender) {
      throw new Error('The current owner is the only user capable of split the coffee.');
    }
    let value = 0;
    splitIds.map(async (splitId) => {
      const component = await Coffee.getOne(splitId);
      if (component.owner !== this.sender) {
        throw new Error('The current owner is the only user capable of split into splits.');
      }
      if (coffee.components) {
        coffee.components.push(component);
      } else {
        coffee.components = [component];
      }
      value = value + component.value;
    })
    if (coffee.value !== value) {
      throw new Error('The splits value sum should be the same as parents value');
    }
    coffee.modifiedBy = this.sender;
    coffee.modifiedDate = modifiedDate;

    await coffee.save();
  }
}
