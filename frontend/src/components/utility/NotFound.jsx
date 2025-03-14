const NotFound = ({ message }) => {
    return (
        <div className="text-center main-info">
            <h1 className='text-6xl font-bold text-center text-black'>ERRORE 404</h1>
            <p className='tracking-[0.15rem] text-center text-lg text-[#989898] mt-4'>{message}</p>
        </div>
    );
}

export default NotFound;