import FromResetEmail from "../components/Elemets/Fragments/FromResetEmail";
import AutsLayouts from "../components/Elemets/Layouts/AutsLayout"

const ResetEmail = () => {
    return (
        <AutsLayouts title="Reset Email" type='resetusername' bg="login">
            <FromResetEmail />
        </AutsLayouts>
    )
}
export default ResetEmail;