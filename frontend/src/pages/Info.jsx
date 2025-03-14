import Button from '../components/utility/Button';

const Info = () => {
    return (
        <>
            <h1 className='text-6xl text-center text-black'>Cos'è <b>Library App</b>?</h1>
            <div className='text-center text-md text-[#989898] mt-8'>
                <p>
                    Library-App è un semplice applicativo sviluppato con l'intento di<br />
                    simulare una piccola gestione bibliotecaria.<br />
                    Ma cosa ci permette di fare?<br /><br />
                    <b className='text-primary'>UTENTI</b><br /><br />
                    Abbiamo la possibilità di creare, modificare e cancellare gli utenti<br />
                    Inoltre, possiamo assegnare a loro fino ad un massimo di 3 libri, una volta<br />
                    raggiunto questo limite, l'utente dovrà restituire almeno un libro per poterne prendere<br />
                    un altro in prestito.<br /><br />
                    <b className='text-primary'>LIBRI</b><br /><br />
                    Abbiamo la possibilità di creare, modificare e cancellare i libri<br />
                    Possiamo assegnarli ad un utente fino all'esaurimento delle disponibilità, una volta<br />
                    che le disponibilità arriveranno a 0, dovrà essere restituito almeno un libro per poter essere di nuovo consegnato.<br />
                </p>
            </div>
            <Button primary={false} title="Torna alla home" />
        </>
    );
}

export default Info;