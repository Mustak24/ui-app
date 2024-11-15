export function Button01({className='', title='Click'}){
    return <button className={`${className} rounded-md `}>
        {title}
    </button>
}