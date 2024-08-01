// Dummy Users - Hardcoded Data
const users = [
    {
        "id": 1,
        "firstName": "Emily",
        "lastName": "Johnson",
        "maidenName": "Smith",
        "age": 28,
        "gender": "female",

        "birthDate": "1996-5-30",
        "image": "https://dummyjson.com/icon/emilys/128",

        "address": {
            "address": "626 Main Street",
            "city": "Phoenix",
            "state": "Mississippi",
            "stateCode": "MS",
            "postalCode": "29112",
            "coordinates": {
                "lat": -77.16213,
                "lng": -92.084824
            },
            "country": "United States"
        },

        "company": {
            "department": "Engineering",
            "name": "Dooley, Kozey and Cronin",
            "title": "Sales Manager",
            "address": {
                "address": "263 Tenth Street",
                "city": "San Francisco",
                "state": "Wisconsin",
                "stateCode": "WI",
                "postalCode": "37657",
                "coordinates": {
                    "lat": 71.814525,
                    "lng": -161.150263
                },
                "country": "United States"
            }
        },
    },
]
// Added Tailwind UI Multiline Table Component. 
export default function EmployeeList() {
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
                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {users.map(person => (
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
