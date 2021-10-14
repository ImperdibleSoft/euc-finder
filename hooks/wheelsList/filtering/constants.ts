import { TFunction } from 'react-i18next';
import { CheckboxProps } from '../../../components/Form/Checkbox';
import { DropdownItem } from '../../../components/Form/Dropdown';
import { brands } from '../../../context/data';
import { AntiSpin, BrandId, Color, Display, Kickstand, SoundSystem, Suspension, TrolleyHandle } from '../../../types';
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
      label: formatters.suspension(Suspension.custom),
      value: Suspension.custom
    },
    {
      label: formatters.suspension(Suspension.standard),
      value: Suspension.standard
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
      label: formatters.antiSpin(AntiSpin.sensor),
      value: AntiSpin.sensor
    },
    {
      label: formatters.antiSpin(AntiSpin.button),
      value: AntiSpin.button
    },
    {
      label: formatters.antiSpin(AntiSpin.position),
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
      label: formatters.kickstand(Kickstand.dedicated),
      value: Kickstand.dedicated
    },
    {
      label: formatters.kickstand(Kickstand.shell),
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
      label: formatters.trolleyHandle(TrolleyHandle.scorpion),
      value: TrolleyHandle.scorpion
    },
    {
      label: formatters.trolleyHandle(TrolleyHandle.telescopic),
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
      label: formatters.soundChannels(SoundSystem.fivePointOne),
      value: SoundSystem.fivePointOne
    },
    {
      label: formatters.soundChannels(SoundSystem.forPointO),
      value: SoundSystem.forPointO
    },
    {
      label: formatters.soundChannels(SoundSystem.twoPointOne),
      value: SoundSystem.twoPointOne
    },
    {
      label: formatters.soundChannels(SoundSystem.twoPointO),
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
      label: formatters.display(Display.lcd),
      value: Display.lcd
    },
    {
      label: formatters.display(Display.led),
      value: Display.led
    }
  ];
  
  const colorOptions: DropdownItem[] = [
    {
      label: t('selectAnOption-label'),
      value: undefined
    },
    {
      label: formatters.color(Color.white),
      value: Color.white
    },
    {
      label: formatters.color(Color.black),
      value: Color.black
    }
  ];

  return {
    brandIdOptions,
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