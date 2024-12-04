import { StudentForm, LecturerForm } from "../Registration/RegistrionForms";    
import ModuleForm from "../Registration/M";
import BookForm from "../Registration/B";
import { DriverForm } from "../Registration/D";
import BackButton from "./back";
function Registration(){
    return (
        <>
        <BackButton/>
            <StudentForm/>
            <LecturerForm/>
            <BookForm/>
            <ModuleForm/>
            <DriverForm/>
        </>
    )
}

export default Registration;