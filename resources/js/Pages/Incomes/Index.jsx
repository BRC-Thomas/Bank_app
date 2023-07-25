import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Index({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Incomes{" "}
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="py-6 sm:py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    INCOMES INCOMES INCOMES INCOMES INCOMES
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
