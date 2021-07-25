const InputField = ({ label, ...props }) => {
    return (
        <div className='relative border-2 rounded-2xl mr-2 ml-2 focus-within:border-base-bg'>
            <input placeholder=" " name={label} className='block p-2 text-lg w-full appearance-none focus:outline-none bg-transparent' {...props} />
            <label label={label} className='absolute bg-thin-white text-gray-400 p-2 top-0 -z-1 origin-0 duration-300'>{label}</label>
        </div>
    )
}

export default InputField;