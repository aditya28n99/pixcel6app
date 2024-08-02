import { useEffect, useState } from "react"
import { fetchEmployeeData } from '../services/employeeServices';
import DropdownFilters from "../components/DropdownFilters";
import EmployeeTable from "../components/EmployeeTable";

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
                setFilteredList(response.users);
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
            setFilteredList(response); // getting resp in the filterdlist as we ware mapping it.
        } else {
            const response = empList.slice().sort((b, a) => (a.id - b.id));
            setFlag('descending')
            // console.log(response);
            setEmpList(response);
            setFilteredList(response);

        }
    }
    const handleAgeSort = () => {
        if (flag === 'descending') {
            const response = empList.slice().sort((a, b) => (a.age - b.age));
            setFlag('ascending');
            // console.log(response);
            setEmpList(response);
            setFilteredList(response);

        } else {
            const response = empList.slice().sort((b, a) => (a.age - b.age));
            setFlag('descending')
            console.log(response);
            setEmpList(response);
            setFilteredList(response);
        }
    }
    const handleNameSort = () => {
        if (flag === 'descending') {
            const response = empList.slice().sort((a, b) =>  a.firstName.localeCompare(b.firstName));
            setFlag('ascending');
            // console.log(response);
            setEmpList(response);
            setFilteredList(response);
        } else {
            const response = empList.slice().sort((b, a) =>  a.firstName.localeCompare(b.firstName));
            setFlag('descending')
            // console.log(response);
            setEmpList(response);
            setFilteredList(response);

        }
    }

    // const countryOptions = [...new Set(empList.map((employee, index) => employee.address.country))];
    // Here if we used to filterout the values using country then all the employees comes from US, then I decided to filter it out from "State" value.

    const stateOptions = [...new Set(empList.map((employee, index) => employee.address.state))];
    const genderOptions = [...new Set(empList.map((employee, index) => employee.gender))];

    setTimeout(() => {
        console.log(stateOptions);
        // Now we get all the availabe states and genders.
        console.log(genderOptions);
    }, 2000)

    //Implimenting fitler funcion for Filtering by Country

    const filterByState = (state) => { // changed name as State
        //need contry to filtre the condition.
        const response = empList.filter((e) => e.address.state === state);
        console.log("Filterd List response: ", response);
        setFilteredList(response);
    }
    const filterByGender = (gender) => {
        const response = empList.filter((e) => e.gender === gender);
        console.log("Filterd List response: ", response);
        setFilteredList(response);
    }

    return (
        <div className="p-6 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-4xl font-bold leading-6 text-gray-900">Employees</h1>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-[#800000]">
                    <path fillRule="evenodd" d="M3.792 2.938A49.069 49.069 0 0 1 12 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 0 1 1.541 1.836v1.044a3 3 0 0 1-.879 2.121l-6.182 6.182a1.5 1.5 0 0 0-.439 1.061v2.927a3 3 0 0 1-1.658 2.684l-1.757.878A.75.75 0 0 1 9.75 21v-5.818a1.5 1.5 0 0 0-.44-1.06L3.13 7.938a3 3 0 0 1-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836Z" clipRule="evenodd" />
                </svg>
                <div className="mt-4 sm:ml-8 sm:mt-0 sm:flex-none inline-block">

                    {/* Implimening Filters */}
                    <DropdownFilters
                        stateOptions={stateOptions}
                        genderOptions={genderOptions}
                        filterByState={filterByState}
                        filterByGender={filterByGender}
                    />
                    {/* // Removed unnessesory buttons */}
                </div>
            </div>
            <div className="mt-8 flow-root border-2 rounded-2xl px-6">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        {/* Table saperated */}
                        <EmployeeTable
                        handleIDSort={handleIDSort}
                        handleAgeSort={handleAgeSort}
                        handleNameSort={handleNameSort}
                        filteredList={filteredList}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
