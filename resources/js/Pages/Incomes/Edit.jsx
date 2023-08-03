import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Edit({ auth, income }) {
console.log(income)
    return (
        <AuthenticatedLayout
            user={auth.user}

        >


        </AuthenticatedLayout>
    );
}
