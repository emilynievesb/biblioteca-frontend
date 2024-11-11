"use client"

export default function FormInput({ label, id, type, register, error }) {
    return (
        <div>
            <label htmlFor={id} className="block mb-1">
                {label}
            </label>
            <input type={type} id={id} {...register} className="w-full px-3 py-2 border rounded-md" />
            {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
        </div>
    );
}
