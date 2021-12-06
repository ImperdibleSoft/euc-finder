/* eslint-disable max-lines */
import { TFunction } from 'react-i18next';
import { CheckboxProps } from '../../../components/Form/Checkbox';
import { DropdownItem } from '../../../components/Form/Dropdown';
import { brands } from '../../../store/models/data';
import {
  AntiSpin,
  BrandId,
  Category,
  Color,
  Display,
  Kickstand,
  SoundSystem,
  Suspension,
  TrolleyHandle
} from '../../../types';
import * as formatters from '../../../utils/formatters';

// eslint-disable-next-line max-lines-per-function
export const getDropdownOptions = (t: TFunction<'translation'>) => {
  const brandIdOptions: CheckboxProps[] = Object
    .values(BrandId)
    .map(brand => ({
      label: brands[brand].name,
      name: brands[brand].id,
      onChange: ()=> { return; }
    }));

  const categoryOptions: CheckboxProps[] =
    (['extreme', 'high-end', 'standard', 'starter'] as Category[])
      .map(category => ({
        label: t(`${ category }-label`),
        name: category,
        onChange: ()=> { return; }
      }));
  
  const suspensionOptions: DropdownItem[] = [
    {
      label: t('selectAnOption-label'),
      value: undefined
    },
    {
      label: `${ t('without') } ${ t('suspension') }`,
      value: 'false'
    },
    {
      label: `${ t('withAny') } ${ t('suspension') }`,
      value: 'true'
    },
    {
      label: formatters.suspension(Suspension.standard, t),
      value: Suspension.standard
    },
    {
      label: formatters.suspension(Suspension.custom, t),
      value: Suspension.custom
    }
  ];
  
  const antiSpinOptions: DropdownItem[] = [
    {
      label: t('selectAnOption-label'),
      value: undefined
    },
    {
      label: `${ t('withAny') } ${ t('antiSpin') }`,
      value: 'true'
    },
    {
      label: formatters.antiSpin(AntiSpin.sensor, t),
      value: AntiSpin.sensor
    },
    {
      label: formatters.antiSpin(AntiSpin.button, t),
      value: AntiSpin.button
    },
    {
      label: formatters.antiSpin(AntiSpin.position, t),
      value: AntiSpin.position
    }
  ];
  
  const kickstandOptions: DropdownItem[] = [
    {
      label: t('selectAnOption-label'),
      value: undefined
    },
    {
      label: `${ t('withAny') } ${ t('kickstand') }`,
      value: 'true'
    },
    {
      label: formatters.kickstand(Kickstand.dedicated, t),
      value: Kickstand.dedicated
    },
    {
      label: formatters.kickstand(Kickstand.shell, t),
      value: Kickstand.shell
    }
  ];
  
  const trolleyHandleOptions: DropdownItem[] = [
    {
      label: t('selectAnOption-label'),
      value: undefined
    },
    {
      label: `${ t('withAny') } ${ t('trolleyHandle') }`,
      value: 'true'
    },
    {
      label: formatters.trolleyHandle(TrolleyHandle.scorpion, t),
      value: TrolleyHandle.scorpion
    },
    {
      label: formatters.trolleyHandle(TrolleyHandle.telescopic, t),
      value: TrolleyHandle.telescopic
    }
  ];
  
  const ledOptions: DropdownItem[] = [
    {
      label: t('selectAnOption-label'),
      value: undefined
    },
    {
      label: `${ t('without') } ${ t('leds') }`,
      value: 'false'
    },
    {
      label: `${ t('with') } ${ t('leds') }`,
      value: 'true'
    }
  ];
  
  const soundSystemOptions: DropdownItem[] = [
    {
      label: t('selectAnOption-label'),
      value: undefined
    },
    {
      label: `${ t('withAny') } ${ t('sound').replace(' (ch)', '') }`,
      value: 'true'
    },
    {
      label: formatters.soundChannels(SoundSystem.fivePointOne, t),
      value: SoundSystem.fivePointOne
    },
    {
      label: formatters.soundChannels(SoundSystem.forPointO, t),
      value: SoundSystem.forPointO
    },
    {
      label: formatters.soundChannels(SoundSystem.twoPointOne, t),
      value: SoundSystem.twoPointOne
    },
    {
      label: formatters.soundChannels(SoundSystem.twoPointO, t),
      value: SoundSystem.twoPointO
    }
  ];
  
  const displayOptions: DropdownItem[] = [
    {
      label: t('selectAnOption-label'),
      value: undefined
    },
    {
      label: `${ t('without') } ${ t('display') }`,
      value: 'false'
    },
    {
      label: `${ t('withAny') } ${ t('display') }`,
      value: 'true'
    },
    {
      label: formatters.display(Display.lcd, t),
      value: Display.lcd
    },
    {
      label: formatters.display(Display.led, t),
      value: Display.led
    }
  ];
  
  const colorOptions: DropdownItem[] = [
    {
      label: t('selectAnOption-label'),
      value: undefined
    },
    {
      label: formatters.color(Color.white, t),
      value: Color.white
    },
    {
      label: formatters.color(Color.black, t),
      value: Color.black
    }
  ];

  return {
    brandIdOptions,
    categoryOptions,
    suspensionOptions,
    antiSpinOptions,
    kickstandOptions,
    trolleyHandleOptions,
    ledOptions,
    soundSystemOptions,
    displayOptions,
    colorOptions
  };
};