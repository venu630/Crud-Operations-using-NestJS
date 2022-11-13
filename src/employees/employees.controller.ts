import { Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {

    constructor(private employeesService: EmployeesService) { }

    @Get("/getallemployees")
    getAllEmployees(){
        return this.employeesService.getAllEmployees();
    }

    @Get("/getemployee/:id")
    getEmployee(@Param("id") id){
        return this.employeesService.getEmployee(id);
    }

    @Post("/addemployee")
    addEmployee(@Body() request){
        return this.employeesService.addEmployee(request.firstName, request.lastName, request.age, request.address);
    }

    @Patch("/updateemployee/:id")
    updateEmployee(@Body() request, @Param("id") id){
        return this.employeesService.updateEmployee(id, request.firstName, request.lastName, request.age, request.address);
    }

    @Delete("/deleteemployee/:id")
    deleteEmployee(@Param("id") id) {
        return this.employeesService.deleteEmployee(id);
    }
}

