import { useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { CaretDown } from 'phosphor-react';

const regions = [
  { name: 'Africa' },
  { name: 'America' },
  { name: 'Asia' },
  { name: 'Europe' },
  { name: 'Oceania' },
];

export function RegionSelect({ defaultLabel }) {
  const [selected, setSelected] = useState();

  function renderOptions() {
    return regions.map((region, index) => (
      <Listbox.Option
        key={index}
        className={({ active }) =>
          `cursor-pointer ${active ? 'text-sky-500' : ''}`
        }
        value={region}
      >
        {region.name}
      </Listbox.Option>
    ));
  }

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative w-60">
        <Listbox.Button className="flex w-full rounded justify-between items-center bg-white px-6 h-12 shadow-sm dark:text-white dark:bg-gray-600 transition-colors">
          <span
            className={classNames('', {
              'text-gray-400 dark:text-gray-200': selected === defaultLabel,
            })}
          >
            {selected?.name ? selected.name : defaultLabel}
          </span>
          <CaretDown size={14} />
        </Listbox.Button>

        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Listbox.Options className="absolute top-1 px-6 py-4 bg-white dark:bg-gray-600 dark:text-white w-full rounded flex flex-col gap-1">
            {renderOptions()}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
