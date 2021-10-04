import { CheckboxProps } from "../../../components/Form/Checkbox";
import { DropdownItem } from "../../../components/Form/Dropdown";
import { wheelFeatureNames } from "../../../constants";
import { brands } from "../../../context/data";
import { AntiSpin, BrandId, Color, Display, Kickstand, SoundSystem, Suspension, TrolleyHandle } from "../../../types";
import * as formatters from '../../../utils/formatters'

export const brandIdOptions: CheckboxProps[] = Object
  .values(BrandId)
  .map(brand => ({
    label: brands[brand].name,
    name: brands[brand].id,
    onChange: ()=> { return; }
  }));

export const suspensionOptions: DropdownItem[] = [
  {
    label: 'Seleccionar una opción',
    value: undefined
  },
  {
    label: `Sin ${ wheelFeatureNames.suspension }`,
    value: 'false'
  },
  {
    label: `Con cualquier ${ wheelFeatureNames.suspension }`,
    value: 'true'
  },
  {
    label: formatters.suspension(Suspension.oil),
    value: Suspension.oil
  },
  {
    label: formatters.suspension(Suspension.air),
    value: Suspension.air
  }
];

export const antiSpinOptions: DropdownItem[] = [
  {
    label: 'Seleccionar una opción',
    value: undefined
  },
  {
    label: `Con cualquier ${ wheelFeatureNames.antiSpin }`,
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

export const kickstandOptions: DropdownItem[] = [
  {
    label: 'Seleccionar una opción',
    value: undefined
  },
  {
    label: `Con cualquier ${ wheelFeatureNames.kickstand }`,
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

export const trolleyHandleOptions: DropdownItem[] = [
  {
    label: 'Seleccionar una opción',
    value: undefined
  },
  {
    label: `Con cualquier ${ wheelFeatureNames.trolleyHandle }`,
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

export const ledOptions: DropdownItem[] = [
  {
    label: 'Seleccionar una opción',
    value: undefined
  },
  {
    label: `Sin ${ wheelFeatureNames.leds }`,
    value: 'false'
  },
  {
    label: `Con ${ wheelFeatureNames.leds }`,
    value: 'true'
  }
];

export const soundSystemOptions: DropdownItem[] = [
  {
    label: 'Seleccionar una opción',
    value: undefined
  },
  {
    label: `Con cualquier ${ wheelFeatureNames.sound.replace(' (ch)', '') }`,
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

export const displayOptions: DropdownItem[] = [
  {
    label: 'Seleccionar una opción',
    value: undefined
  },
  {
    label: `Sin ${ wheelFeatureNames.display }`,
    value: 'false'
  },
  {
    label: `Con cualquier ${ wheelFeatureNames.display }`,
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

export const colorOptions: DropdownItem[] = [
  {
    label: 'Selecciona una opción',
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