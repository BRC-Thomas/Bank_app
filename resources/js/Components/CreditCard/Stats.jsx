// Stats.jsx
export default function Stats({stats}) {
    return (
        <div className={' flex '}>

            {stats.map((stat, index) => {
                return (
                    <div className="ml-2 flex flex-col items-center justify-center rotate-180">
                        <div className="h-12 w-2 overflow-hidden rounded-md bg-gray-200">
                            <div className="h-full bg-indigo-600/80 rounded-full" style={{'height': `${stat * 10}%`}}></div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}