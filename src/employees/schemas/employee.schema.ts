import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, HydratedDocument } from "mongoose";

// export type EmployeeDocument = Employee & Document;
export type EmployeeDocument = HydratedDocument<Employee>;

@Schema({ versionKey: false })
export class Employee{
    @Prop({required: true})
    firstName:string

    @Prop()
    lastName:string

    @Prop()
    age:number

    @Prop()
    address:string
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
