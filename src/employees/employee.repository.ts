import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Employee, EmployeeDocument } from "./schemas/employee.schema";

@Injectable()
export class EmployeeRepository{

    constructor(@InjectModel("Employee") private employeeModel: Model<EmployeeDocument>){

    }

    async create(createEmployeeDTO: Employee): Promise<Employee>{
        let newEmployee = new this.employeeModel(createEmployeeDTO);
        return await newEmployee.save();
    }

    async findAll(){
        return await this.employeeModel.find();
    }

    async findOne(id: string){
        return await this.employeeModel.findById(id);
    }

    async update(id:string, createEmployeeDTO: Employee){
        return await this.employeeModel.findOneAndUpdate({id: id}, createEmployeeDTO, {new : true});

    }

    async delete(id: string){
        return await this.employeeModel.deleteOne({id: id});
    }
}