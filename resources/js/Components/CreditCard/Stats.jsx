export default function Stats({stats}) {
    //console.log(stats)

    return (
        <div>
            <span id="ProgressLabel" className="sr-only">Stats</span>

            <span
                role="progressbar"
                aria-labelledby="ProgressLabel"
                aria-valuenow="75"
                className="block rounded-full h-2 bg-gray-200 -rotate-90"
            >
    <span
        className="block h-2 rounded-full bg-indigo-600"
        style={{'width' : '75%'}}
    ></span>
  </span>
        </div>
    );

}