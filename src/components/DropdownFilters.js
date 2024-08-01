import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function DropdownFilter({ stateOptions, genderOptions, filterByState, filterByGender }) {

  return (
    <>
      <div className="flex text-left">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              Gender
              <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"

          >
            <div className="py-1">
              {genderOptions.map((option, index) => (
                <MenuItem key={index} >
                  <button
                    className="block px-4 py-2 text-sm font-medium text-gray-900 data-[focus]:bg-gray-100"
                    onClick={()=> filterByGender(option)}
                  >
                    {option}
                  </button>
                </MenuItem>
              ))}
            </div>
          </MenuItems>
        </Menu>

        <Menu as="div" className="relative inline-block ml-4 text-left">
          <div>
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              country
              <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="py-1">
              {stateOptions.map((option, index) => (
                <MenuItem key={index}>
                  <button
                    className="block px-4 py-2 text-sm font-medium text-gray-900 data-[focus]:bg-gray-100"
                    onClick={() => filterByState(option)}
                  >
                    {option}
                  </button>
                </MenuItem>
              ))}
            </div>
          </MenuItems>
        </Menu>
      </div>
    </>
  )
}
