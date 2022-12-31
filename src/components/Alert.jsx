import React from 'react'

const Alert = (props) => {
    let type = props.alert.type;
    console.log(type);
    return (
        <>
            {type==="success" && <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 sticky top-0 pb-2 z-40" role="alert">
                <p className="font-bold">Success</p>
                <p className="text-sm">{props.alert.msg}.</p>
            </div>}

            {type=="danger" && <div className="bg-red-100 border-t border-b border-red-500 text-red-700 px-4 py-3 sticky top-0 pb-2 z-40" role="alert">
                <p className="font-bold">Error</p>
                <p className="text-sm">{props.alert.msg}.</p>
            </div>}

            {type==="Success" && <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 sticky top-[48px] pb-2 z-40 w-screen" role="alert">
                <p className="font-bold">Message</p>
                <p className="text-sm">{props.alert.msg}.</p>
            </div>}

        </>
    )
}

export default Alert;