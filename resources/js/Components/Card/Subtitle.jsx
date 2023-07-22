export default function Subtitle({subtitle, className}){
    return (
        <p className={`text-slate-500 text-sm ${className}`}>{subtitle}</p>
    )
}