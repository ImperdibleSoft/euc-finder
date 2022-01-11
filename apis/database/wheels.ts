import { Wheel } from '../../types';
import { wheels as availableWheels } from './data';

const getAllWheels = async (): Promise<Wheel[]> => availableWheels;

export const wheels = {
  /**
   * Return a complete list of available EUCs in the market
   */
  getAllWheels
};