import React from 'react';
import Button from '../components/Button';

const Homepage = () => {
    return (
        <>
            <h1 className='text-6xl text-center text-black'><b>Library App</b> ti da il <br /> benvenuto!</h1>
            <Button title={'Aggiungi Libro'} />
            <Button title={'Aggiungi Utente'} />
            <div className='flex items-center justify-between gap-4'>
                <Button primary={false} title={'Cosa posso fare'}></Button>
                <Button primary={false} title={'Come posso farlo'}></Button>
            </div>
            <div className='text-center text-sm text-[#989898] mt-24'>
                <p>
                    Library-App è un progetto sviluppato a scopo accademico<br />
                    da autodidatta.<br />
                    Questa piattaforma ha lo scopo di rappresentare una<br />
                    semplice gestione bibliotecaria.<br />
                    <br />
                    Realizzato da Mauro Tramentozzi.
                </p>
            </div>
        </>
    )
}

export default Homepage;