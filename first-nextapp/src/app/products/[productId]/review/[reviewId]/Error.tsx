'use client';
export default function ErrorBoundary(){
    return (
        <>
            <div className="w-100% h-100% flex justify-center items-center">
                <div className=" w-30% h-30% bg-slate-900">
                    <h1>
                        Error in  reviewId
                    </h1>
                </div>
            </div>
        </>
    )
}