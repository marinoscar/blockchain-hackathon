import * as yup from 'yup';
import {
  Controller,
  ConvectorController,
  Invokable,
  Param
} from '@worldsibu/convector-core-controller';

import { Location } from '../src/location.model';
import { ControllerAdapter } from '@worldsibu/convector-core-adapter';


export class LocationControllerClient extends ConvectorController {
  public name = 'location';

  constructor(public adapter: ControllerAdapter, public user?: string) {
    super()
  }

  
  public async create(
    
    id: string,
    
    name: string,
    
    latitude: string,
    
    longitude: string
  ) {

          return await this.adapter.invoke(this.name, 'create', this.user, id, name, latitude, longitude);
        
  }

  
  public async updateLocation(
    
    id: string,
    
    latitude: string,
    
    longitude: string
  ) {

          return await this.adapter.invoke(this.name, 'updateLocation', this.user, id, latitude, longitude);
        
  }
}
