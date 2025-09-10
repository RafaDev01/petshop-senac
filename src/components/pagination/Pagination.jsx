import './Pagination.css';

const Pagination = ( { totalDePaginas, paginaAtual, mudarPaginaAtual } ) => {
    return(
        <div className='pagination'>
            <button className='page-button next'
            onClick={() => paginaAtual < totalDePaginas && mudarPaginaAtual(paginaAtual - 1)}
            disabled={paginaAtual === 1}
            >
                Próximo &gt;
            </button>
            { Array.from( { length: totalDePaginas }, (_, i) => i + 1).map(numeroDaPagina => (
                <button 
                key={numeroDaPagina}
                className={`page-button ${paginaAtual === numeroDaPagina ? 'active' : ''}`}
                onClick={() => mudarPaginaAtual(numeroDaPagina)}
                >
                    {numeroDaPagina}
                </button>
            ))}

            <button className='page-button next'
            onClick={() => paginaAtual < totalDePaginas && mudarPaginaAtual(paginaAtual + 1)}
            disabled={paginaAtual === totalDePaginas}
            >
                Próximo &gt;
            </button>
        </div>
    );

}

export default Pagination;