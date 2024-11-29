export default function AppHeader({ searchQuery, handleInput, handleSubmit }) {

    return (
        <header className='fixed-top'>
            <div className='input-search p-4 d-flex align-items-center justify-content-between'>
                <div>
                    <img src="/logo.png" alt="" />
                </div>
                <div className='d-flex'>
                    <input
                        className='form-control w-auto'
                        type="text"
                        value={searchQuery}
                        onChange={handleInput}
                        placeholder='Cerca film o serie TV...'
                    />
                    <div className='ps-4'>
                        <button type='submit' onClick={handleSubmit} className='ms-2'>Cerca</button>
                    </div>
                </div>
            </div>
        </header>
    )
}