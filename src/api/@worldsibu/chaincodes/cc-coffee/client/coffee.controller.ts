import * as yup from 'yup';
import {
  Controller,
  ConvectorController,
  Invokable,
  Param
} from '@worldsibu/convector-core-controller';

import { Coffee } from '../src/coffee.model';
import { ControllerAdapter } from '@worldsibu/convector-core-adapter';


export class CoffeeControllerClient extends ConvectorController {
  public name = 'coffee';

  constructor(public adapter: ControllerAdapter, public user?: string) {
    super()
  }

  
  public async create(
    
    id: string,
    
    sku: string,
    
    variety: string,
    
    category: string,
    
    description: string,
    
    value: number,
    
    createdDate: number
  ) {

          return await this.adapter.invoke(this.name, 'create', this.user, id, sku, variety, category, description, value, createdDate);
        
  }

  
  public async transfer(
    
    id: string,
    
    to: string,
    
    modifiedDate: number
  ) {

          return await this.adapter.invoke(this.name, 'transfer', this.user, id, to, modifiedDate);
        
  }

  
  public async updateQuality(
    
    id: string,
    
    quality: string,
    
    classification: string,
    
    modifiedDate: number
  ) {

          return await this.adapter.invoke(this.name, 'updateQuality', this.user, id, quality, classification, modifiedDate);
        
  }

  public async join(
    
    id: string,
    
    components: Array<Coffee>,
        
    modifiedDate: number
  ) {

          return await this.adapter.invoke(this.name, 'join', this.user, id, components, modifiedDate);
        
  }

  public async split(
    
    id: string,
    
    splitIds: Array<string>,
        
    modifiedDate: number
  ) {

          return await this.adapter.invoke(this.name, 'split', this.user, id, splitIds, modifiedDate);
        
  }
}
