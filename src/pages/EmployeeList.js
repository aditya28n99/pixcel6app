import { useEffect, useState } from "react"
import { fetchEmployeeData } from '../services/employeeServices';

// Removed Hardcoded Data as we fetched API

// Added Tailwind UI Multiline Table Component. 
export default function EmployeeList() {

    // using useState Hook, Initialized Employeelist empty arrya.
    const [empList, setEmpList] = useState([]);
    const [flag, setFlag] = useState('ascending');


    useEffect(() => {
        const getEmpData = async () => {
            try {
                const response = await fetchEmployeeData();
                console.log("Got API Data in the list!! :", response);
                // setEmpList(response.data);
                setEmpList(response.users); // specifid users object!!

            } catch (error) {
                console.log("failed to get the data :", error);
            }
        }
        getEmpData();
    }, []);

    // Implimenting Sorting Funtionality.
    const handleSort = () => {
        if (flag === 'descending') {
            //impimneting simple sorting funtion.
            const response = empList.slice().sort((a, b) => (a.id - b.id));
            setFlag('ascending');
            console.log(response);
            setEmpList(response);
        } else {
            const response = empList.slice().sort((b, a) => (a.id - b.id));
            setFlag('descending')
            console.log(response);
            setEmpList(response);
        }
    }

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the users in your account including their name, title, email and role.
                    </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button
                        type="button"
                        className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Add user
                    </button>
                </div>
            </div>
            <div className="mt-8 flow-root border-2 rounded-2xl px-6">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                        Id
                                        {/* Added Sort Icon and styled in tailwind */}
                                        <button className="font-sm py-3.5 pl-4 pr-3 text-left text-sm text-gray-900 sm:pl-0" onClick={handleSort}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 ml-2 ">
                                            <path fillRule="evenodd" d="M6.97 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.25 4.81V16.5a.75.75 0 0 1-1.5 0V4.81L3.53 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5Zm9.53 4.28a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V7.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                                        </svg>
                                        </button>
                                    </th>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                        Image
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Full Name
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Demography
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Designation
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Location
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {empList.map(person => (
                                    <tr key={person.id}>
                                        <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                                            <div className="flex items-center">
                                                <div className="mt-1 text-gray-500">{person.id.toString().padStart(2, '0')}</div>
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                                            <div className="flex items-center rounded-full">
                                                <div className="h-11 w-11 flex-shrink-0 rounded-full">
                                                    <img alt="" src={person.image} className="h-11 w-11 rounded-full" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">                            <div className="font-medium text-gray-900">{person.firstName + ' ' + person.maidenName + ' ' + person.lastName}</div>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                            <div className="text-gray-900">{person.gender.slice(0, 1).toUpperCase() + '/' + person.age}</div>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                            <div className="text-gray-900">{person.company.title}</div>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                                            <div className="text-gray-900">{person.address.state + ', ' + person.address.country}</div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
