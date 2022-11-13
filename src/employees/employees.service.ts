import { Injectable } from '@nestjs/common';
import { EmployeeRepository } from './employee.repository';

@Injectable()
export class EmployeesService {

    constructor(private employeeRepository: EmployeeRepository){}

    getAllEmployees(){
        return this.employeeRepository.findAll();
    }

    getEmployee(id: string){
        return this.employeeRepository.findOne(id);
    }

    addEmployee(firstName: string, lastName: string, age: number, address: string){

        const employee = {
            firstName,
            lastName,
            age,
            address
        }

        return this.employeeRepository.create(employee);
    }

    updateEmployee(id:string, firstName: string, lastName: string, age: number, address: string){
        const employee = {
            firstName,
            lastName,
            age,
            address
        }
        
        return this.employeeRepository.update(id, employee);
    }

    deleteEmployee(id:string){
        return this.employeeRepository.delete(id);
    }

}
