interface InputTeaxtProps{
    label:string;
    nama:string;
    error?:string;
    register:any;
}

export const InputText: React.FC<InputTeaxtProps> = ({label, nama, error, register}) => {
    return(
         <div className="flex flex-col gap-1 mb-4">
                    <label htmlFor={nama}>{label}</label>
                    <input 
                    type="text" 
                    {...register(nama)}
                    placeholder={label} 
                    className="border p-2"
                    />
                    {error && <p className="text-red-500">{error}</p>}
                </div>
    );
}