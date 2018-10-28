import * as yup from 'yup';
import {
  Controller,
  ConvectorController,
  Invokable,
  Param
} from '@worldsibu/convector-core-controller';

import { Location } from './location.model';

@Controller('location')
export class LocationController extends ConvectorController {
  @Invokable()
  public async create(
    @Param(yup.string())
    id: string,
    @Param(yup.string())
    name: string,
    @Param(yup.string())
    latitude: string,
    @Param(yup.string())
    longitude: string
  ) {
    const exists = await Location.getOne(id);

    if (exists.id === id) {
      throw new Error('There is already one location with that unique id');
    }

    let location = new Location(id);
    location.owner = this.sender;
    location.name = name;
    location.latitude = latitude;
    location.longitude = longitude;

    await location.save();
  }

  @Invokable()
  public async updateLocation(
    @Param(yup.string())
    id: string,
    @Param(yup.string())
    latitude: string,
    @Param(yup.string())
    longitude: string
  ) {
    const location = await Location.getOne(id);
    if (location.owner !== this.sender) {
      throw new Error('The current owner is the only user capable of update the location.');
    }
    location.latitude = latitude;
    location.longitude = longitude;

    await location.save();
  }
}
