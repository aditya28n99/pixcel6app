import { useEffect, useState } from "react"
import { fetchEmployeeData } from '../services/employeeServices';
import DropdownFilters from "../components/DropdownFilters";

// Removed Hardcoded Data as we fetched API

// Added Tailwind UI Multiline Table Component. 
export default function EmployeeList() {

    // using useState Hook, Initialized Employeelist empty arrya.
    const [empList, setEmpList] = useState([]);
    const [flag, setFlag] = useState('ascending');
    const [filteredList, setFilteredList] = useState([]); // for filtered data 


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
    const handleIDSort = () => {
        if (flag === 'descending') {
            //impimneting simple sorting funtion.
            const response = empList.slice().sort((a, b) => (a.id - b.id));
            setFlag('ascending');
            // console.log(response);
            setEmpList(response);
        } else {
            const response = empList.slice().sort((b, a) => (a.id - b.id));
            setFlag('descending')
            // console.log(response);
            setEmpList(response);
        }
    }
    const handleAgeSort = () => {
        if (flag === 'descending') {
            const response = empList.slice().sort((a, b) => (a.age - b.age));
            setFlag('ascending');
            // console.log(response);
            setEmpList(response);
        } else {
            const response = empList.slice().sort((b, a) => (a.age - b.age));
            setFlag('descending')
            console.log(response);
            setEmpList(response);
        }
    }
    const handleNameSort = () => {
        if (flag === 'descending') {
            const response = empList.slice().sort((a, b) => (a.firstName < b.firstName));
            setFlag('ascending');
            // console.log(response);
            setEmpList(response);
        } else {
            const response = empList.slice().sort((b, a) => (a.firstName > b.firstName));
            setFlag('descending')
            // console.log(response);
            setEmpList(response);
        }
    }


    //Implimenting fitler funcion for Filtering by Country

    const filterByCountry = (country) => {
        //need contry to filtre the condition.
        const response = empList.filter((e) => e.address.country === country);
        console.log("Filterd List response: ", response);
        setFilteredList(response);
    }

    return (
        <div className="p-6 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-4xl font-bold leading-6 text-gray-900">Employees</h1>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M3.792 2.938A49.069 49.069 0 0 1 12 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 0 1 1.541 1.836v1.044a3 3 0 0 1-.879 2.121l-6.182 6.182a1.5 1.5 0 0 0-.439 1.061v2.927a3 3 0 0 1-1.658 2.684l-1.757.878A.75.75 0 0 1 9.75 21v-5.818a1.5 1.5 0 0 0-.44-1.06L3.13 7.938a3 3 0 0 1-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836Z" clipRule="evenodd" />
                </svg>
                <div className="mt-4 sm:ml-8 sm:mt-0 sm:flex-none inline-block">

                    {/* Implimening Filters */}
                    <DropdownFilters/>
                    <button className="mr-5">Country</button>
                    <button>Gender</button>
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
                                        <button className="font-sm py-3.5 pl-4 pr-3 text-left text-sm text-gray-900 sm:pl-0" onClick={handleIDSort}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 ml-2 ">
                                            <path fillRule="evenodd" d="M6.97 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.25 4.81V16.5a.75.75 0 0 1-1.5 0V4.81L3.53 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5Zm9.53 4.28a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V7.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                                        </svg>
                                        </button>
                                    </th>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                        Image
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Full Name
                                        {/* Added Sort Icon and styled in tailwind */}
                                        <button className="font-sm py-3.5 pl-4 pr-3 text-left text-sm text-gray-900 sm:pl-0" onClick={handleNameSort}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 ml-2 ">
                                            <path fillRule="evenodd" d="M6.97 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.25 4.81V16.5a.75.75 0 0 1-1.5 0V4.81L3.53 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5Zm9.53 4.28a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V7.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                                        </svg>
                                        </button>
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Demography
                                        {/* Added Sort Icon and styled in tailwind */}
                                        <button className="font-sm py-3.5 pl-4 pr-3 text-left text-sm text-gray-900 sm:pl-0" onClick={handleAgeSort}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 ml-2 ">
                                            <path fillRule="evenodd" d="M6.97 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.25 4.81V16.5a.75.75 0 0 1-1.5 0V4.81L3.53 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5Zm9.53 4.28a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V7.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                                        </svg>
                                        </button>
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
