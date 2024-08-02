# Pixcel6 Assignment
This project is a single-page application, that fetches and displays a list of employees with features like infinite scroll pagination, sorting, and filtering.

## Getting Started

### Initial Setup

- Created a new React app using Create React App.
- Set up the initial project structure.

## Updates

### - Initial Setup
- Initialized the project with Create React App.
- Set up the project directory structure.
- Installed Tailwind UI, Tailwind Css and Initialized tailwind.config.js
- Installed 'axios' for API services.
- Installing @headlessui/react @heroicons/react

## Let's Build
- Initialized EmployeeList page with starting styling check-up!!
- Imported Multiline Table component from Tailwind UI.
- Replicated Users Object and Fetched Successfully in the table. 
#### Learning - Found Padstart to ensure that the Id should have 2 charactors.

- Installed 'axios' and created services folder to fetch API Data.
- Exported fetchEmployeeData with Successful get request.
- By using UseEffect Hook, Got API Data in the list Page.

- Resolved the error - "Cannot read properties of undefined - map is not a funtion"
- (updated setEmp(response.users))

- Implimented sorting. Employee data sorted by Asc & Dec order using ID.
- similarly sorted age and name. 

- Updated UI and Funtionalitis, added filter icon and funtion. 
- Now to make filter component, I have improted Tailwind UI dropdowns but it uses Heroicons, so Installing @headlessui/react @heroicons/react it's a good lib.
- Updated dropdowns feilds as we required, and mapped availabe options for the dropdown Items.
- passing the value through the onlick event to the funtion filterByState and FilterByGender.
- Finally, setState updated in the sorting feilds so we can sort the data.

### Saperating the code in components - Saperating table component.
- by passing correct properties, saperated table in the new EmployeeTable.js
#### Learning - Found localeCompare function. More easear to handel.
- Updated Namesort funtions with localeCompare() 

- Installed Header Component from Tailwind UI
- removed unused part from the component
- updated logo - https://pixel6.co/wp-content/themes/pixel6/img/logo.png
- fixed height of the png and added border bottom to the component.

- added colors to the pngs and icons -[#800000]

- Implimented Lazy loading on table to optimize performance.
- added loading fallback.




