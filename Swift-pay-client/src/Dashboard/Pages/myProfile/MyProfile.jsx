import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Address from './Address'
const MyProfile = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')

}
  return (
    <div className='max-w-3xl mx-auto'>
      <Tab.Group>
    <Tab.List className="flex space-x-1 rounded-xl bg-neutral-100 p-1">
        <Tab className={({ selected }) =>
            classNames(
                'w-full rounded-lg py-3 text-lg font-medium leading-5',
                'ring-white/60  ring-offset-blue-400 focus:outline-none ',
                selected
                    ? 'bg-white text-link shadow'
                    : 'text-black hover:text-primery text-lg font-medium'
            )
        }
        >Accoutn Details</Tab>

        <Tab className={({ selected }) =>
            classNames(
                'w-full rounded-lg py-3 text-lg font-medium leading-5',
                'ring-white/60  ring-offset-blue-400 focus:outline-none ',
                selected
                    ? 'bg-white text-link shadow'
                    : 'text-black hover:text-primery text-lg font-medium'
            )
        }
        >Address</Tab>

        <Tab className={({ selected }) =>
            classNames(
                'w-full rounded-lg py-3 text-lg font-medium leading-5',
                'ring-white/60  ring-offset-blue-400 focus:outline-none ',
                selected
                    ? 'bg-white text-link shadow'
                    : 'text-black hover:text-primery text-lg font-medium'
            )
        }
        >Orders</Tab>


    </Tab.List>
    <Tab.Panels>
        <Tab.Panel>
            {/* <AboutDoctor doctor={doctor} /> */}
        </Tab.Panel>
        <Tab.Panel>
        <Address/>
        </Tab.Panel>
        <Tab.Panel>
           {/* <Address/> */}
        </Tab.Panel>
       
    </Tab.Panels>
</Tab.Group>

    </div>
  )
}
export default MyProfile