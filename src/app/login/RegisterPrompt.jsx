import { UserPlus } from 'lucide-react';

export default function RegisterPrompt() {
    return (
        <div className="mt-4 text-center">
            <p>¿No tienes una cuenta?</p>
            <button className="text-blue-600 hover:underline mt-2 flex items-center justify-center mx-auto">
                <UserPlus size={18} className="mr-2" />
                Registrarse
            </button>
        </div>
    );
}
