const addDepartmentInquirer = require('./addDepartmentInquirer');
const addEmployeeInquirer = require('./addEmployeeInquirer');
const addRoleInquirer = require('./addRoleInquirer');
const deleteDepartmentInquirer = require('./deleteDepartmentInquirer');
const deleteEmployeeInquirer = require('./deleteEmployeeInquirer');
const deleteRoleInquirer = require('./deleteRoleInquirer');
const updateEmployeeManagerInquirer = require('./updateEmployeeManagerInquirer');
const updateEmployeeRoleInquirer = require('./updateEmployeeRoleInquirer');
const viewEmployeesByManagerInquirer = require('./viewEmployeesByManagerInquirer');
const viewEmployeesByDepartmentInquirer = require('./viewEmployeesByDepartmentInquirer');
const mainInquirer = require('./mainInquirer');

module.exports = {
    addDepartmentInquirer,
    addEmployeeInquirer,
    addRoleInquirer,

    deleteDepartmentInquirer,
    deleteEmployeeInquirer,
    deleteRoleInquirer,

    updateEmployeeManagerInquirer,
    updateEmployeeRoleInquirer,

    viewEmployeesByDepartmentInquirer,
    viewEmployeesByManagerInquirer,

    mainInquirer
}
