export default function Title({title, className}){
    return (
        <p className={`text - sm tracking-tight font-medium text-slate-500 ${className}`}>{title}</p>
    )
}