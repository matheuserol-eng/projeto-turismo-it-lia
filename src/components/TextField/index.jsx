export const TextField = ({id, label, ...props}) => {
    return (
        <fieldset className="flex flex-col space-y-2 mb-2" >
        <label htmlFor={id} className="font-medium">{label}</label>
        <input type={id} className="py-2 px-4 border rounded-2xl w-full" {...props} />
        </fieldset>
    )
}