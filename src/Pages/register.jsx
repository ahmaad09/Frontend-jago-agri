import FromRegister from "../components/Elemets/Fragments/FromRegister";
import AutsLayouts from "../components/Elemets/Layouts/AutsLayout";

const RegisterPages = () => {
    return (
        <AutsLayouts title="Sign Up" type='register' bg="register">
            <FromRegister />
        </AutsLayouts>
    );
};
export default RegisterPages;